import { forwardRef } from 'react';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

import { ICDateTimePickerProps } from './types';

export const CDateTimePicker = forwardRef<
  HTMLInputElement,
  ICDateTimePickerProps
>(
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
      <MobileDateTimePicker
        className="c-datepicker date-time-picker"
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

CDateTimePicker.defaultProps = {
  format: 'DD/MM/YYYY HH:mm:ss',
};
