import { ReactNode } from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

type IRoute = {
  path: string;
  component: ReactNode;
};

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: <Login /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, component: <Event /> },
];
