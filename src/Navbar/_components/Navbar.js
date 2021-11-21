import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  FireOutlined,
  DashboardOutlined,
  CloudOutlined,
  RadarChartOutlined,
  LoginOutlined,
  SettingOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { logout } from '../../firebase'
import AuthenticationModal from '../../Login/_components/AuthenticationModal';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Core/_actions/authActions';
import { firestoreReadJson } from '../../Core/_actions/FirebaseActions';

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
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false)
  const [authModalVisible, setAuthModalVisible] = useState(false)
  const { user, role, pages } = useSelector(({ authReducer, contentReducer }) => ({
    user: authReducer.user,
    role: authReducer.role,
    pages: contentReducer.pages,
    loading: contentReducer.loading,
  }))

  useEffect(() => {
    dispatch(firestoreReadJson())
  }, [dispatch])

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  const handleLoginLogout = () => {
    if (user) {
      logout()
      dispatch(logOut())
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
        <Menu.Item key="5" icon={<VideoCameraOutlined />}>
          <Link to="/webcams">
          Webcams
          </Link>
        </Menu.Item>

        {/* Dynamic Content */}
        {pages?.map(page => page.enabled &&
          <Menu.Item key={page.title}>
            <Link to={`/${page.pathname}`}>
              {page.title}
            </Link>
          </Menu.Item>)}

        {role?.admin && <Menu.Item key="7" icon={<SettingOutlined />} style={{ position: 'absolute', bottom: 40 }}>
          <Link to="/manage">
            Manage Content
          </Link>
        </Menu.Item>}
        <Menu.Item key="8" disabled icon={<LoginOutlined />} style={{ position: 'absolute', bottom: 0 }}>
          <Button ghost onClick={handleLoginLogout}>
            {user ? <p>Sign out</p> : <p>Sign in</p>}
          </Button>
          <AuthenticationModal visible={authModalVisible} setVisible={setAuthModalVisible} />
        </Menu.Item>
      </StyledMenu>
    </StyledSider>
  );
};
export default Navbar