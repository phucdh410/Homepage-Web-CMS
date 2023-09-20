import React from 'react';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CCKEditor, CFormLabel } from '@/controls/';

import { IMEducationQualityProps } from './types';

export const MEducationQuality: React.FC<IMEducationQualityProps> = ({
  control,
}) => {
  return (
    <Stack direction="column" spacing={1} mb={2.5}>
      <CFormLabel label="Nhập thông tin" required />
      <Controller
        control={control}
        name="education_quality"
        render={({ field, fieldState: { error } }) => (
          <CCKEditor {...field} error={!!error} helperText={error?.message} />
        )}
      />
    </Stack>
  );
};
