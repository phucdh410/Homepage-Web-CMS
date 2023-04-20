import { forwardRef } from 'react';
import { CalendarMonth } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { ICDatePickerProps } from './types';

// Lưu ý: Bỏ slotProps ra khỏi text field
export const CDatePicker = forwardRef<HTMLInputElement, ICDatePickerProps>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      format,
      error,
      helperText,
      onBlur,
      fullWidth,
      shouldDisableDate,
      ...props
    },
    ref,
  ) => {
    return (
      <DatePicker
        className="c-datepicker"
        value={value}
        onChange={onChange}
        format={format}
        inputRef={ref}
        shouldDisableDate={shouldDisableDate}
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
                  <CalendarMonth sx={{ color: '#177DB8' }} />
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

CDatePicker.defaultProps = {
  format: 'DD/MM/YYYY',
};
