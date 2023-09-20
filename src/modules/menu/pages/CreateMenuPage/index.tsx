import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Typography } from '@mui/material';

import { createMenu } from '@/apis/menus.api';
import { MENU_TYPE_ENUMS } from '@/constants/enums';
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
        const formData = new FormData();
        formData.set('title', JSON.stringify(values.title));
        formData.set('description', JSON.stringify(values.description));
        formData.set('is_menu', 'true');
        formData.set('is_pin', values.is_pin ? 'true' : 'false');
        formData.set('slug', values.slug);
        if (values.type === MENU_TYPE_ENUMS.URL)
          formData.set('link', values.link);
        formData.set('type', values.type.toString());
        await createMenu(formData);
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
