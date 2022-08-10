import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;

function Pageheader() {
  return (
    <Header className='page-header'>
      <ul className='page-header__nav'>
        <li className='page-header__nav-item' key='1'>
          <span>About site</span>
        </li>
      </ul>
    </Header>
  );
}

export default Pageheader;
