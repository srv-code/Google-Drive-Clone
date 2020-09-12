import React from 'react';
import './style.css';
import { Path } from '../../interfaces/commons';
import { ReactComponent as SiteIcon } from '../../assets/images/site-icon.svg';
import { siteName } from '../../constants/names';

interface HeaderProps {
  path: Path;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <div className='container'>
      <div className='titleGroup'>
        <SiteIcon height={40} width={40} />
        <span className='titleText'>{siteName}</span>
      </div>

      {/* <SearchBar /> */}
      {/* settings */}
      {/* user profile dropdown */}
    </div>
  );
};

export default Header;
