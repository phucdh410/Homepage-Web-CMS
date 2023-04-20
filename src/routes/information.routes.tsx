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
const UpdateSectionPage = lazy(
  () => import('@/modules/section/pages/UpdateSectionPage'),
);

const ListPartiesPage = lazy(
  () => import('@/modules/party/pages/ListPartiesPage'),
);
const CreatePartyPage = lazy(
  () => import('@/modules/party/pages/CreatePartyPage'),
);
const UpdatePartyPage = lazy(
  () => import('@/modules/party/pages/UpdatePartyPage'),
);

export const InformationRoutes: RouteObject[] = [
  {
    path: ROUTES.INFORMATION.SECTION_GROUPS.ROOT,
    element: <ListSectionGroupsPage />,
  },

  { path: ROUTES.INFORMATION.SECTIONS.LIST, element: <ListSectionsPage /> },
  { path: ROUTES.INFORMATION.SECTIONS.CREATE, element: <CreateSectionPage /> },
  { path: ROUTES.INFORMATION.SECTIONS.UPDATE, element: <UpdateSectionPage /> },

  { path: ROUTES.INFORMATION.PARTIES.LIST, element: <ListPartiesPage /> },
  { path: ROUTES.INFORMATION.PARTIES.CREATE, element: <CreatePartyPage /> },
  { path: ROUTES.INFORMATION.PARTIES.UPDATE, element: <UpdatePartyPage /> },
];
