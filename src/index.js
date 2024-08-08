import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './views/home';
import Aboutus from './views/aboutus';
import Sermons from './views/sermons';
import Visitus from './views/visitus';
import Onlinegiving from './views/onlinegiving';
import Events from './views/events';
import Blog from './views/blog';
import notFound from './views/notFound';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElememt: <notFound />
//   },
//   {
//     path: '/aboutus',
//     element: < Aboutus />
//   },
//   {
//     path: '/sermons',
//     element: <Sermons />
//   },
//   {
//     path: '/events',
//     element: <Events />
//   },
//   {
//     path: '/onlinegiving',
//     element: <Onlinegiving />
//   },
//   {
//     path: '/visitus',
//     element: <Visitus />
//   },
//   {
//     path: '/blog',
//     element: <Blog />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'aboutus',
        element: <Aboutus />,
      },
      {
        path: 'sermons',
        element: <Sermons />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'onlinegiving',
        element: <Onlinegiving />,
      },
      {
        path: 'visitus',
        element: <Visitus />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
