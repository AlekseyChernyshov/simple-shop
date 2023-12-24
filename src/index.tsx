import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: '/contacts',
    element: <Contacts />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


