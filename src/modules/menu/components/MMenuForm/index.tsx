import { Controller, useWatch } from 'react-hook-form';
import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Unstable_Grid2 as Grid,
} from '@mui/material';

import { MENU_TYPE_ENUMS, MENU_TYPE_OPTIONS } from '@/constants/enums';
import { CFormLabel, CInput, CSwitch } from '@/controls/';

// import { MFeature } from './MFeature';
import { IMMenuFormProps } from './types';

export const MMenuForm: React.FC<IMMenuFormProps> = ({ control }) => {
  const type = useWatch({ control, name: 'type' });

  return (
    <Grid container spacing={2.5} mb={2.5}>
      <Grid lg={12}>
        <Paper variant="wrapper">
          <Stack direction="row" spacing={3} mb={2.5}>
            <Stack flex={1} spacing={2}>
              <Stack direction="row" spacing={2} flex={1}>
                <Stack spacing={2} flex={0.5}>
                  <Stack direction="column" spacing={1} flex={1}>
                    <CFormLabel
                      label="Menu Tiếng Việt"
                      required
                      htmlFor="title.vi"
                    />
                    <Controller
                      control={control}
                      name="title.vi"
                      render={({ field, fieldState: { error } }) => (
                        <CInput
                          {...field}
                          id="title.vi"
                          placeholder="Nhập tên Menu..."
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction="column" spacing={1} flex={1}>
                    <CFormLabel
                      label="Mô tả Tiếng Việt"
                      required
                      htmlFor="description.vi"
                    />
                    <Controller
                      control={control}
                      name="description.vi"
                      render={({ field, fieldState: { error } }) => (
                        <CInput
                          {...field}
                          id="description.vi"
                          placeholder="Nhập mô tả..."
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                </Stack>
                <Stack spacing={2} flex={0.5}>
                  <Stack direction="column" spacing={1} flex={1}>
                    <CFormLabel
                      label="Menu Tiếng Anh"
                      required
                      htmlFor="title.en"
                    />
                    <Controller
                      control={control}
                      name="title.en"
                      render={({ field, fieldState: { error } }) => (
                        <CInput
                          {...field}
                          id="title.en"
                          placeholder="Nhập tên Menu..."
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction="column" spacing={1} flex={1}>
                    <CFormLabel
                      label="Mô tả Tiếng Anh"
                      required
                      htmlFor="description.en"
                    />
                    <Controller
                      control={control}
                      name="description.en"
                      render={({ field, fieldState: { error } }) => (
                        <CInput
                          {...field}
                          id="description.en"
                          placeholder="Nhập mô tả..."
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  </Stack>
                </Stack>
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
              {Number(type) === MENU_TYPE_ENUMS.URL && (
                <Stack direction="column" spacing={1} flex={1}>
                  <CFormLabel label="Link" required htmlFor="link" />
                  <Controller
                    control={control}
                    name="link"
                    render={({ field, fieldState: { error } }) => (
                      <CInput
                        {...field}
                        id="link"
                        placeholder="Nhập link..."
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                </Stack>
              )}
            </Stack>

            <Stack direction="column" spacing={0}>
              <CFormLabel label="Loại" required sx={{ marginTop: '9px' }} />
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    {MENU_TYPE_OPTIONS.map((e) => (
                      <FormControlLabel
                        key={e.id}
                        value={e.value}
                        control={<Radio />}
                        label={e.label}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </Stack>
          </Stack>

          {/* <Stack direction="row" spacing={3} mb={2.5}>
            <CFormLabel label="Trạng thái" />
            <Controller
              control={control}
              name="is_menu"
              render={({ field }) => <CSwitch {...field} />}
            />
          </Stack> */}
          <Stack direction="row" spacing={3} mb={2.5}>
            <CFormLabel label="Hiển thị trên Menu" />
            <Controller
              control={control}
              name="is_pin"
              render={({ field }) => <CSwitch {...field} />}
            />
          </Stack>
        </Paper>
      </Grid>

      {/* <MFeature control={control} /> */}
    </Grid>
  );
};
