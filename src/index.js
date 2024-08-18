import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './views/aboutus';
import Sermons from './views/sermons';
import Home from './views/home';
import Visitus from './views/visitus';
import Onlinegiving from './views/onlinegiving';
import Events from './views/events';
import Blog from './views/blog';

// Fonts
import './fonts/HelveticaNeueBlack.ttf';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 'helvetica-black'
  },
});

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
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
