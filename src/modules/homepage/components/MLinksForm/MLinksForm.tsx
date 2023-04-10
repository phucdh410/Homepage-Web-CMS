import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, FormLabel, Stack } from '@mui/material';

import { CActionsForm, CFormLabel, CInput } from '@/controls/';
import { ILinks } from '@/types/homepage-link';

import { defaultValuesLink, linkResolver } from '../../form';

import { IMLinksFormProps } from './types';

export const MLinksForm: React.FC<IMLinksFormProps> = ({ data }) => {
  //#region Data
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ILinks>({
    defaultValues: data ? data : defaultValuesLink,
    mode: 'all',
    resolver: linkResolver,
  });
  //#endregion

  //#region Event
  const onSubmit = () => {
    handleSubmit(async (values) => {
      console.log(values);
      toast.success('Cập nhật liên kết thành công!');
    })();
  };

  const onCancel = () => {
    data ? reset(data) : reset();
  };
  //#endregion

  //#region Render
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Box mb={2}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
            Liên kết
          </FormLabel>
        </Box>
        <Box px={2}>
          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Youth HCMUE" required htmlFor="youth" />
            <Controller
              control={control}
              name="youth"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="youth"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Online Sinh viên" required htmlFor="online" />
            <Controller
              control={control}
              name="online"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="online"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel
              label="Đăng ký giấy chứng nhận"
              required
              htmlFor="certificate"
            />
            <Controller
              control={control}
              name="certificate"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="certificate"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Hỗ trợ sinh viên" required htmlFor="help" />
            <Controller
              control={control}
              name="help"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="help"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Facebook" required htmlFor="facebook" />
            <Controller
              control={control}
              name="facebook"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="facebook"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </Box>
      </form>
    </Box>
  );
  //#endregion
};
