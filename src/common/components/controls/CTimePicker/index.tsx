import { forwardRef } from 'react';
import { AccessTime } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { ICTimePickerProps } from './types';

// Lưu ý: Bỏ slotProps ra khỏi text field
export const CTimePicker = forwardRef<HTMLInputElement, ICTimePickerProps>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      views,
      error,
      helperText,
      onBlur,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    return (
      <MobileTimePicker
        className="c-timepicker"
        value={value}
        onChange={onChange}
        views={['hours', 'minutes']}
        inputRef={ref}
        slotProps={{
          textField: ({ slotProps, ...params }) => ({
            ...params,
            fullWidth,
            name,
            placeholder,
            onBlur,
            error,
            helperText,
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <AccessTime sx={{ color: '#177DB8' }} />
                </InputAdornment>
              ),
            },
          }),
        }}
        {...props}
      />
    );
  },
);

CTimePicker.defaultProps = {
  views: ['hours', 'minutes'],
};
