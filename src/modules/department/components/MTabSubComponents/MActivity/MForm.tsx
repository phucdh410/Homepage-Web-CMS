import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';
import {
  ICreateActivityParams,
  IUpdateActivityParams,
} from '@/types/activities';

export interface IMFormProps {
  control: Control<ICreateActivityParams | IUpdateActivityParams, any>;
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
        <CFormLabel label="Tên hoạt động" htmlFor="name" required />
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="name"
              placeholder="Nhập tên hoạt động..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Nội dung" htmlFor="description" required />
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="description"
              placeholder="Nhập nội dung..."
              multiline
              rows={4}
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
