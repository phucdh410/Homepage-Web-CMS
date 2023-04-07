import { Controller, useForm } from 'react-hook-form';
import { Box, FormLabel } from '@mui/material';

import { CInput } from '@/controls/';
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

  //#endregion

  //#region Render
  return (
    <Box>
      <FormLabel title="Liên kết" required sx={{ mb: 3 }} />

      <Box px={3}>
        <Controller
          control={control}
          name="youth"
          render={({ field }) => (
            <CInput {...field} placeholder="Nhập liên kết" />
          )}
        />
        <Controller
          control={control}
          name="online"
          render={({ field }) => (
            <CInput {...field} placeholder="Nhập liên kết" />
          )}
        />
      </Box>
    </Box>
  );
  //#endregion
};
