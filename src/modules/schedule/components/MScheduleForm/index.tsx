import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';

import { CDatePicker, CFormLabel, CInput, CTimePicker } from '@/controls/';

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
        <CFormLabel label="Tiêu đề Tiềng Việt" required />
        <Controller
          control={control}
          name="title.vi"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title.vi"
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Nội dung Tiếng Việt" />
        <Controller
          control={control}
          name="content.vi"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="content.vi"
              multiline
              rows={4}
              placeholder="Nhập nội dung..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>
      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Tiêu đề Tiềng Anh" required />
        <Controller
          control={control}
          name="title.en"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="title.en"
              placeholder="Nhập tiêu đề..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      {/* <Stack direction="row" spacing={3} minWidth={200} mb={2.5}>
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack> */}

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Nội dung Tiếng Anh" />
        <Controller
          control={control}
          name="content.en"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="content.en"
              multiline
              rows={4}
              placeholder="Nhập nội dung..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Thời gian diễn ra" required />
        <Stack direction="row" spacing={3}>
          <Controller
            control={control}
            name="date"
            render={({ field, fieldState: { error } }) => (
              <CDatePicker
                {...field}
                fullWidth
                id="date"
                format="DD/MM/YYYY"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="time"
            render={({ field, fieldState: { error } }) => (
              <CTimePicker
                {...field}
                fullWidth
                id="time"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>

      {/* <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Địa điểm" />
        <Controller
          control={control}
          name="location"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="location"
              multiline
              rows={2}
              placeholder="Nhập địa điểm..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} flex={1} mb={2.5}>
        <CFormLabel label="Thành phần tham dự" />
        <Controller
          control={control}
          name="attendee"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              id="attendee"
              multiline
              rows={2}
              placeholder="Nhập thành phần tham dự..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack> */}
    </>
  );
  //#endregion
};
