import { Controller, useWatch } from 'react-hook-form';
import { Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

import { CDatePicker } from '../CDatePicker';

import { ICRangePickerProps } from './types';

import './index.scss';

export const CRangePicker: React.FC<ICRangePickerProps> = ({
  control,
  startName,
  endName,
  trigger,
}) => {
  //#region Data
  const startValue = useWatch({ control, name: startName });
  const endValue = useWatch({ control, name: endName });

  //#endregion

  //#region Event
  const disableStartDate = (date: Dayjs) => {
    return dayjs(date).isAfter(endValue, 'date');
  };

  const disableEndDate = (date: Dayjs) => {
    return dayjs(date).isBefore(startValue, 'date');
  };

  const onValueChange =
    (onFieldChange: (value: Dayjs | null) => void) => (value: Dayjs | null) => {
      onFieldChange(value);
      trigger([startName, endName]);
    };
  //#endregion

  //#region Render
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      className="c-range-picker"
    >
      <Controller
        control={control}
        name={startName}
        render={({ field, fieldState: { error } }) => (
          <CDatePicker
            {...field}
            placeholder="Ngày bắt đầu"
            onChange={onValueChange(field.onChange)}
            error={!!error}
            helperText={error?.message}
            shouldDisableDate={disableStartDate}
          />
        )}
      />
      <Controller
        control={control}
        name={endName}
        render={({ field, fieldState: { error } }) => (
          <CDatePicker
            {...field}
            placeholder="Ngày kết thúc"
            onChange={onValueChange(field.onChange)}
            error={!!error}
            helperText={error?.message}
            shouldDisableDate={disableEndDate}
          />
        )}
      />
    </Stack>
  );
  //#endregion
};