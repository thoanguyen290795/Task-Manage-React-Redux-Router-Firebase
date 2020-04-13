import React from 'react';

import NotFoundPage from './pages/NotfoundPage';
import TaskPage from './pages/TaskPage';
import SigninPage from './pages/SigninPage';
import UserPage from './pages/UserPage';
import SignupPage from './pages/SignupPage'
const routes = [
{
    path:'/',
    exact:true,
    main: () => <TaskPage/>
},
{
    path:'/user',
    exact:true,
    main: () => <UserPage/>
},
{
    path:'/signin',
    exact:true,
    main: () => <SigninPage/>
},
{
    path:'/task',
    exact:true,
    main: () => <TaskPage/>
},{
    path:'/signup',
    exact:true,
    main: () => <SignupPage/>
}

]
export default routes; 
