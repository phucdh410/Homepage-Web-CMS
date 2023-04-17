import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListSectionGroupsPage = lazy(
  () => import('@/modules/section-group/pages/ListSectionGroupsPage'),
);

const ListSectionsPage = lazy(
  () => import('@/modules/section/pages/ListSectionsPage'),
);
const CreateSectionPage = lazy(
  () => import('@/modules/section/pages/CreateSectionPage'),
);

export const InformationRoutes: RouteObject[] = [
  {
    path: ROUTES.INFORMATION.SECTION_GROUPS.ROOT,
    element: <ListSectionGroupsPage />,
  },

  { path: ROUTES.INFORMATION.SECTIONS.LIST, element: <ListSectionsPage /> },
  { path: ROUTES.INFORMATION.SECTIONS.CREATE, element: <CreateSectionPage /> },
];
