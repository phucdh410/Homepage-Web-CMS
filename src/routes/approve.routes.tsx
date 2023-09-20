import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { PERMISSIONS_ENUM } from '@/constants/enums';

import CDevelopment from '../common/components/others/CDevelopment';

import { loader } from './redirect';
import { ROUTES } from './routes';

const ListNewsPage = lazy(() => import('@/modules/approve/pages/ListNewsPage'));

export const ApproveRoutes: RouteObject[] = [
  {
    path: ROUTES.APPROVE.LIST,
    element: <ListNewsPage />,
  },
  {
    path: ROUTES.APPROVE.APPROVE,
    element: <CDevelopment />,
  },
].map((route) => ({
  ...route,
  loader: () => loader(PERMISSIONS_ENUM.APPROVE),
}));
