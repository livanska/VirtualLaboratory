import React from 'react';
import  SignIn  from '../pages/sign-in';
import { Routes , Route } from 'react-router-dom';
import { ModellingRoute, AdminPanelRoute, LoginRoute, RegisterRoute} from './routes';

export const routes = [

  {
    path: ModellingRoute,
    title: 'Learning',
    exact: true,
    component: SignIn,
  },

  {
    path: AdminPanelRoute,
    title: 'Edit Tasks',
    exact: true,
    component: SignIn,
  },
  {
    path: LoginRoute,
    title: 'Login',
    exact: true,
    component: SignIn
  },
  {
    path: RegisterRoute,
    title: 'Register',
    exact: true,
    component: SignIn
  },
];

export const AdminRouter = () => (
    <Routes >
      {routes.map(route => (
        <Route path={route.path} key={route.path} element={route.component()} />
      ))}
    </Routes>

);