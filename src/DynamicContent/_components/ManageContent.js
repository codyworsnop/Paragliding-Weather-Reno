import React from 'react';
import styled from 'styled-components'
import { Table, Button, Skeleton, Empty, Space, Tag } from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';
import { Split } from '@bedrock-layout/split';

const Wrapper = styled.div`
    margin: 40px;
`;

const ManageContent = () => {

    const fakeData = [
        {
            title: 'jeff goes flying',
            content: 'some content in html',
            author: 'Jeff Worsnop',
            createdDate: Date.now(),
            updatedDate: Date.now(),
            enabled: true,
        },
        {
            title: 'jeff goes flying',
            content: 'some content in html',
            author: 'Jeff Worsnop',
            createdDate: Date.now(),
            updatedDate: Date.now(),
            enabled: false,
        },
        {
            title: 'jeff goes flying',
            content: 'some content in html',
            author: 'Jeff Worsnop',
            createdDate: Date.now(),
            updatedDate: Date.now(),
            enabled: true,
        }
    ]



    return (
        <Wrapper>
            <Split fraction='auto-end'>
                <h1 style={{ fontSize: '1.5em' }}>Content</h1>
                <Button type='primary' icon={<PlusOutlined />}>Add</Button>
            </Split>
            <Table dataSource={fakeData} columns={[
                {
                    title: 'Title',
                    dataIndex: 'title'
                },
                {
                    title: 'Author',
                    dataIndex: 'author'
                },
                {
                    title: 'Created Date',
                    dataIndex: 'createdDate'
                },
                {
                    title: 'Last Updated',
                    dataIndex: 'updatedDate'
                },
                {
                    title: 'Active',
                    dataIndex: 'enabled',
                    render: tag => (<>{tag ? <Tag color={'green'}>ACTIVE</Tag> : <Tag color={'red'}>DISABLED</Tag>} </>)
                },
                {
                    title: 'Actions',
                    key: 'action',
                    render: (text, record) => (<Space size="middle">
                        <Button type='primary'>Edit</Button>
                        <Button type='danger'>Delete</Button>
                    </Space>)
                },
            ]}
            />
        </Wrapper>
    )
}

export default ManageContent