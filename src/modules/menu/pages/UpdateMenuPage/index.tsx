import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailMenu, updateMenu } from '@/apis/menus.api';
import { MENU_TYPE_ENUMS } from '@/constants/enums';
import { CActionsForm } from '@/controls/';

import { MMenuForm } from '../../components';
import { defaultValuesMenu, menuResolver } from '../../form';

const UpdateMenuPage = () => {
  //#region Data
  const navigate = useNavigate();

  const { id } = useParams();

  const { data: response, error } = useQuery(
    ['menu-by-id', id],
    () => getDetailMenu(id || ''),
    {
      retry: false,
    },
  );

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
        await updateMenu(id as string, formData);
        toast.success('Cập nhật menu thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Cập nhật menu không thành công!',
        );
      }
    })();
  };
  //#endregion

  useEffect(() => {
    if (error) {
      toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra !');
      navigate(-1);
    }
  }, [error]);

  useEffect(() => {
    const data = response?.data?.data;
    if (data) {
      reset({ ...data });
    }
  }, [response]);

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Cập nhật</Typography>
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

export default UpdateMenuPage;
