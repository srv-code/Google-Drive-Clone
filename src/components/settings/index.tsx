import React, { CSSProperties, useState } from 'react';
import {
  SettingOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { SettingsData } from '../../interfaces/commons';
import { Modal, Switch, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

interface SettingsProps {
  data: SettingsData;
  onUpdateData: (updatedDate: SettingsData) => void;
  style?: CSSProperties;
}

const Settings: React.FC<SettingsProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<SettingsData>(props.data);

  const clickHandler = () => {
    if (isModalOpen) props.onUpdateData(data);
    setIsModalOpen(!isModalOpen);
  };

  const modalOkPressHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setIsModalOpen(false);
    props.onUpdateData(data);
  };

  const modalCancelPressHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setIsModalOpen(false);
    setData(props.data);
  };

  const switchDarkThemeHandler = (isEnabled: boolean) => {
    setData({
      theme: isEnabled ? 'dark' : 'light',
      viewMode: data.viewMode,
    });
  };

  const onViewChangeHandler = (e: RadioChangeEvent) => {
    setData({
      theme: data.theme,
      viewMode: e.target.value,
    });
  };

  const renderRadioButton = (label: string) => {
    return (
      <span>
        <span style={{ marginRight: 10 }}>
          {label === 'List' ? <UnorderedListOutlined /> : <AppstoreOutlined />}
        </span>
        <span>{label}</span>
      </span>
    );
  };

  const viewOptions = [
    {
      label: renderRadioButton('List'),
      value: 'list',
    },
    {
      label: renderRadioButton('Icon'),
      value: 'icon',
    },
  ];

  return (
    <div>
      <SettingOutlined
        rotate={isModalOpen ? 90 : 0}
        onClick={clickHandler}
        style={{ fontSize: 23, ...props.style }}
      />
      <Modal
        title='Settings'
        visible={isModalOpen}
        onOk={modalOkPressHandler}
        onCancel={modalCancelPressHandler}>
        <div>
          <p style={styles.settingsPropertyRow}>
            <span style={styles.settingPropertyName}>Dark Theme:</span>
            <span>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={switchDarkThemeHandler}
                checked={data.theme === 'dark'}
              />
            </span>
          </p>
          <p style={styles.settingsPropertyRow}>
            <span style={styles.settingPropertyName}>View Mode:</span>
            <span>
              <Radio.Group
                options={viewOptions}
                onChange={onViewChangeHandler}
                value={data.viewMode}
                optionType='button'
                buttonStyle='solid'
              />
            </span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

const styles = {
  settingsPropertyRow: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  settingPropertyName: {
    flex: 1,
  },
};

export default Settings;
