import React, { FC } from 'react';
import { Menu } from 'antd';
import { Link, Router, Redirect, Route } from 'react-router-dom';
import { routes, history } from '../../routes';
import { Login } from '../login';
import { Store } from '../../store';

export const Layout: FC = () => {
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

  const view = (
    <Router history={history}>
      <Route component={() => {
        if (Store.Auth.isLogin) {
          return (
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
          );
        }
        if (window.location.pathname === '/login') {
          return <Login />;
        }
        return <Redirect to='/login' />
      }} />
    </Router>
  );

  return view;
};
