import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CAutocomplete, CFormLabel } from '@/controls/';

import { MSwitch } from '../MSwitch';

import { IMPostFormProps } from './types';

export const MPostForm: React.FC<IMPostFormProps> = ({ control }) => {
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
      <Stack direction="row" alignItems="center" gap={4} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" required />
          <Controller
            control={control}
            name="page_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Chọn trang!"
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Danh mục" />
          <Controller
            control={control}
            name="folder_id"
            render={({ field }) => (
              <CAutocomplete
                {...field}
                placeholder="Chọn danh mục!"
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
              />
            )}
          />
        </Stack>
        <MSwitch control={control} />
      </Stack>
    </>
  );
  //#endregion
};
