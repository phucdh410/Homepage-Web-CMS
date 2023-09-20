import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { PERMISSIONS_ENUM } from '@/constants/enums';

import { loader } from './redirect';
import { ROUTES } from './routes';

const ListLanguagesPage = lazy(
  () => import('@/modules/language/pages/ListLanguagesPage'),
);

export const LanguagesRoutes: RouteObject[] = [
  {
    path: ROUTES.LANGUAGES.LIST,
    element: <ListLanguagesPage />,
  },
].map((route) => ({
  ...route,
  loader: () => loader(PERMISSIONS_ENUM.LANGUAGE),
}));
