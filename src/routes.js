import React from 'react';
export default [{
    path: '/',
    exact: true,
    component: React.lazy(() => import('./views'))
},{
    path: '/login',
    component: React.lazy(() => import('./views/login')),
    //routes
}]