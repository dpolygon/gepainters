import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import App from './App.jsx'

import ErrorPage from './routes/errorpage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <App/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
