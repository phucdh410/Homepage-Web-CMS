import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CInput, CSwitch } from '@/controls/';
import {
  ICreateTimelineParams,
  IUpdateTimelineParams,
} from '@/types/timelines';

export interface IMFormProps {
  control: Control<ICreateTimelineParams | IUpdateTimelineParams, any>;
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
        <CFormLabel label="Tiêu đề" htmlFor="title" required />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Nhập tiêu đề..."
              multiline
              rows={4}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="row" spacing={3} mb={2.5} alignItems="center">
        {' '}
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
