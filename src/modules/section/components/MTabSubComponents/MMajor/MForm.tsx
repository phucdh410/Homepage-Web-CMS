import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';
import { ICreateMajorParams, IUpdateMajorParams } from '@/types/majors';

import { MMajorInput } from './MMajorsInput';

export interface IMFormProps {
  control: Control<ICreateMajorParams | IUpdateMajorParams, any>;
}

export const MForm: React.FC<IMFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Tiêu đề" htmlFor="title" required />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <MMajorInput control={control} />

      <Stack direction="row" spacing={3} mb={2.5} alignItems="center">
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </>
  );
  //#endregion
};
