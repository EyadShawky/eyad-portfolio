import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutMain from './components/Layout';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import Projects from './pages/projects';
import ErrorPage from './pages/ErrorPage';

const route = createBrowserRouter([
  { path: '/', element: <LayoutMain />, children:[
    {index:true , element:<Home />},
    {path:'/about' , element:<About />},
    {path:'/services' , element:<Services />},
    {path:'/projects' , element:<Projects />},
    {path:'/contact' , element:<ContactMe />},
    {path:'*' , element:<ErrorPage />},

  ] },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);