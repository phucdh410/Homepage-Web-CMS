import { Controller, useWatch } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CSwitch } from '@/controls/';

import { IMShowHomepageInputProps } from './types';

export const MShowHomepageInput: React.FC<IMShowHomepageInputProps> = ({
  control,
}) => {
  const displayValue = useWatch({ control, name: 'type' });

  return (
    <Stack direction="row" spacing={3} alignItems="flex-start">
      <CFormLabel label="Hiển thị trang chủ" />
      <Controller
        control={control}
        name="is_pin"
        render={({ field }) => (
          <CSwitch disabled={displayValue.toString() !== '3'} {...field} />
        )}
      />
    </Stack>
  );
};
