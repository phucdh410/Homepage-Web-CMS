import { Controller, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

import { CDatePicker } from '@/controls/';

export const MStartDate = ({ control }) => {
  const after = useWatch({ control, name: 'end_date' });

  const shouldDisableDate = (date) => {
    return dayjs(date).isAfter(dayjs(after));
  };

  return (
    <Controller
      control={control}
      name="start_date"
      render={({ field, fieldState: { error } }) => (
        <CDatePicker
          {...field}
          error={!!error}
          helperText={error?.message}
          shouldDisableDate={shouldDisableDate}
        />
      )}
    />
  );
};
