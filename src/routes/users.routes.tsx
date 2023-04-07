import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListUsersPage = lazy(() => import('@/modules/users/pages/ListUsersPage'));
const DetailUserPage = lazy(
  () => import('@/modules/users/pages/DetailUserPage'),
);
const UpdateUserPage = lazy(
  () => import('@/modules/users/pages/UpdateUserPage'),
);

export const UsersRoutes: RouteObject[] = [
  {
    path: ROUTES.USERS.LIST,
    element: <ListUsersPage />,
  },
  {
    path: ROUTES.USERS.CREATE,
    element: <DetailUserPage />,
  },
  {
    path: ROUTES.USERS.UPDATE,
    element: <UpdateUserPage />,
  },
];
