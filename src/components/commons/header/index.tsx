import React from 'react';
import './style.css';
import { Path } from '../../../interfaces/commons';

interface HeaderProps {
  path: Path;
}

const Header: React.FC<HeaderProps> = props => {
  return <div className='container'>{props.path.name}</div>;
};

export default Header;
