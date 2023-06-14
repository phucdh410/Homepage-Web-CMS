import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CCollapseSelect, CFormLabel, CPageSelect } from '@/controls/';

import { MSwitch } from './MSwitch';
import { MTypes } from './MTypes';
import { IMPostFormProps } from './types';
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js

export const MPostForm: React.FC<IMPostFormProps> = ({ control }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="row" alignItems="baseline" gap={4} mb={3}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" required />
          <CPageSelect control={control} />
        </Stack>

        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Danh mục" />
          <Controller
            control={control}
            name="folder_id"
            render={({ field }) => (
              <CCollapseSelect {...field} placeholder="Chọn thư mục" />
            )}
          />
        </Stack>
        <MSwitch control={control} />
      </Stack>

      <MTypes control={control} />
    </>
  );
  //#endregion
};
