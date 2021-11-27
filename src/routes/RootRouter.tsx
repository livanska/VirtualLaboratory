import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import  SignIn  from '../pages/sign-in';
import { StudentRouter, routes as studentRoutes } from './StudentRouter';
import { AdminRouter, routes as adminRoutes } from './AdminRouter';



export const RootRouter = () => {
//const role = localStorage.getItem('user') !=='' ? (JSON.parse(localStorage.getItem('user')|| '')).position : '';
const role= 'Student'
console.log(role)
return(
     <Router>{role && role == 'Student' ? <StudentRouter />: role == 'Admin' ?<AdminRouter />:<SignIn/>}
     </Router>
)
}