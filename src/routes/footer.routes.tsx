import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { PERMISSIONS_ENUM } from '@/constants/enums';

import { loader } from './redirect';
import { ROUTES } from './routes';

const FooterPage = lazy(() => import('@/modules/footer/pages/FooterPage'));

export const FooterRoutes: RouteObject[] = [
  {
    path: ROUTES.FOOTER.ROOT,
    element: <FooterPage />,
  },
].map((route) => ({
  ...route,
  loader: () => loader(PERMISSIONS_ENUM.FOOTER),
}));
