import React from 'react'
import { Modal } from 'antd'

const Login = ({ visible, setVisible }) => { 
    return (
        <Modal title="Basic Modal" visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
}

export default Login