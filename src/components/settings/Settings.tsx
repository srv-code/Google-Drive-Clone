import React, { CSSProperties, useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { SettingsData } from '../../interfaces/commons';

interface SettingsProps {
  data: SettingsData;
  onUpdateData: (updatedDate: SettingsData) => void;
  style?: CSSProperties;
}

const Settings: React.FC<SettingsProps> = props => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [data, setData] = useState<SettingsData>(props.data);

  const clickHandler = () => {
    if (isPopupOpen) props.onUpdateData(data);
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <SettingOutlined
      rotate={isPopupOpen ? 90 : 0}
      onClick={clickHandler}
      style={{ fontSize: 23, ...props.style }}
    />
  );
};

export default Settings;
