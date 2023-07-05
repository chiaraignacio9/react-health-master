import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Index from './views/index'
import Login from './views/auth/Login'
import Register from './views/auth/Register'

const router = createBrowserRouter([
    {
        path: '/', //ruta
        // element: <Layout />, //componente a mostrar
        element: <AuthLayout />, //componente a mostrar
        children: [
            {
                index: true,
                // element: <Index />
                element: <Register />
            }
        ] 
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                // element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
])

export default router