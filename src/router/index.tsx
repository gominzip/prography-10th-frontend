import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';
import HomePage from '@/pages/HomePage';
import RecruitFunnelPage from '@/pages/RecruitFunnelPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: '/recruit-form',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <RecruitFunnelPage />
      }
    ]
  }
]);
