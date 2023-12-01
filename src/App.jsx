import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './layouts/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
