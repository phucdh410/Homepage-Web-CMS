import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput } from '@/controls/';

import { IMType3Props } from './types';

export const MType3: React.FC<IMType3Props> = ({ control }) => {
  return (
    <>
      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Liên kết" htmlFor="link" />
        <Controller
          control={control}
          name="link"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="link"
              placeholder="Nhập liên kết..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
    </>
  );
};
