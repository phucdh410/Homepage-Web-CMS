import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginPage from '@/modules/auth/pages/LoginPage';
import { RootState } from '@/redux/';
import { ROUTES } from '@/routes/routes';

export const CLoginLayout = () => {
  const isLogined = useSelector<RootState>(
    (state) => state.auth.isLogined,
    shallowEqual,
  );

  if (!isLogined) return <LoginPage />;

  return <Navigate to={ROUTES.HOME} replace={true} />;
};
