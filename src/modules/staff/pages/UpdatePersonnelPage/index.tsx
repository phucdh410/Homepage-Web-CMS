import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { createPersonnel, getDetailPersonnel } from '@/apis/personnels.api';
import { CActionsForm } from '@/controls/';
import { IFileUpload } from '@/types/file';
import { IPersonnelForm } from '@/types/personnel';

import { MPersonnelForm } from '../../components';
import { defaultValuesPersonnel, personnelResolver } from '../../form';

const UpdatePersonnelPage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, error } = useQuery(['personnel', id], () =>
    getDetailPersonnel(id as string),
  );

  if (isError && error) {
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra');
    navigate(-1);
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IPersonnelForm>({
    mode: 'all',
    resolver: personnelResolver,
    defaultValues: data?.data.data || defaultValuesPersonnel,
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
        const payload = { ...values, file_id: (values.file as IFileUpload).id };
        await createPersonnel(payload);

        toast.success('Thêm mới nhân sự thành công!');

        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới nhân sự không thành công!',
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

      <Paper className="wrapper">
        <form>
          <MPersonnelForm control={control} />

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

export default UpdatePersonnelPage;
