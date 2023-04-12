import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListPersonnelsPage = lazy(
  () => import('@/modules/staff/pages/ListPersonnelsPage'),
);
const CreatePersonnelPage = lazy(
  () => import('@/modules/staff/pages/CreatePersonnelPage'),
);
const UpdatePersonnelPage = lazy(
  () => import('@/modules/staff/pages/UpdatePersonnelPage'),
);

const ListPositionsPage = lazy(
  () => import('@/modules/staff/pages/ListPositionsPage'),
);

export const StaffRoutes: RouteObject[] = [
  {
    path: ROUTES.STAFF.PERSONNELS.LIST,
    element: <ListPersonnelsPage />,
  },
  {
    path: ROUTES.STAFF.PERSONNELS.CREATE,
    element: <CreatePersonnelPage />,
  },
  {
    path: ROUTES.STAFF.PERSONNELS.UPDATE,
    element: <UpdatePersonnelPage />,
  },

  {
    path: ROUTES.STAFF.POSITIONS.LIST,
    element: <ListPositionsPage />,
  },
];
