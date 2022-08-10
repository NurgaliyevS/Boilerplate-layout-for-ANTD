import { Menu } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { MenuProps } from 'antd/es/menu';

import { UserOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function Sidebar() {
  const items: MenuItem[] = [
    getItem(
      <NavLink to='/cabinet'>Personal account</NavLink>,
      'cabinet',
      <UserOutlined style={{ fontSize: '16px' }} />
    ),
  ];

  return (
    <div className='sidebar'>
      <h1 className='sidebar__logo'>
        <Link to='/'>Platform Confectioners</Link>
      </h1>
      <Menu style={{ fontSize: 16 }} items={items} theme='light' />
    </div>
  );
}

export default Sidebar;
