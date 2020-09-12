import React, { CSSProperties } from 'react';
import './style.css';
import { Input } from 'antd';

const { Search } = Input;

interface SearchBarProps {
  onSearch: (term: string) => void;
  showLoading?: boolean;
  style?: CSSProperties;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  return (
    <Search
      size='large'
      style={props.style}
      placeholder='Search files and folders...'
      onSearch={props.onSearch}
      enterButton
      loading={props.showLoading}
    />
  );
};

export default SearchBar;
