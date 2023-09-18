import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { PERMISSIONS_ENUM } from '@/constants/enums';

import { loader } from './redirect';
import { ROUTES } from './routes';

const SocialLinksPage = lazy(
  () => import('@/modules/footer/pages/SocialLinksPage'),
);

const AddressPage = lazy(() => import('@/modules/footer/pages/AddressPage'));

export const FooterRoutes: RouteObject[] = [
  {
    path: ROUTES.FOOTER.SOCIAL,
    element: <SocialLinksPage />,
  },
  {
    path: ROUTES.FOOTER.ADDRESS,
    element: <AddressPage />,
  },
].map((route) => ({
  ...route,
  loader: () => loader(PERMISSIONS_ENUM.FOOTER),
}));
