import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, FormLabel, Paper, Stack, Typography } from '@mui/material';

import { createEvent, updateEvent } from '@/apis/events.api';
import { CActionsForm, CImageUpload, CInput, CRangePicker } from '@/controls/';
import { IEventForm } from '@/types/event';
import { IFileUpload } from '@/types/file';

import { defaultValuesEvent, eventResolver } from '../../form';

import { IMEventFormProps } from './types';

export const MEventForm: React.FC<IMEventFormProps> = ({
  data,
  language_id,
}) => {
  //#region Data
  const { control, handleSubmit, reset, trigger } = useForm<IEventForm>({
    mode: 'all',
    shouldFocusError: true,
    resolver: eventResolver,
    defaultValues: defaultValuesEvent,
  });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onBack = () => {
    reset(defaultValuesEvent);

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        const payload = { ...values, file_id: (values.file as IFileUpload).id };
        data
          ? await updateEvent(data?.id, payload)
          : await createEvent(payload);

        toast.success('Cập nhật event thành công!');

        onBack();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Cập nhật event không thành công!',
        );
      }
    })();
  };
  //#endregion

  useEffect(() => {
    if (data) reset({ ...data, language_id });
  }, [data]);

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">
          {data ? 'Chỉnh sửa' : 'Thêm mới'}
        </Typography>
      </Box>

      <Paper className="wrapper">
        <form onSubmit={onSubmit}>
          <Stack direction="column" spacing={2.5} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Tiêu đề
              </FormLabel>
              <Controller
                control={control}
                name="title"
                render={({ field, fieldState: { error } }) => (
                  <CInput
                    {...field}
                    placeholder="Nhập tiêu đề..."
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>

            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Hình ảnh
              </FormLabel>
              <Controller
                control={control}
                name="file"
                render={({ field, fieldState: { error } }) => (
                  <CImageUpload
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1} flex={1}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Ngày hiển thị
            </FormLabel>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CRangePicker
                control={control}
                startName="start_date"
                endName="end_date"
                trigger={trigger}
              />
            </Stack>
          </Stack>

          <CActionsForm onCancel={onBack} />
        </form>
      </Paper>
    </>
  );
  //#endregion
};