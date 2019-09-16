import React, { FC, CSSProperties } from 'react';
import { Input, Button } from 'antd';
import { Store } from '../../store';
import { history } from '../../routes';

export const Login: FC = () => {
  const inputStyle: CSSProperties = {
    letterSpacing: 5,
  };

  const loginHandler = () => {
    Store.Auth.login();
    history.replace('/');
  };

  const view = (
    <div style={{
      width: 450,
      margin: '150px auto',
    }}>
      <header style={{
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 45,
      }}>Welcome to Covariant Club</header>
      <Input style={inputStyle} size='large' placeholder='Username' />
      <div style={{ height: 10 }}></div>
      <Input style={inputStyle} size='large' type='password' placeholder='Password' />
      <div style={{ height: 30 }}></div>
      <div style={{
        textAlign: 'center',
      }}>
        <Button
          type='primary'
          size='large'
          onClick={loginHandler}
          style={{
            width: 200,
          }}>Log In</Button>
      </div>
    </div>
  );

  return view;
};
