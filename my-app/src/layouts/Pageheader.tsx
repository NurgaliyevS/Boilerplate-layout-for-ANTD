import React from 'react';

import { Layout, Menu } from 'antd';
import './Pageheader.scss';

const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Pageheader() {
  return (
    <Header className='header'>
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
  );
}

export default Pageheader;
