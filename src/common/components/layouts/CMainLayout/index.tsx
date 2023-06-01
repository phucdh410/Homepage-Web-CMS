import { Suspense, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { getAllLanguages } from '@/apis/languages.api';
import { getPermissions } from '@/apis/permissions';
import { RootState } from '@/redux/';
import { ROUTES } from '@/routes/routes';
import { setLanguages } from '@/slices/language';
import { setPermissions } from '@/slices/permission/permission.slice';

import { CPageLoader } from '../../others/CPageLoader';

import { CHeader } from './CHeader';
import { CSidebar } from './CSidebar';

const CMainLayout = () => {
  //#region Data
  const isLogined = useSelector<RootState>(
    (state) => state.auth.isLogined,
    shallowEqual,
  );

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  //#endregion

  //#region Event
  const toggleSidebar = () => setOpen(!open);
  //#endregion

  useEffect(() => {
    const handleGetAllPermissions = async () => {
      try {
        const res = await getPermissions();

        const { data } = res.data;

        dispatch(setPermissions(data));
      } catch (error: any) {
        throw error;
      }
    };
    const handleGetAllLanguages = async () => {
      try {
        const res = await getAllLanguages();

        const { data } = res.data;

        dispatch(setLanguages(data));
      } catch (error: any) {
        throw error;
      }
    };

    handleGetAllPermissions();
    handleGetAllLanguages();
  }, []);

  //#region Render
  return isLogined ? (
    <Box display="flex" flexDirection="column" height="100vh">
      <CHeader toggleSidebar={toggleSidebar} />

      <Stack direction="row" flex={1}>
        <CSidebar open={open} toggleSidebar={toggleSidebar} />

        <Box
          paddingX="20px"
          paddingY="30px"
          flex={1}
          position="relative"
          overflow="hidden"
        >
          <Suspense fallback={<CPageLoader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Stack>
    </Box>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace={true} />
  );

  //#endregion
};

export default CMainLayout;
