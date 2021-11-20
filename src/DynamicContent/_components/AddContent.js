import React, { useState } from 'react'
import styled from 'styled-components'
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form, Input, Spin } from 'antd';
import MarkdownEditor from './MarkdownEditor';
import { useDispatch, useSelector } from 'react-redux';
import { firestoreWriteJson } from '../../Core/_actions/FirebaseActions';

const Wrapper = styled.div`
    margin: 40px;
`;

const AddContent = () => {
    const [form] = Form.useForm()
    const dispath = useDispatch()
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
            enabled: true,
        }

        dispath(firestoreWriteJson(request)).then(() => {
            form.resetFields()
        });
    };

    return (
        <Wrapper>
            <Spin spinning={loading}>
            <Form form={form} onFinish={onFinish} layout='vertical'>
                <Form.Item label="Page Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Page Path (Must be unique!)" name="pathname" rules={[{ required: true }]}>
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
            </Spin>
        </Wrapper>
    );
};

export default AddContent