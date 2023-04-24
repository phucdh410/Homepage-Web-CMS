import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createUser } from '@/apis/users.api';
import { CActionsForm } from '@/controls/';
import { MForm } from '@/modules/users/components';
import { IUserFormParams } from '@/types/user';

import { defaultValues, userResolver } from '../../form';

const DetailUserPage = () => {
  //#region Data
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUserFormParams>({
    mode: 'all',

    resolver: userResolver,
    defaultValues: {
      ...defaultValues,
      permissions: [
        { permission_code: '1', allowed: false, label: 'Quản lý người dùng' },
        { permission_code: '2', allowed: false, label: 'Quản lý trang chủ' },
        { permission_code: '3', allowed: false, label: 'Quản lý thông tin' },
        { permission_code: '4', allowed: false, label: 'Quản lý menu' },
        { permission_code: '5', allowed: false, label: 'Quản lý nội dung' },
        { permission_code: '6', allowed: false, label: 'Lịch công tác' },
        { permission_code: '7', allowed: false, label: 'Duyệt tin' },
        { permission_code: '8', allowed: false, label: 'Nhân sự' },
        { permission_code: '9', allowed: false, label: 'Footer' },
        { permission_code: '10', allowed: false, label: 'Ngôn ngữ' },
      ],
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
        await createUser(values);
        toast.success('Thêm mới người dùng thành công!');
        onBack();
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

export default DetailUserPage;
