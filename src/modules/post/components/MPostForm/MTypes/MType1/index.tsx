import { Controller } from 'react-hook-form';
import { UploadOutlined } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';

import { CCKEditor, CFormLabel, CImageUpload, CInput } from '@/controls/';

import { IMType1Props } from './types';

export const MType1: React.FC<IMType1Props> = ({ control }) => {
  return (
    <>
      <Stack direction="row" spacing={3} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Tiêu đề" required htmlFor="title" />
          <Controller
            control={control}
            name="title"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="title"
                placeholder="Nhập tiêu đề..."
                multiline
                rows={5}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Mô tả" htmlFor="description" />
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState: { error } }) => (
              <CInput
                {...field}
                id="description"
                placeholder="Nhập mô tả..."
                multiline
                rows={5}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Nội dung" required htmlFor="content" />
        <Controller
          control={control}
          name="content"
          render={({ field, fieldState: { error } }) => (
            <CCKEditor
              {...field}
              id="content"
              placeholder="Nhập nội dung..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="row" spacing={4} mb={2.5} alignItems="center">
        <CFormLabel label="Tệp đính kèm" />
        <div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<UploadOutlined />}
            sx={{ borderRadius: '10px' }}
            component="label"
          >
            NHẤN ĐỂ CHỌN TỆP
            <input type="file" hidden />
          </Button>
        </div>

        <Controller
          control={control}
          name="viewed"
          render={({ field }) => {
            console.log(field);
            return (
              <FormControlLabel
                {...field}
                checked={field.value}
                control={<Checkbox />}
                label="View File"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="downloaded"
          render={({ field }) => (
            <FormControlLabel
              {...field}
              checked={field.value}
              control={<Checkbox />}
              label="Download"
            />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Ảnh đại diện" />
        <Controller
          control={control}
          name="thumbnail"
          render={({ field, fieldState: { error } }) => (
            <CImageUpload
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
    </>
  );
};
