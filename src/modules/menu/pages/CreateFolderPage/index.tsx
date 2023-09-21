import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { createFolder } from '@/apis/folders.api';
import { getAllMenus } from '@/apis/menus.api';
import { MENU_TYPE_ENUMS } from '@/constants/enums';
import { CActionsForm } from '@/controls/';
import { ICreateFolderParams } from '@/types/folders';
import { IOption } from '@/types/options';

import { MFolderForm } from '../../components';
import { defaultValuesFolder, folderResolver } from '../../form';

const CreateFolderPage = () => {
  //#region Data
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<ICreateFolderParams>({
    mode: 'all',
    resolver: folderResolver,
    defaultValues: defaultValuesFolder,
  });

  const { data: menuData } = useQuery({
    queryKey: ['menus', 'vi'],
    queryFn: ({ queryKey: [, locale] }) => getAllMenus(locale),
  });

  const menuList = useMemo<IOption[]>(
    () =>
      // @ts-ignore
      menuData?.data?.data.map((e) => ({
        id: e._id,
        value: e._id,
        label: e.title,
      })) || [],
    [menuData],
  );

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
        formData.set('is_pin', values.is_pin ? 'true' : 'false');
        formData.set('slug', values.slug);
        if (values.type === MENU_TYPE_ENUMS.URL)
          formData.set('link', values.link);
        formData.set('type', values.type?.toString());
        await createFolder(formData);
        toast.success('Thêm mới danh mục thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới danh mục không thành công!',
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
          <MFolderForm control={control} menuList={menuList} />

          {/* <Breadcrumbs aria-label="breadcrumb">
            {pathOfSelectedCategory.map((value: any) => (
              <Typography color="text.primary">{value.label}</Typography>
            ))}
          </Breadcrumbs>
          <CTreeView
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            data={menuList}
          /> */}
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

export default CreateFolderPage;
