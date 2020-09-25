import React, { useState } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import UserAuthentication from '../userAuthentication';
import Home from '../home';
import { UserDetails } from '../../interfaces/commons';

const App = () => {
  const [user, setUser] = useState<UserDetails>();

  const userLogoutHandler = () => {
    setUser(undefined);
  };

  const userLoginHandler = (userDetails?: UserDetails) => setUser(userDetails);

  return (
    <>
      {user ? (
        <Home user={user} onUserLogout={userLogoutHandler} />
      ) : (
        <UserAuthentication setUser={userLoginHandler} />
      )}
    </>
  );
};

export default App;
