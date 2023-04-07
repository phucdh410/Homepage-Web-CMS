import { Controller, useForm } from 'react-hook-form';
import { Box, FormLabel, Stack } from '@mui/material';

import { CActionsForm, CInput } from '@/controls/';
import { ILinks } from '@/types/homepage-link';

import { IMLinksFormProps } from './types';

export const MLinksForm: React.FC<IMLinksFormProps> = ({ data }) => {
  //#region Data
  const { control, reset, handleSubmit } = useForm<ILinks>({
    defaultValues: data
      ? data
      : {
          youth: '',
          online: '',
          certificate: '',
          help: '',
          facebook: '',
        },
    mode: 'all',
  });
  //#endregion

  //#region Event
  const onSubmit = () => {
    handleSubmit(async (values) => {
      console.log(values);
    })();
  };

  const onCancel = () => {
    reset();
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
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Youth HCMUE
            </FormLabel>
            <Controller
              control={control}
              name="youth"
              render={({ field }) => (
                <CInput {...field} placeholder="Nhập liên kết" />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Online Sinh viên
            </FormLabel>
            <Controller
              control={control}
              name="online"
              render={({ field }) => (
                <CInput {...field} placeholder="Nhập liên kết" />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Đăng ký giấy chứng nhận
            </FormLabel>
            <Controller
              control={control}
              name="certificate"
              render={({ field }) => (
                <CInput {...field} placeholder="Nhập liên kết" />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Hỗ trợ sinh viên
            </FormLabel>
            <Controller
              control={control}
              name="help"
              render={({ field }) => (
                <CInput {...field} placeholder="Nhập liên kết" />
              )}
            />
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Facebook
            </FormLabel>
            <Controller
              control={control}
              name="facebook"
              render={({ field }) => (
                <CInput {...field} placeholder="Nhập liên kết" />
              )}
            />
          </Stack>

          <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
        </Box>
      </form>
    </Box>
  );
  //#endregion
};
