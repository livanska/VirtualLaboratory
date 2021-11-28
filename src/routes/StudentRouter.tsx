import React from 'react';
import  SignIn  from '../pages/sign-in';
import  SignUp  from '../pages/sign-up';
import { Routes , Route } from 'react-router-dom';
import { MainPageRoute, ModellingRoute, ProfileRoute, LoginRoute, RegisterRoute} from './routes';
import ModulesPage from '../pages/modules-page';

export const routes = [

  {
    path: MainPageRoute,
    title: 'Learning',
    exact: true,
    component: ModulesPage,
  },
  {
    path: ProfileRoute,
    title: 'Personal Profile',
    exact: true,
    component: SignIn,
  },
  {
    path: ModellingRoute,
    title: 'Modelling',
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
    component: SignUp
  },
];

export const StudentRouter = () => (
    <Routes >
      {routes.map(route => (
        <Route path={route.path} key={route.path} element={route.component()} />
      ))}
    </Routes>

);