import { Controller, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';

import { CDatePicker } from '@/controls/';

export const MEndDate = ({ control }) => {
  const before = useWatch({ control, name: 'start_date' });

  const shouldDisableDate = (date) => {
    return dayjs(date).isBefore(dayjs(before));
  };

  return (
    <Controller
      control={control}
      name="end_date"
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
