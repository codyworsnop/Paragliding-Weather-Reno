import React from 'react'
import { Modal, Spin } from 'antd';
import {
    WarningTwoTone
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { firestoreDelete } from '../../Core/_actions/FirebaseActions';

const DeleteContentModal = ({ isVisible, setIsVisible, page }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(({ contentReducer }) => ({
        loading: contentReducer.loading,
    }))
    
    const handleOk = () => {
        if (page) {
            dispatch(firestoreDelete(page.id)).then(() => {
                setIsVisible(false);
            });
        }
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

    return (
        <Spin spinning={loading}>
            <Modal title={<><WarningTwoTone twoToneColor='red' /> Delete page</>} visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
                Are you sure you want to delete '{page?.title}'? This operation cannot be undone!
            </Modal>
        </Spin>
    )
}

DeleteContentModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setIsVisible: PropTypes.func.isRequired,
    page: PropTypes.object,
};

export default DeleteContentModal