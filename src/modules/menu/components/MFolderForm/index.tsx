import { Controller, useController } from 'react-hook-form';
import { Box, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { DISPLAY_OPTIONS } from '@/constants/enums';
import { CAutocomplete, CFormLabel, CInput, CSwitch } from '@/controls/';

import { MShowHomepageInput } from './MShowHomepageInput';
import { IMFolderFormProps } from './types';

export const MFolderForm: React.FC<IMFolderFormProps> = ({ control }) => {
  const {
    field: { onChange },
  } = useController({ control, name: 'show_homepage' });

  const onDisplayChange =
    (CallbackFnc: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      CallbackFnc(e);
      if (e.target.value === '3') onChange(true);
      else onChange(false);
    };
  return (
    <>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Danh mục" required htmlFor="title" />
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Nhập tên trang..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        mb={2.5}
      >
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" required />
          <Controller
            control={control}
            name="page_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                options={[]}
                renderOption={(props, option) => (
                  <Box key={option.id} {...props}>
                    {option.label}
                  </Box>
                )}
                placeholder="Chọn trang..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Danh mục cha" />
          <Controller
            control={control}
            name="parent_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                options={[]}
                renderOption={(props, option) => (
                  <Box key={option.id} {...props}>
                    {option.label}
                  </Box>
                )}
                placeholder="Chọn danh mục..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3} mb={2.5} alignItems="center">
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        mb={2.5}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={3}>
          <CFormLabel
            label="Dạng hiển thị"
            required
            sx={{ marginTop: '0.5rem' }}
          />
          <Controller
            control={control}
            name="display"
            render={({ field }) => (
              <RadioGroup {...field} onChange={onDisplayChange(field.onChange)}>
                {DISPLAY_OPTIONS.map((e) => (
                  <FormControlLabel
                    key={e.id}
                    value={e.value}
                    control={<Radio />}
                    label={e.label}
                    sx={{ display: e.value === 5 ? 'none' : 'inline-flex' }}
                  />
                ))}
              </RadioGroup>
            )}
          />
        </Stack>

        <MShowHomepageInput control={control} />
      </Stack>
    </>
  );
};
