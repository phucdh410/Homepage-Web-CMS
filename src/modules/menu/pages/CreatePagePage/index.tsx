import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createPage } from '@/apis/pages.api';
import { CActionsForm } from '@/controls/';
import { ICreatePageParams } from '@/types/pages';

import { MPageForm } from '../../components';
import { defaultValuesPage, pageResolver } from '../../form';

const CreatePagePage = () => {
  //#region Data
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<ICreatePageParams>({
    mode: 'all',
    resolver: pageResolver,
    defaultValues: defaultValuesPage,
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
        await createPage(values);
        toast.success('Thêm mới trang thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Thêm mới trang không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Thêm mới</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPageForm control={control} />

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
  //#endregion
};

export default CreatePagePage;
