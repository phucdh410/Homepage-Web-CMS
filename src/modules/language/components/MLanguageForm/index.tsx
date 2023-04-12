import { Controller } from 'react-hook-form';
import { FormLabel, Stack } from '@mui/material';

import { CInput, CSwitch } from '@/controls/';

import { IMLanguageFormProps } from './types';

export const MLanguageForm: React.FC<IMLanguageFormProps> = ({ control }) => {
  return (
    <Stack direction="column" spacing={2.5} mb={2.5}>
      <Stack direction="column" spacing={1} flex={1}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Ngôn ngữ
        </FormLabel>
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              placeholder="Nhập tên ngôn ngữ (ex: Tiếng Việt)"
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={1} minWidth={200}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Trạng thái
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
