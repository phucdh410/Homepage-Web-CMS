import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const FooterPage = lazy(() => import('@/modules/footer/pages/FooterPage'));

export const FooterRoutes: RouteObject[] = [
  {
    path: ROUTES.FOOTER.ROOT,
    element: <FooterPage />,
  },
];
