import { Outlet } from 'react-router-dom';

import { Layout, BackTop } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { UpOutlined } from '@ant-design/icons';

import Sidebar from './Sidebar';
import Pageheader from './Pageheader';

export default function PageLayout() {
  return (
    <Layout className='page-app'>
      <Sider
        breakpoint='md'
        collapsedWidth='0'
        width={228}
        style={{ background: '#fff' }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Pageheader />
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
      <BackTop>
        <div className='back-top'>
          <UpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
}
