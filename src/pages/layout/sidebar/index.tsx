import React, { FC, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const Sidebar: FC = () => {
  const [history] = useState(createBrowserHistory());

  return (
    <Router history={history}>
    </Router>
  );
};
