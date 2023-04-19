import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailPage, updatePage } from '@/apis/pages.api';
import { CActionsForm } from '@/controls/';
import { ICreatePageParams } from '@/types/pages';

import { MPageForm } from '../../components';
import { defaultValuesPage, pageResolver } from '../../form';

const UpdatePagePage = () => {
  //#region Data
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['page', id],
    () => getDetailPage(id as string),
    { enabled: !!id },
  );

  if (error && isError) {
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra!');
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreatePageParams>({
    mode: 'all',
    resolver: pageResolver,
    defaultValues: data?.data?.data || defaultValuesPage,
  });
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();
    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        await updatePage(id as string, values);

        toast.success('Chỉnh sửa trang thành công!');

        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Chỉnh sửa trang không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Chỉnh sửa</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPageForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </>
  );

  //#endregion
};

export default UpdatePagePage;
