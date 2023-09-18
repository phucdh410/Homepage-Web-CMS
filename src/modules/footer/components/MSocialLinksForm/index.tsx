import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Stack } from '@mui/material';

import { CActionsForm, CFormLabel, CInput } from '@/controls/';
import { ISocialLinksForm } from '@/types/footer';

import { defaultValuesSocialLinks, socialLinksResolver } from '../../form';

import { IMSocialLinksFormProps } from './types';

export const MLinksForm: React.FC<IMSocialLinksFormProps> = ({ data }) => {
  //#region Data
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm<ISocialLinksForm>({
    defaultValues: data ? data : defaultValuesSocialLinks,
    mode: 'all',
    resolver: socialLinksResolver,
  });
  //#endregion

  //#region Event
  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        // data ? await updateLinks(values) : createLinks(values);
        toast.success('Cập nhật liên kết thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Cập nhật liên kết không thành công!',
        );
      }
    })();
  };

  const onCancel = () => {
    data ? reset(data) : reset();
  };

  useEffect(() => {
    if (data) reset({ ...data });
  }, [data]);
  //#endregion

  //#region Render
  return (
    <Box>
      <form>
        <Box mb={2}>
          <CFormLabel label="Các liên kết Social" />
        </Box>
        <Box px={2}>
          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Facebook" htmlFor="facebook" />
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

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Twitter" htmlFor="twitter" />
            <Controller
              control={control}
              name="twitter"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="twitter"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Linkedin" htmlFor="linkedin" />
            <Controller
              control={control}
              name="linkedin"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="linkedin"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Google" htmlFor="google" />
            <Controller
              control={control}
              name="google"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="google"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Youtube" htmlFor="youtube" />
            <Controller
              control={control}
              name="youtube"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="youtube"
                  {...field}
                  placeholder="Nhập liên kết"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <CFormLabel label="Instagram" htmlFor="instagram" />
            <Controller
              control={control}
              name="instagram"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  id="instagram"
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
            isDirty={isDirty}
          />
        </Box>
      </form>
    </Box>
  );
  //#endregion
};
