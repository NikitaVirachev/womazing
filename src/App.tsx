import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Root from './layouts/Root.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import Goods from './components/Assortment/Goods.tsx';

const GlobalStyle = createGlobalStyle`
  :root {
    /* font-size: 10px; */
    /* 10px / 16px = 0.625 = 62.5% */
    /* Percentage of user's browser font-size settings */
    font-size: 62.5%;

    --CTA-color: #6E9C9F;
    --Additional-accent: #998E78;
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'error', element: <ErrorPage /> },
      {
        path: 'shop',
        element: <Shop />,
        children: [
          { index: true, element: <Goods category="all" /> },
          { path: 'coats', element: <Goods category="coats" /> },
          { path: 'sweatshirts', element: <Goods category="sweatshirts" /> },
          { path: 'cardigans', element: <Goods category="cardigans" /> },
          { path: 'hoodies', element: <Goods category="hoodies" /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
