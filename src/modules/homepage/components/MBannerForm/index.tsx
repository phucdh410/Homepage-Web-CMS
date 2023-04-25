import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { createBanner, updateBanner } from '@/apis/banners.api';
import {
  CActionsForm,
  CFormLabel,
  CImageUpload,
  CInput,
  CRangePicker,
} from '@/controls/';
import { IBannerForm } from '@/types/banners';

import { bannerResolver, defaultValuesBanner } from '../../form';

import { IMBannerFormProps } from './types';

export const MBannerForm: React.FC<IMBannerFormProps> = ({ data }) => {
  //#region Data
  const { control, handleSubmit, reset, trigger } = useForm<IBannerForm>({
    mode: 'all',
    resolver: bannerResolver,
    defaultValues: defaultValuesBanner,
  });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onBack = () => {
    reset(defaultValuesBanner);

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        data
          ? await updateBanner(data?.id, values)
          : await createBanner(values);

        toast.success('Cập nhật banner thành công!');

        onBack();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Cập nhật banner không thành công!',
        );
      }
    })();
  };
  //#endregion

  useEffect(() => {
    if (data)
      reset({
        ...data,
        start_date: dayjs(data.start_date),
        end_date: dayjs(data.end_date),
      });
  }, [data]);

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">
          {data ? 'Chỉnh sửa' : 'Thêm mới'}
        </Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <Stack direction="column" spacing={2.5} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <CFormLabel label="Tiêu đề" required />
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
              <CFormLabel label="Hình ảnh" required />
              <Controller
                control={control}
                name="file_id"
                render={({ field, fieldState: { error } }) => (
                  <CImageUpload
                    {...field}
                    aspectRatio="4/1"
                    maxWidth={700}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1} flex={1}>
            <CFormLabel label="Ngày hiển thị" required />
            <Stack direction="row" alignItems="center" spacing={1}>
              <CRangePicker
                control={control}
                startName="start_date"
                endName="end_date"
                trigger={trigger}
              />
            </Stack>
          </Stack>

          <CActionsForm onCancel={onBack} onSubmit={onSubmit} />
        </form>
      </Paper>
    </>
  );
  //#endregion
};
