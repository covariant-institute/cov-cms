import React, { FC, useState } from 'react';
import { Menu } from 'antd';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export const Layout: FC = () => {
  const [history] = useState(createBrowserHistory());

  function getCurrentPage() {
    const route = routes.find((route) => {
      return window.location.pathname === route.path;
    });
    if (route) {
      const Result = route.component;
      return (<Result />);
    }
    return (<div>404</div>);
  }

  return (
    <Router history={history}>
      <div style={{ display: 'flex' }}>
        <Menu style={{ width: 256 }} mode='inline' defaultSelectedKeys={[window.location.pathname]}>
          {routes.map((route) => {
            return (
              <Menu.Item key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <div style={{ flexGrow: 1 }}>
          {getCurrentPage()}
        </div>
      </div>
    </Router>
  );
};
