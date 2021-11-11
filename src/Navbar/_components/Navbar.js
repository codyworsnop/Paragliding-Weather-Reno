import React, { useState, useEffect } from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  FireOutlined,
  DashboardOutlined,
  CloudOutlined,
  VideoCameraOutlined,
  RadarChartOutlined,
  BookOutlined,
  LoginOutlined,
  PlusOutlined
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout, signInWithGoogle } from '../../firebase'
import AuthenticationModal from '../../Login/_components/AuthenticationModal';

const { Sider } = Layout;
const StyledSider = styled(Sider)`
  overflow: visible;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const StyledMenu = styled(Menu)`
  .ant-menu-item-disabled, .ant-menu-submenu-disabled { 
    cursor: auto;
  }
`;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [authModalVisible, setAuthModalVisible] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  const handleLoginLogout = () => {
    if (user) {
      logout()
    } else {
      setAuthModalVisible(true)
    }
  }

  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={onCollapse}
      breakpoint="sm" collapsedWidth="0" >
      <StyledMenu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CloudOutlined />}>
          <Link to="/windy">
            Windy
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FireOutlined />}>
          <Link to="/rasp">
            RASP
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RadarChartOutlined />}>
          <Link to="/windObservations">
            Wind Observations
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="5" icon={<VideoCameraOutlined />}>
          <Link to="/webcams">
            Webcams
          </Link>
        </Menu.Item> */}
        {/* <Menu.Item key="6" icon={<BookOutlined />}>
          <Link to="/blog">
            Blog
          </Link>
        </Menu.Item> */}
        {/* {user && <Menu.Item key="7" icon={<PlusOutlined />} style={{ position: 'absolute', bottom: 40 }}>
          Add Content
        </Menu.Item>} */}
        <Menu.Item key="8" disabled icon={<LoginOutlined />} style={{ position: 'absolute', bottom: 0 }}>
          <Button ghost onClick={handleLoginLogout}>
            {user ? <p>Sign out</p> : <p>Sign in</p>}
          </Button>
          <AuthenticationModal visible={authModalVisible} setVisible={setAuthModalVisible}/>
        </Menu.Item>
      </StyledMenu>
    </StyledSider>
  );
};
export default Navbar