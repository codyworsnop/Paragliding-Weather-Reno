import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Table, Button, Space, Tag, Spin } from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';
import { Split } from '@bedrock-layout/split';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { firestoreReadJson } from '../../Core/_actions/FirebaseActions';
import DeleteContentModal from './DeleteContentModal';

const Wrapper = styled.div`
    margin: 50px;
`;

const ManageContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const dispatch = useDispatch()
    const history = useHistory();
    const { pages, loading } = useSelector(({ contentReducer }) => ({
        pages: contentReducer.pages,
        loading: contentReducer.loading,
    }))

    useEffect(() => {
        dispatch(firestoreReadJson())
    }, [])

    return (
        <Wrapper>
            <Spin spinning={loading} >
                <Split fraction='auto-end'>
                    <h1 style={{ fontSize: '1.5em' }}>Content</h1>
                    <Button type='primary' onClick={() => history.push('/add')} icon={<PlusOutlined />}>Add</Button>
                </Split>
                {pages && <Table dataSource={[...pages]} rowKey={record => record.id} columns={[
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
                        dataIndex: 'createdDate',
                        render: value => (new Date(value).toString())
                    },
                    {
                        title: 'Last Updated',
                        dataIndex: 'updatedDate',
                        render: value => (new Date(value).toString())
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
                            <Button type='primary' onClick={() => {
                                history.push('/add', { edit: true, data: record })
                            }}>Edit</Button>
                            <Button type='danger' onClick={() => {
                                setActivePage(record)
                                setIsModalVisible(true)
                            }
                            }
                            >Delete</Button>
                        </Space>)
                    },
                ]}
                />}
            </Spin>
            <DeleteContentModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} page={activePage} />
        </Wrapper>
    )
}

export default ManageContent