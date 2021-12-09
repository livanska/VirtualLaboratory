import React from 'react';
import  SignIn  from '../pages/sign-in';
import  SignUp  from '../pages/sign-up';
import { Routes , Route } from 'react-router-dom';
import { MainPageRoute, ModellingRoute, ProfileRoute, LoginRoute, RegisterRoute} from './routes';
import ModulesPage from '../pages/modules-page';
import UmlModellingWrapper from '../pages/uml-modelling';
import StudentProfile from '../pages/student-profile';

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
    component: StudentProfile,
  },
  {
    path: ModellingRoute,
    title: 'Modelling',
    exact: true,
    component: UmlModellingWrapper,
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