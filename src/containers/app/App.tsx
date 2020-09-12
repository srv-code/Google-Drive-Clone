import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { ReactComponent as SiteIcon } from '../../assets/images/site-icon.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  PlusOutlined,
  FolderAddOutlined,
  UploadOutlined,
  ShareAltOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Path } from '../../interfaces/commons';
import { siteName } from '../../constants/names';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [path, setPath] = useState<Path>({ name: '/', type: 'folder' });
  const footerNote = `${siteName} © ${new Date().getFullYear()}`;

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['home']} mode='inline'>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key='new' icon={<PlusOutlined />} title='New'>
            <Menu.Item key='create-folder'>
              <FolderAddOutlined />
              Create folder
            </Menu.Item>
            <Menu.Item key='upload-files'>
              <UploadOutlined />
              Upload files
            </Menu.Item>
            <Menu.Item key='upload-folder'>
              <UploadOutlined />
              Upload folder
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='shared-with-me' icon={<ShareAltOutlined />}>
            Shared with me
          </Menu.Item>
          <Menu.Item key='starred' icon={<StarOutlined />}>
            Starred
          </Menu.Item>
          <Menu.Item key='trash' icon={<DeleteOutlined />}>
            Trash
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{footerNote}</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
