import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../pages/sign-in';
import { StudentRouter, routes as studentRoutes } from './StudentRouter';
import { AdminRouter, routes as adminRoutes } from './AdminRouter';

//const role = localStorage.getItem('user') !=='' ? (JSON.parse(localStorage.getItem('user')|| '')).position : '';
const role = 'Student'
export const routes = (role == 'Student') ? studentRoutes : adminRoutes;
export const RootRouter = () => {

    const role = 'Student'
    const routes = (role == 'Student') ? studentRoutes : adminRoutes;
    console.log(role)
    return (
        <Router>{role && role == 'Student' ? <StudentRouter /> : role == 'Admin' ? <AdminRouter /> : <SignIn />}
        </Router>
    )
}
