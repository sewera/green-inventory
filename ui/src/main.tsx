import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { DebugSewera } from './pages/DebugSewera'
import { DebugKoccov } from './pages/DebugKoccov'
import { DashboardGrid } from './components/dashboard/DashboardGrid'
import { OnStock } from './pages/OnStock'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardGrid />,
      },
      {
        path: 'stock',
        element: <OnStock />,
      },
      {
        path: 'distributed',
        element: <h1>DIST</h1>,
      },
      {
        path: 'repairs',
        element: <h1>REPAIRS</h1>,
      },
      {
        path: 'account',
        element: <h1>ACCOUNT</h1>,
      },
      {
        path: 'settings',
        element: <h1>SETTINGS</h1>,
      },
      {
        path: '_debug_sewera',
        element: <DebugSewera />,
      },
    ],
  },
  {
    path: 'logout',
    element: <h1>LOGOUT</h1>,
  },
  {
    path: '/_debug_koccov',
    element: <DebugKoccov />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
