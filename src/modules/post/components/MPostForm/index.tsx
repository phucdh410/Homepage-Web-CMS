import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getAllPages } from '@/apis/pages.api';
import { CAutocomplete, CCollapseSelect, CFormLabel } from '@/controls/';
import { IOption } from '@/types/options';

import { MSwitch } from './MSwitch';
import { MTypes } from './MTypes';
import { IMPostFormProps } from './types';
//stackoverflow.com/questions/63998373/is-there-a-material-ui-based-tree-select-component
//codesandbox.io/s/mui-tree-select-sample-easy-wujtg5?file=/index.js
export const MPostForm: React.FC<IMPostFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const { data: pageResponse } = useQuery(['pages'], () => getAllPages());

  const pages = useMemo<IOption[]>(
    () =>
      pageResponse?.data?.data?.map((e) => ({
        id: e.id,
        value: e.id,
        label: e.title,
      })) || [],
    [pageResponse],
  );
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="row" alignItems="center" gap={4} mb={3}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" required />
          <Controller
            control={control}
            name="page_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Chọn trang"
                options={pages}
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
