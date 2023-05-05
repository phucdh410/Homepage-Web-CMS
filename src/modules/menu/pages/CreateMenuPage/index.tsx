import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Typography } from '@mui/material';

import { createMenu } from '@/apis/menus.api';
import { CActionsForm } from '@/controls/';

import { MMenuForm } from '../../components';
import { defaultValuesMenu, menuResolver } from '../../form';

const CreateMenuPage = () => {
  //#region Data
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: 'all',
    resolver: menuResolver,
    defaultValues: defaultValuesMenu,
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
        await createMenu(values);
        toast.success('Thêm mới menu thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Thêm mới menu không thành công!',
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

      <form>
        <MMenuForm control={control} />

        <CActionsForm
          onCancel={onCancel}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          isDirty={isDirty}
        />
      </form>
    </>
  );
  //#endregion
};

export default CreateMenuPage;
