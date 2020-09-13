import React, { useState } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import UserAuthentication from '../userAuthentication';
import Home from '../home';

const App = () => {
  const [userName, setUserName] = useState<string | undefined>();

  const userLogoutHandler = () => {
    setUserName(undefined);
  };

  return (
    <>
      {userName ? (
        <Home userName={userName} onUserLogout={userLogoutHandler} />
      ) : (
        <UserAuthentication />
      )}
    </>
  );
};

export default App;
