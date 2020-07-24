import React from 'react';
import { Space } from 'antd';
import styles from './style.less';

interface HeadToolbarProps {
  children: React.ReactElement | React.ReactElement[];
}

const HeadToolbar: React.FC<HeadToolbarProps> = ({ children }) => {
  return (
    <div className={styles['head-wrapper']}>
      <Space
        direction="horizontal"
        size="large"
        className={styles['head-toolbar']}
      >
        {children}
      </Space>
    </div>
  );
};

export default HeadToolbar;
