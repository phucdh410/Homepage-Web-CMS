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

const ListDepartmentsPage = lazy(
  () => import('@/modules/department/pages/ListDepartmentsPage'),
);
const CreateDepartmentPage = lazy(
  () => import('@/modules/department/pages/CreateDepartmentPage'),
);
const UpdateDepartmentPage = lazy(
  () => import('@/modules/department/pages/UpdateDepartmentPage'),
);

const ListInstitutesPage = lazy(
  () => import('@/modules/institute/pages/ListInstitutesPage'),
);
const CreateInstitutePage = lazy(
  () => import('@/modules/institute/pages/CreateInstitutePage'),
);
const UpdateInstitutePage = lazy(
  () => import('@/modules/institute/pages/UpdateInstitutePage'),
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

  {
    path: ROUTES.INFORMATION.DEPARTMENTS.LIST,
    element: <ListDepartmentsPage />,
  },
  {
    path: ROUTES.INFORMATION.DEPARTMENTS.CREATE,
    element: <CreateDepartmentPage />,
  },
  {
    path: ROUTES.INFORMATION.DEPARTMENTS.UPDATE,
    element: <UpdateDepartmentPage />,
  },

  { path: ROUTES.INFORMATION.INSTITUTES.LIST, element: <ListInstitutesPage /> },
  {
    path: ROUTES.INFORMATION.INSTITUTES.CREATE,
    element: <CreateInstitutePage />,
  },
  {
    path: ROUTES.INFORMATION.INSTITUTES.UPDATE,
    element: <UpdateInstitutePage />,
  },

  { path: ROUTES.INFORMATION.PARTIES.LIST, element: <ListPartiesPage /> },
  { path: ROUTES.INFORMATION.PARTIES.CREATE, element: <CreatePartyPage /> },
  { path: ROUTES.INFORMATION.PARTIES.UPDATE, element: <UpdatePartyPage /> },
];
