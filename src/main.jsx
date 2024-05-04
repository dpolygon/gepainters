import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Router,
} from "react-router-dom";
import App from './App.jsx'

import ErrorPage from './routes/errorpage.jsx';
import Residential from './routes/residential.jsx';
import Commercial from './routes/commercial.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/residential',
        element: <Residential/>
      },
      {
        path: '/commercial',
        element: <Commercial/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
