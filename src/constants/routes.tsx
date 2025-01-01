import { lazy } from 'react';

import Layout from '../components/Layout';

const routes = {
  layout: <Layout />,
  routes: [
    {
      path: '',
      element: lazy(() => import('@/pages/MainPage'))
    },
    {
      path: '/tasks',
      element: lazy(() => import('@/pages/TasksPage'))
    },
    {
      path: '/contacts',
      element: lazy(() => import('@/pages/ContactsPage'))
    }
  ]
};

export default routes;
