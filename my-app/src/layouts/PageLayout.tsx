import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout } from 'antd';

import './PageLayout.scss';
import Pageheader from './Pageheader';
import Sidebar from './Sidebar';

const { Content, Footer } = Layout;

export default function PageLayout() {
  return (
    <Layout>
      <Pageheader />

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Layout
          className='site-layout-background'
          style={{
            padding: '24px 0',
          }}
        >
          <Sidebar />
        </Layout>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      ></Footer>
    </Layout>
  );
}
