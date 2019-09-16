import { Home } from '../pages/home';
import { createBrowserHistory } from 'history';

export const routes = [
  {
    path: '/',
    exact: true,
    name: '主页',
    component: Home,
  },
];

export const history = createBrowserHistory();
