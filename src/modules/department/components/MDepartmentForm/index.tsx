import { Controller } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { CFormLabel, CImageUpload, CInput, CSwitch } from '@/controls/';

import { MLinkInput } from '../MLinkInput';
import { MTabs } from '../MTabs';

import { IMDepartmentFormProps } from './types';

export const MDepartmentForm: React.FC<IMDepartmentFormProps> = ({
  control,
}) => {
  return (
    <>
      <Stack direction="row" spacing={3} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Tên phòng ban" htmlFor="name" required />
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="name"
                placeholder="Nhập tên phòng ban..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flexShrink={0}>
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
                label="Thông tin"
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
