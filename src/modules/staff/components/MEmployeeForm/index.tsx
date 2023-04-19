import { Controller } from 'react-hook-form';
import { Stack, Unstable_Grid2 as Grid } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';

import { IMEmployeeFormProps } from './types';

export const MEmployeeForm: React.FC<IMEmployeeFormProps> = ({ control }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Grid container spacing={2.5} mb={4}>
      <Grid xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
        <Stack direction="column" spacing={1} flex={1} mb={2.5}>
          <CFormLabel label="Họ và tên nhân sự" required />
          <Controller
            control={control}
            name="fullname"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="fullname"
                placeholder="Nhập tên..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={1} flex={1} mb={2.5}>
          <CFormLabel label="Học vị" />
          <Controller
            control={control}
            name="academic_degree"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="academic_degree"
                placeholder="Nhập học vị..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="row" spacing={1} flex={1} mb={2.5}>
          <CFormLabel label="Trạng thái" />
          <Controller
            control={control}
            name="active"
            render={({ field, fieldState: { error } }) => (
              <CSwitch {...field} />
            )}
          />
        </Stack>
      </Grid>
      <Grid xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Hình ảnh" />
          <Controller
            control={control}
            name="file_id"
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
