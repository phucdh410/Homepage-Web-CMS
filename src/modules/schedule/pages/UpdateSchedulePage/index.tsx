import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { getDetailSchedule, updateSchedule } from '@/apis/schedules.api';
import { CActionsForm } from '@/controls/';
import { IUpdateScheduleParams } from '@/types/schedules';

import { MScheduleForm } from '../../components';
import { defaultValuesSchedule, scheduleResolver } from '../../form';

const UpdateSchedulePage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isError } = useQuery(
    ['schedule', id],
    () => getDetailSchedule(id as string),
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
    formState: { isSubmitting, isDirty },
  } = useForm<IUpdateScheduleParams>({
    mode: 'all',
    resolver: scheduleResolver,
    defaultValues: data?.data?.data || defaultValuesSchedule,
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
        const payload = {
          ...values,
          date: dayjs(values.date).toJSON(),
        };
        // Dùng toJSON để chuyển về timezone 0, tránh lỗi +7
        await updateSchedule(id as string, payload);
        toast.success('Cập nhật lịch công tác thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Cập nhật lịch công tác không thành công!',
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
        <Typography variant="page-title">Chỉnh sửa</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MScheduleForm control={control} />

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

export default UpdateSchedulePage;
