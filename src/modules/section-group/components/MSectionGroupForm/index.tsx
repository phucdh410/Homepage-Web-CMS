import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';

import { IMSectionGroupFormProps } from './types';

export const MSectionGroupForm: React.FC<IMSectionGroupFormProps> = ({
  control,
}) => {
  return (
    <>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Tên nhóm khoa" htmlFor="name" required />
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Nhập tên nhóm khoa..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={3} mb={2.5} alignItems="center">
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </>
  );
};
