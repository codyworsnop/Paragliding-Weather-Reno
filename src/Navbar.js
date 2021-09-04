import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}
        breakpoint="sms" collapsedWidth="0">
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/windy">
              Windy
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>

          <Link to="/webcams">
            Webcams
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};
export default Navbar