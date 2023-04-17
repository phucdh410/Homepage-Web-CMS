import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailUser } from '@/apis/users.api';
import { updateUser } from '@/apis/users.api';
import { CActionsForm } from '@/controls/';
import { MForm } from '@/modules/users/components';
import { IUserFormParams } from '@/types/user';

import { defaultValues, userResolver } from '../../form';

const UpdateUserPage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isError } = useQuery(
    ['user', id],
    () => getDetailUser(id as string),
    {
      enabled: !!id,
    },
  );

  if (error && isError) {
    toast.error((error as any)?.repsonse?.data?.message || 'Có lỗi xảy ra!');
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUserFormParams>({
    mode: 'all',

    resolver: userResolver,
    defaultValues: {
      ...data,
      isEdit: true,
    },
  });
  //#endregion

  //#region Event
  const onBack = () => {
    reset(defaultValues);

    navigate(-1);
  };

  const onSubmit = async () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        await updateUser(id as string, values);

        toast.success('Cập nhật người dùng thành công!');

        onBack();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Cập nhật người dùng không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#endregion
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Chỉnh sửa</Typography>
      </Box>

      <Paper variant="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MForm control={control} isEdit />

          <CActionsForm
            onCancel={onBack}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </>
  );
  //#region Render
};

export default UpdateUserPage;
