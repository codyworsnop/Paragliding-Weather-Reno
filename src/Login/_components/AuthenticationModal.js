import React, { useState } from 'react';
import { Modal, Row, Col, Form, Input, Button } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { registerWithEmailAndPassword, signInWithEmail, signInWithGoogle, sendPasswordResetEmailHelper } from '../../firebase'
import { Stack } from '@bedrock-layout/stack';
import googleLogo from '../../images/google_signin.png'

const StyledFormItem = styled(Form.Item)`
    margin: 10px 0px;
`;

const Greyed = styled.p`
    color: #444444;
`;

const LoginButton = styled(Button)`
    width: 200px; 
    height: 50px; 
`;

const Centered = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`;

const BottomBorder = styled.div`
    border-bottom: 1px solid #bebebe;
`;

const AuthenticationModal = ({ visible, setVisible }) => {
    const [useLogin, setUseLogin] = useState(true)
    const [errorState, setErrorState] = useState('')
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {

            let values = await form.validateFields()

            if (useLogin) {
                await signInWithEmail(values.email, values.password)
            } else {
                await registerWithEmailAndPassword(values.email, values.password)
            }

            form.resetFields()
            setVisible(false)
            setErrorState('')
            setUseLogin(true)
        } catch (error) {
            setErrorState(error.message)
        }
    };

    const loginGoogle = async () => {
        await signInWithGoogle()
        setVisible(false)
    }

    return (

        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)} width={400}>
            <Row>
                <Col span={24}>
                    <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Sign {useLogin ? <>In</> : <>Up</>}</h2>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <StyledFormItem
                            name="email"
                            rules={[{ required: true, message: 'Email is required' }]}
                        >
                            <Input placeholder="Email" />
                        </StyledFormItem>

                        <StyledFormItem
                            name="password"
                            rules={[{ required: true, message: 'Password is required' }]}>
                            <Input.Password placeholder="Password" />
                        </StyledFormItem>

                        <StyledFormItem>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                <>Sign {useLogin ? <>In</> : <>Up</>}</>
                            </Button>
                        </StyledFormItem>
                    </Form>
                    {errorState && <p style={{ color: 'red' }}>{errorState}</p>}
                </Col>
            </Row>
            {useLogin && <Row style={{ textAlign: 'center' }}>
                <Col span={24}>
                    <Stack gutter='md'>
                        <Greyed>or sign in with:</Greyed>
                        <Centered>
                            <LoginButton ghost onClick={loginGoogle}>
                                <img src={googleLogo} style={{ width: '100%', height: '100%' }} alt='' />
                            </LoginButton>
                        </Centered>
                        <BottomBorder />
                    </Stack>
                </Col>
            </Row>}
            <Row style={{ textAlign: 'center', marginTop: '20px' }}>
                <Col span={24}>
                    <Centered>
                        <Stack gutter='sm'>
                        {useLogin ?
                            <Greyed>Not a member yet? <a href='/' onClick={() => {
                                setUseLogin(false)
                                form.resetFields()
                            }}>Sign Up</a></Greyed> : <Greyed>Already a member? <a href='/' onClick={() => setUseLogin(true)}>Sign In</a></Greyed>}
                        {useLogin && (
                                <Greyed>Forgot password? <a href='/' onClick={() => sendPasswordResetEmailHelper(form.getFieldValue('email'))}>Click Here</a></Greyed>
                        )}
                        </Stack>
                    </Centered>
                </Col>
            </Row>
        </Modal>
    )
}

AuthenticationModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
};

export default AuthenticationModal