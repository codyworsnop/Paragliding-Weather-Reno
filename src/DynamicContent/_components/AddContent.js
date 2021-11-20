import React, { useState } from 'react'
import styled from 'styled-components'
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form, Input } from 'antd';
import MarkdownEditor from './MarkdownEditor';
import { firestoreRead, firestoreWriteJson } from '../../firebase';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    margin: 40px;
`;

const AddContent = () => {

    const { user, role, loading } = useSelector(({ authReducer }) => ({
        user: authReducer.user,
        role: authReducer.role
    }))

    const onFinish = (values) => {
        
        const request = {
            ...values,
            identity: user?.displayName,
            createdDate: Date.now(),
            updateDate: null,
            enabled: true,
        }

        firestoreWriteJson(request)
        firestoreRead()
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Wrapper>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout='vertical'>
                <Form.Item label="Page Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Content" name="content" >
                    <MarkdownEditor style={{ height: '500px', width: '100%' }}  />
                    </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default AddContent