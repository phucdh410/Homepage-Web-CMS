import { Controller, useWatch } from 'react-hook-form';

import { CInput } from '@/controls/';

import { IMLinkInputProps } from './types';

export const MLinkInput: React.FC<IMLinkInputProps> = ({ control }) => {
  const displayValue = useWatch({ control, name: 'display' });

  return (
    <Controller
      control={control}
      name="link"
      render={({ field: _field, fieldState: { error: _error } }) => (
        <CInput
          {..._field}
          fullWidth
          disabled={displayValue?.toString() !== '4'}
          placeholder="Nhập liên kết..."
          error={!!_error}
          helperText={_error?.message}
        />
      )}
    />
  );
};
