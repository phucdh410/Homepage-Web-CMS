import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';
import {
  ICreateSchoolMasterParams,
  IUpdateSchoolMasterParams,
} from '@/types/school-masters';

export interface IMFormProps {
  control: Control<ICreateSchoolMasterParams | IUpdateSchoolMasterParams, any>;
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
        <CFormLabel label="Mốc thời gian" required />
        <Stack direction="row" gap={3}>
          <Controller
            control={control}
            name="from"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                type="number"
                id="from"
                placeholder="Nhập mốc thời gian"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="to"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                type="number"
                id="to"
                placeholder="Nhập mốc thời gian"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Hình ảnh đại diện" required />
        <Controller
          control={control}
          name="file_id"
          render={({ field, fieldState: { error } }) => (
            <CImageUpload
              {...field}
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
