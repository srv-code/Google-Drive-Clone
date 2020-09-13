import React, { CSSProperties } from 'react';
import {
  UserOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

interface UserAccountProps {
  userName: string;
  onLogout: () => void;
  style?: CSSProperties;
}

const UserAccount: React.FC<UserAccountProps> = props => {
  const menu = (
    <Menu>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.userName}
      </p>
      <hr />
      <Menu.Item style={styles.userMenuItemRow}>
        <LogoutOutlined />
        <a href='' onClick={props.onLogout}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ ...props.style }}>
      <Dropdown overlay={menu} placement='bottomCenter' arrow>
        <UserOutlined style={{ fontSize: 23 }} />
      </Dropdown>
    </div>
  );
};

const styles = {
  userMenuItemRow: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default UserAccount;
