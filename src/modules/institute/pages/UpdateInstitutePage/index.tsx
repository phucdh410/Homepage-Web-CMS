import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailInstitute, updateInstitute } from '@/apis/institutes.api';
import { CActionsForm } from '@/controls/';

import { MInstituteForm } from '../../components';
import { defaultValuesInstitute, instituteResolver } from '../../form';

const UpdateInstitutePage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isError } = useQuery(
    ['institute', id],
    () => getDetailInstitute(id as string),
    { enabled: !!id },
  );

  if (error || isError)
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra!');

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: 'all',
    resolver: instituteResolver,
    defaultValues: data?.data?.data || defaultValuesInstitute,
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
        await updateInstitute(id as string, values);
        toast.success('Chỉnh sửa trung tâm thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Chỉnh sửa trung tâm không thành công!',
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
          <MInstituteForm control={control} />

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

export default UpdateInstitutePage;
