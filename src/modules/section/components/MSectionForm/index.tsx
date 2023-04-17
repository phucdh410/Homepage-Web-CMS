import { Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import {
  CAutocomplete,
  CFormLabel,
  CImageUpload,
  CInput,
  CSwitch,
} from '@/controls/';

import { MLinkInput } from '../MLinkInput';
import { MTabs } from '../MTabs';

import { IMSectionFormProps } from './types';

export const MSectionForm: React.FC<IMSectionFormProps> = ({ control }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" gap={2} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Tên khoa" htmlFor="name" required />
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="name"
                placeholder="Nhập tên khoa..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Nhóm khoa" required />
          <Controller
            control={control}
            name="section_group_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                placeholder="Chọn nhóm khoa"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>

      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Slogan" htmlFor="slogan" required />
        <Controller
          control={control}
          name="slogan"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="slogan"
              placeholder="Nhập slogan..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={3} mb={2.5}>
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>

      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Dạng hiển thị" required />
        <Controller
          control={control}
          name="display"
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value={4}
                control={<Radio />}
                sx={{ '.MuiFormControlLabel-label': { flex: 1 } }}
                label={
                  <Stack direction="row" alignItems="center" gap={3}>
                    <span style={{ flexShrink: 0 }}>Liên kết</span>
                    <MLinkInput control={control} />
                  </Stack>
                }
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Bài viết"
              />
            </RadioGroup>
          )}
        />
      </Stack>

      <Stack mb={3}>
        <MTabs control={control} />
      </Stack>

      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Ảnh bìa" required />
        <Controller
          control={control}
          name="file_id"
          render={({ field, fieldState: { error } }) => (
            <CImageUpload
              {...field}
              aspectRatio="16/9"
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
