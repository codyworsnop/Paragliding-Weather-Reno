import React, { useState } from 'react'
import styled from 'styled-components'
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import MarkdownEditor from './MarkdownEditor';
import { useDispatch, useSelector } from 'react-redux';
import { firestoreUpdate, firestoreWriteJson } from '../../Core/_actions/FirebaseActions';
import { Split } from '@bedrock-layout/split';
import { useHistory, useLocation } from 'react-router';

const Wrapper = styled.div`
    margin: 40px;
`;

const AddContent = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();

    const data = location.state?.data
    const edit = location.state?.edit 

    const { user, loading } = useSelector(({ authReducer, contentReducer }) => ({
        user: authReducer.user,
        role: authReducer.role,
        loading: contentReducer.loading,
    }))

    const onFinish = (values) => {
        const request = {
            ...values,
            author: user?.displayName,
            createdDate: Date.now(),
            updateDate: null,
        }

        if (edit) { 
            dispatch(firestoreUpdate({ ...request, id: data.id })).then(() => {
                form.resetFields();
                history.push('/manage')
            })
        } else {
            dispatch(firestoreWriteJson(request)).then(() => {
                form.resetFields();
                history.push('/manage')
            });
        }
    };

    return (
        <Wrapper>
            <Spin spinning={loading}>
                <Form form={form} onFinish={onFinish} layout='vertical'>
                    <Split gutter='lg'>
                        <Form.Item label="Page Title" name="title" rules={[{ required: true }]} initialValue={edit ? data.title : ''}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Page Path (Must be unique)" name="pathname" rules={[{ required: true }]} initialValue={edit ? data.pathname : ''}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Enabled" name="enabled" valuePropName="checked" initialValue={edit ? data.enabled : true}>
                            <Checkbox />
                        </Form.Item>
                    </Split>
                    <Form.Item label="Content" name="content" initialValue={edit ? data.content : ''}>
                        <MarkdownEditor style={{ height: '500px', width: '100%' }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </Wrapper>
    );
};

export default AddContent