import { Controller } from 'react-hook-form';
import { FormLabel, Stack, Unstable_Grid2 as Grid } from '@mui/material';

import { CImageUpload, CInput, CSwitch } from '@/controls/';

import { IMPersonnelFormProps } from './types';

export const MPersonnelForm: React.FC<IMPersonnelFormProps> = ({ control }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Grid container spacing={2.5} mb={4}>
      <Grid xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
        <Stack direction="column" spacing={1} flex={1} mb={2.5}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
            Họ và tên nhân sự
          </FormLabel>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="name"
                placeholder="Nhập tên..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={1} flex={1} mb={2.5}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
            Học vị
          </FormLabel>
          <Controller
            control={control}
            name="degree"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="degree"
                placeholder="Nhập học vị..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="row" spacing={1} flex={1} mb={2.5}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
            Hiển thị
          </FormLabel>
          <Controller
            control={control}
            name="published"
            render={({ field, fieldState: { error } }) => (
              <CSwitch {...field} error={!!error} helperText={error?.message} />
            )}
          />
        </Stack>
      </Grid>
      <Grid xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
        <Stack direction="column" spacing={1} flex={1}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
            Hình ảnh
          </FormLabel>
          <Controller
            control={control}
            name="file"
            render={({ field, fieldState: { error } }) => (
              <CImageUpload
                {...field}
                aspectRatio="1/1"
                isSquare
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
  );
  //#endregion
};
