import { Controller } from 'react-hook-form';
import { FormLabel, Stack } from '@mui/material';

import { CDateTimePicker, CInput, CSwitch } from '@/controls/';

import { IMScheduleFormProps } from './types';

export const MScheduleForm: React.FC<IMScheduleFormProps> = ({ control }) => {
  //#region Data
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Tiêu đề
        </FormLabel>
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title"
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={1} minWidth={200} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Trạng thái
        </FormLabel>
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Nội dung
        </FormLabel>
        <Controller
          control={control}
          name="content"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="content"
              multiline
              rows={4}
              placeholder="Nhập học vị..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Thời gian diễn ra
        </FormLabel>
        <Controller
          control={control}
          name="date"
          render={({ field, fieldState: { error } }) => (
            <CDateTimePicker
              {...field}
              id="date"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Địa điểm
        </FormLabel>
        <Controller
          control={control}
          name="location"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="location"
              multiline
              rows={2}
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
          Thành phần tham dự
        </FormLabel>
        <Controller
          control={control}
          name="attendee"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="attendee"
              multiline
              rows={2}
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
    </>
  );
  //#endregion
};
