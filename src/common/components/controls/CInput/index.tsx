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
      fullWidth,
      sx,
      maxLength,
      ...props
    },
    ref,
  ) => {
    return (
      <TextField
        fullWidth={fullWidth}
        inputRef={ref}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        sx={{
          '& .MuiOutlinedInput-root': { backgroundColor: '#F5F5F5' },
          ...sx,
        }}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        inputProps={{ maxLength: maxLength }}
        {...props}
      />
    );
  },
);

CInput.defaultProps = {
  type: 'text',
};
