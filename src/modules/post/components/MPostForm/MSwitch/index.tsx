import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CSwitch } from '@/controls/';

import { IMSwitchProps } from './types';

export const MSwitch: React.FC<IMSwitchProps> = ({ control }) => {
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
    <Stack direction="column" gap={3} flex={1} maxWidth={250}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Hiển thị trang chủ" />
        <Controller
          control={control}
          name="show_homepage"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CFormLabel label="Nổi bật" />
        <Controller
          control={control}
          name="featured"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>
    </Stack>
  );
  //#endregion
};
