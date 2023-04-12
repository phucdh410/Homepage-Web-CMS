import { Controller } from 'react-hook-form';
import { FormLabel, Stack } from '@mui/material';

import { CInput, CSwitch } from '@/controls/';

import { IMPositionFormProps } from './types';

export const MPositionForm: React.FC<IMPositionFormProps> = ({ control }) => {
  return (
    <Stack direction="column" spacing={2.5} mb={2.5}>
      <Stack direction="column" spacing={1} flex={1}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Chức vụ
        </FormLabel>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <CInput
              placeholder="Nhập tên chức vụ"
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={1} minWidth={200}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Hiển thị
        </FormLabel>
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </Stack>
  );
};
