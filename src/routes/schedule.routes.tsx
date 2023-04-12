import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListSchedulesPage = lazy(
  () => import('@/modules/schedule/pages/ListSchedulesPage'),
);
const CreateSchedulePage = lazy(
  () => import('@/modules/schedule/pages/CreateSchedulePage'),
);
const UpdateSchedulePage = lazy(
  () => import('@/modules/schedule/pages/UpdateSchedulePage'),
);

export const ScheduleRoutes: RouteObject[] = [
  {
    path: ROUTES.SCHEDULES.LIST,
    element: <ListSchedulesPage />,
  },
  {
    path: ROUTES.SCHEDULES.CREATE,
    element: <CreateSchedulePage />,
  },
  {
    path: ROUTES.SCHEDULES.UPDATE,
    element: <UpdateSchedulePage />,
  },
];
