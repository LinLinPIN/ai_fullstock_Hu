import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/login'
import React, { Suspense } from 'react'

const LayoutWrap = React.lazy(() => import('../pages/layout'))
const Students = React.lazy(() => import('../pages/students'))
const Employment = React.lazy(() => import('../pages/employment'))
const Personal = React.lazy(() => import('../pages/personal'))

const routerList = [
    {
        path: '/login',
        element: <Login />
    }, {
        path: '/layout',
        element: <LayoutWrap />,
        children: [
            {
                path: '',
                element: <Navigate to="/layout/students" />
            },
            {
                path: 'students',
                element: <Students />
            }, {
                path: 'employment',
                element: <Employment />
            }, {
                path: 'personal',
                element: <Personal />
            }
        ]
    }
]


function Element() {
    return useRoutes(routerList)  // <Route path="/" element={<Home/>}/>
}

function WrapperRoutes() {
    return (
        <BrowserRouter>
            <Suspense>
                <Element />
            </Suspense>

        </BrowserRouter>
    )
}

export default WrapperRoutes