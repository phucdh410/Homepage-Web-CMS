import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';

import { IMPartyFormProps } from './types';

export const MPartyForm: React.FC<IMPartyFormProps> = ({ control }) => {
  return (
    <>
      <Stack direction="row" spacing={2.5} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Danh mục" required htmlFor="name" />
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
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          flexShrink={0}
        >
          <CFormLabel label="Trạng thái" />
          <Controller
            control={control}
            name="active"
            render={({ field }) => <CSwitch {...field} />}
          />
        </Stack>
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Dạng hiển thị" required />
        <div style={{ marginLeft: '1.5rem' }}>
          <Stack direction="column" spacing={1} ml={2}>
            <CFormLabel label="Liên kết" htmlFor="link" required />
            <Controller
              control={control}
              name="link"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="link"
                  placeholder="Nhập liên kết..."
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </div>
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Hình bìa" required />
        <Controller
          control={control}
          name="file_id"
          render={({ field, fieldState: { error } }) => (
            <CImageUpload
              {...field}
              maxMb={10}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
    </>
  );
};
