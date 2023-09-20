import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';
import { ICreateSubjectParams, IUpdateSubjectParams } from '@/types/subjects';

export interface IMFormProps {
  control: Control<ICreateSubjectParams | IUpdateSubjectParams, any>;
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
        <CFormLabel label="Tên" htmlFor="name" required />
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Nhập tên bộ môn..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
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
