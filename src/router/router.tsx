import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@/layouts';
import { Auth } from '@/pages';
import { ROUTES } from '@/constants';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.auth,
        element: <Auth />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [{}],
  },
]);
