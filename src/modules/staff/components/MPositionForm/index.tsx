import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';

import { IMPositionFormProps } from './types';

export const MPositionForm: React.FC<IMPositionFormProps> = ({ control }) => {
  return (
    <Stack direction="column" spacing={2.5} mb={2.5}>
      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Chức vụ" required htmlFor="title" />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Nhập tên chức vụ"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={1} minWidth={200}>
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </Stack>
  );
};
