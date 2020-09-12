import React from 'react';
import { Path } from '../../interfaces/commons';
import { Breadcrumb } from 'antd';
import {
  HomeOutlined,
  FolderOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { getPathString, getPath } from '../../utils/commons';

interface PathViewerProps {
  path: Path;
  onFolderClick: (path: Path) => void;
}

const PathViewer: React.FC<PathViewerProps> = props => {
  const onPathComponentClickHandler = (index: number) => {
    let components: string[] = [];
    for (let i = 0; i <= index; i++) components.push(props.path.components[i]);
    props.onFolderClick(getPath(components));
  };

  const getPathComponentStyle = (index: number) => {
    if (index > 0) {
      if (index === props.path.components.length - 1)
        return {
          paddingLeft: 2,
          paddingRight: 2,
          color: 'blue',
        };
      return {
        paddingLeft: 2,
        paddingRight: 2,
        color: '#676767',
      };
    }
  };

  const getPathComponentIcon = (index: number) => {
    if (index === 0) return <HomeOutlined />;
    if (index === props.path.components.length - 1) return <FolderOutlined />;
  };

  return (
    <div className='container'>
      <Breadcrumb separator={<CaretRightOutlined />}>
        {props.path.components.map((comp: string, index: number) => (
          <Breadcrumb.Item
            key={index}
            href=''
            onClick={() => onPathComponentClickHandler(index)}>
            {getPathComponentIcon(index)}
            {index > 0 && (
              <span style={getPathComponentStyle(index)}>{comp}</span>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default PathViewer;
