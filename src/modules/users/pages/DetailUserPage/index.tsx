import { useForm } from 'react-hook-form';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createUser } from '@/apis/users.api';
import { CActionsForm } from '@/controls/';
import { MForm } from '@/modules/users/components';
import { RootState } from '@/redux/';
import { IPermissionState } from '@/slices/permission';
import { IUserFormParams } from '@/types/user';

import { defaultValues, userResolver } from '../../form';
const DetailUserPage = () => {
  //#region Data
  const { permissions } = useSelector<RootState, IPermissionState>(
    (state) => state.permission,
    shallowEqual,
  );

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<IUserFormParams>({
    mode: 'all',

    resolver: userResolver,
    defaultValues: {
      ...defaultValues,
      permission: permissions || [],
    },
  });
  //#endregion

  //#region Event
  const onCancel = () => {
    reset(defaultValues);

    navigate(-1);
  };

  const onSubmit = async () => {
    handleSubmit(async (values) => {
      try {
        const payload = {
          ...values,
          permission: values.permission.map((e) => ({
            permission_code: e.code,
            allowed: e.allowed,
          })),
        };
        await createUser(payload);
        toast.success('Thêm mới người dùng thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới người dùng không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#endregion
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Thêm mới</Typography>
      </Box>

      <Paper variant="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            isDirty={isDirty}
          />
        </form>
      </Paper>
    </>
  );
  //#region Render
};

export default DetailUserPage;
