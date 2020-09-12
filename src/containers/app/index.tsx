import React, { useState } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { ReactComponent as SiteIcon } from '../../assets/images/site-icon.svg';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  PlusOutlined,
  FolderAddOutlined,
  UploadOutlined,
  ShareAltOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Path, SettingsData } from '../../interfaces/commons';
import { siteName } from '../../constants/names';
import { getPath } from '../../utils/commons';
import PathViewer from '../../components/pathViewer';
import SearchBar from '../../components/searchBar';
import Settings from '../../components/settings';
import { defaultSettingsData } from '../../constants/defaultValues';
import UserAccount from '../../components/userAccount';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [loggedInUserName, setLoggedInUserName] = useState<string | null>(
    'Sourav'
  );
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [path, setPath] = useState<Path>(getPath(['/', 'Pictures', 'Desktop']));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [settingsData, setSettingsData] = useState<SettingsData>(
    defaultSettingsData
  );

  const footerNote = `${siteName} © ${new Date().getFullYear()}`;

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const onNavigateToPathHandler = (path: Path) => setPath(path);

  const searchHandler = (term: string) => {
    console.log(`Searched='${term}'`);
    setSearchTerm(term);
  };

  const updateSettingsDataHandler = (updatedData: SettingsData) => {
    console.log(`updated settings data: ${JSON.stringify(updatedData)}`);
    setSettingsData(updatedData);
  };

  const userLogoutHandler = () => {
    setLoggedInUserName(null);
  };

  const switchUserHandler = () => {
    console.log('switch user');
    setLoggedInUserName('Amit');
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
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#d2e1fe',
          }}>
          <SiteIcon height={40} width={40} />
          <SearchBar style={{ width: '80%' }} onSearch={searchHandler} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Settings
              data={settingsData}
              onUpdateData={updateSettingsDataHandler}
            />
            <UserAccount
              userName={loggedInUserName!}
              onLogout={userLogoutHandler}
              onSwitchUser={switchUserHandler}
            />
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <PathViewer
            style={{ margin: '16px 0' }}
            path={path}
            onFolderClick={onNavigateToPathHandler}
          />
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}>
            {'<BODY>'}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{footerNote}</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
