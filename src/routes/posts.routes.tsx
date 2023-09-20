import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { PERMISSIONS_ENUM } from '@/constants/enums';

import { loader } from './redirect';
import { ROUTES } from './routes';

const ListPostsPage = lazy(() => import('@/modules/post/pages/ListPostsPage'));
const CreatePostPage = lazy(
  () => import('@/modules/post/pages/CreatePostPage'),
);
// const UpdatePostPage = lazy(
//   () => import('@/modules/post/pages/UpdatePostPage'),
// );

export const PostRoutes: RouteObject[] = [
  {
    path: ROUTES.POSTS.LIST,
    element: <ListPostsPage />,
  },
  {
    path: ROUTES.POSTS.CREATE,
    element: <CreatePostPage />,
  },
  // {
  //   path: ROUTES.SCHEDULES.UPDATE,
  //   element: <UpdatePostPage />,
  // },
].map((route) => ({
  ...route,
  loader: () => loader(PERMISSIONS_ENUM.POSTS),
}));
