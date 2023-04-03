import { forwardRef } from 'react';
import { DatePicker } from '@mui/x-date-pickers';

import { ICDatePickerProps } from './types';

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
          textField: (params) => ({
            ...params,
            fullWidth,
            name,
            placeholder,
            onBlur,
            error,
            helperText,
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
