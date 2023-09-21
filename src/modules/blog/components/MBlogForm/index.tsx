import { Controller } from 'react-hook-form';
import { Box, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { BLOG_TYPE_OPTIONS } from '@/constants/enums';
import {
  CAutocomplete,
  CFormLabel,
  CInput,
  CRangePicker,
  CSwitch,
} from '@/controls/';

import { IMBlogFormProps } from './types';

export const MBlogForm: React.FC<IMBlogFormProps> = ({ control, trigger }) => {
  return (
    <Stack direction="column" spacing={2.5} mb={2.5}>
      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Danh mục cha" required htmlFor="category_id" />
        <Controller
          control={control}
          name="category_id"
          render={({ field, fieldState: { error } }) => (
            <CAutocomplete
              {...field}
              options={[]}
              renderOption={(props, option) => (
                <Box key={option.id} {...props}>
                  {option?.label}
                </Box>
              )}
              id="category_id"
              placeholder="Chọn danh mục cha..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Slug" required htmlFor="slug" />
        <Controller
          control={control}
          name="slug"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="slug"
              placeholder="Nhập slug..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={0}>
        <CFormLabel label="Loại" required />
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <RadioGroup {...field}>
              {BLOG_TYPE_OPTIONS.map((e) => (
                <FormControlLabel
                  key={e.id}
                  value={e.value}
                  control={<Radio />}
                  label={e.label}
                  sx={{ width: 'fit-content' }}
                />
              ))}
            </RadioGroup>
          )}
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        <CFormLabel label="Ghim" />
        <Controller
          control={control}
          name="is_pin"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        <CFormLabel label="Confirm" />
        <Controller
          control={control}
          name="is_confirm"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1}>
        <CFormLabel label="Ngày hiển thị" required />
        <CRangePicker
          control={control}
          startName="activate_date"
          endName="deactivate_date"
          trigger={trigger}
          disablePast
        />
      </Stack>
    </Stack>
  );
};
