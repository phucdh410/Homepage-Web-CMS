import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListSectionGroupsPage = lazy(
  () => import('@/modules/section-group/pages/ListSectionGroupsPage'),
);

const ListSectionsPage = lazy(
  () => import('@/modules/section/pages/ListSectionsPage'),
);

export const InformationRoutes: RouteObject[] = [
  {
    path: ROUTES.INFORMATION.SECTION_GROUPS.ROOT,
    element: <ListSectionGroupsPage />,
  },

  { path: ROUTES.INFORMATION.SECTIONS.LIST, element: <ListSectionsPage /> },
];
