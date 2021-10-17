import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  FireOutlined,
  DashboardOutlined,
  CloudOutlined,
  VideoCameraOutlined,
  RadarChartOutlined,
  BookOutlined,
  LoginOutlined
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { auth } from '../../firebase'
import Login from '../../Login/_components/Login';

const { Sider } = Layout;
const StyledSider = styled(Sider)`
  overflow: visible;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [loginModalVisible, setLoginModalVisible] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
      <StyledSider collapsible collapsed={collapsed} onCollapse={onCollapse}
        breakpoint="sm" collapsedWidth="0" >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
          <Menu.Item key="6" icon={<BookOutlined />}>
          <Link to="/blog">
            Blog
            </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<LoginOutlined />} style={{ position: 'absolute', bottom: 0 }}>
            <Button onClick={() => {
              setLoginModalVisible(true)
            }}>
              Login
              {loginModalVisible && <Login visible={loginModalVisible} setVisible={setLoginModalVisible} />}
            </Button>
          </Menu.Item>
        </Menu>
      </StyledSider>
  );
};
export default Navbar