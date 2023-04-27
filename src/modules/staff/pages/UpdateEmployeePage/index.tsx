import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailEmployee, updateEmployee } from '@/apis/employees';
import { CActionsForm } from '@/controls/';
import { IUpdateEmployeeParams } from '@/types/employees';

import { MEmployeeForm } from '../../components';
import { defaultValuesEmployee, employeeResolver } from '../../form';

const UpdateEmployeePage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, error } = useQuery(
    ['employee', id],
    () => getDetailEmployee(id as string),
    { enabled: !!id },
  );

  if (!id || (isError && error)) {
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra');
    navigate(-1);
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUpdateEmployeeParams>({
    mode: 'all',
    resolver: employeeResolver,
    defaultValues: data?.data?.data || defaultValuesEmployee,
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
        await updateEmployee(id as string, values);
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

  useEffect(() => {
    if (data?.data?.data) reset({ ...data.data.data });
  }, [data]);

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Thêm mới</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MEmployeeForm control={control} />

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

export default UpdateEmployeePage;
