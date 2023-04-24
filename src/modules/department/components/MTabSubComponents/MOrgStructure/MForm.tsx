import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { DISPLAY_OPTIONS } from '@/constants/enums';
import { CFormLabel, CInput, CSwitch } from '@/controls/';
import {
  ICreateOrgStructureParams,
  IUpdateOrgStructureParams,
} from '@/types/org-structures';

export interface IMFormProps {
  control: Control<ICreateOrgStructureParams | IUpdateOrgStructureParams, any>;
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
              placeholder="Nhập tên..."
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
      <Stack direction="row" spacing={3} mb={2.5}>
        <CFormLabel label="Dạng hiển thị" required sx={{ marginTop: '9px' }} />
        <Controller
          control={control}
          name="display"
          render={({ field }) => (
            <RadioGroup {...field}>
              {DISPLAY_OPTIONS.map((e) => (
                <FormControlLabel
                  value={e.value}
                  key={e.id}
                  label={e.label}
                  control={<Radio />}
                  sx={{
                    display:
                      e.value === 2 || e.value === 3 ? 'inline-flex' : 'none',
                  }}
                />
              ))}
            </RadioGroup>
          )}
        />
      </Stack>
    </>
  );
  //#endregion
};
