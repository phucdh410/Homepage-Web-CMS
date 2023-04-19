import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailFolder, updateFolder } from '@/apis/folders.api';
import { CActionsForm } from '@/controls/';
import { IUpdateFolderParams } from '@/types/folders';

import { MFolderForm } from '../../components';
import { defaultValuesFolder, folderResolver } from '../../form';

const UpdateFolderPage = () => {
  //#region Data
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isError } = useQuery(
    ['folder', id],
    () => getDetailFolder(id as string),
    { enabled: !!id },
  );

  if (error && isError)
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra!');

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUpdateFolderParams>({
    mode: 'all',
    resolver: folderResolver,
    defaultValues: data?.data?.data || defaultValuesFolder,
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
        await updateFolder(id as string, values);
        toast.success('Chỉnh sửa danh mục thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Chỉnh sửa danh mục không thành công!',
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
          <MFolderForm control={control} />

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

export default UpdateFolderPage;
