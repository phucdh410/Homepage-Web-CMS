import { forwardRef } from 'react';
import { TextField } from '@mui/material';

import { ICInputProps, ICInputRef } from './types';

export const CInput = forwardRef<ICInputRef, ICInputProps>(
  (
    {
      id,
      name,
      value,
      disabled,
      onChange,
      placeholder,
      type,
      error,
      helperText,
      startAdornment,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    return (
      <TextField
        inputRef={ref}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#F5F5F5' } }}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...props}
      />
    );
  },
);

CInput.defaultProps = {
  type: 'text',
};
