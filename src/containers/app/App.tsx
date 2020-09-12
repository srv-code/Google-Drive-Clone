import React, { useState } from 'react';
import './App.css';
import Header from '../../components/commons/header';
import { Path } from '../../interfaces/commons';

const App = () => {
  const [path, setPath] = useState<Path>({ name: '/', type: 'folder' });

  return (
    <div className='container'>
      <Header path={path} />
    </div>
  );
};

export default App;
