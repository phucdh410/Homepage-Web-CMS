import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { createSchedule } from '@/apis/schedules.api';
import { CActionsForm } from '@/controls/';
import { ICreateScheduleParams } from '@/types/schedules';

import { MScheduleForm } from '../../components';
import { defaultValuesSchedule, scheduleResolver } from '../../form';

const CreateSchedulePage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ICreateScheduleParams>({
    mode: 'all',
    resolver: scheduleResolver,
    defaultValues: defaultValuesSchedule,
  });

  const navigate = useNavigate();
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
          date: dayjs(values.date).format('YYYY/MM/DD HH:mm:ss'),
        };
        await createSchedule(payload);
        toast.success('Thêm mới lịch công tác thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới lịch công tác không thành công!',
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
          <MScheduleForm control={control} />

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

export default CreateSchedulePage;
