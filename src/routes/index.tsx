import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { CExceptionError, CNotFoundError } from '@/errors/';
import { asyncLayout } from '@/funcs/';
import { CLoginLayout } from '@/layouts/CLoginLayout';

import { FooterRoutes } from './footer.routes';
import { HomepageRoutes } from './homepage.routes';
import { InformationRoutes } from './information.routes';
import { LanguagesRoutes } from './languages.routes';
import { MenuRoutes } from './menu.routes';
import { PostRoutes } from './posts.routes';
import { ScheduleRoutes } from './schedule.routes';
import { StaffRoutes } from './staff.routes';
import { UsersRoutes } from './users.routes';

const CDevelopment = lazy(
  () => import('../common/components/others/CDevelopment'),
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <CExceptionError />,
    children: [
      {
        path: '/',
        element: asyncLayout(() => import('@/layouts/CMainLayout')),
        children: [
          {
            path: '/dashboard',
            element: <div>Dashboaard</div>,
          },

          ...UsersRoutes,
          ...HomepageRoutes,
          ...InformationRoutes,
          ...MenuRoutes,
          ...PostRoutes,
          ...ScheduleRoutes,
          ...StaffRoutes,
          ...FooterRoutes,
          ...LanguagesRoutes,

          {
            path: '/information/departments',
            element: <CDevelopment />,
          },
          {
            path: '/information/centers',
            element: <CDevelopment />,
          },
          {
            path: '/approve',
            element: <CDevelopment />,
          },
        ],
      },
      {
        path: '/login',
        element: <CLoginLayout />,
      },
    ],
  },
  {
    path: '*',
    element: <CNotFoundError />,
  },
];

export default routes;
