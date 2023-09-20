import { Controller, useWatch } from 'react-hook-form';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import { MENU_TYPE_ENUMS, MENU_TYPE_OPTIONS } from '@/constants/enums';
import { CCollapseSelect, CFormLabel, CInput } from '@/controls/';

import { IMFolderFormProps } from './types';

export const MFolderForm: React.FC<IMFolderFormProps> = ({
  control,
  menuList,
}) => {
  // const {
  //   field: { onChange },
  // } = useController({ control, name: 'is_pin' });

  // const onDisplayChange =
  //   (CallbackFnc: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
  //     CallbackFnc(e);
  //     if (e.target.value === '3') onChange(true);
  //     else onChange(false);
  //   };
  const type = useWatch({ control, name: 'type' });

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Stack direction="column" spacing={3} mb={2.5} flex={0.5}>
          <Stack>
            <CFormLabel
              label="Danh mục Tiếng Việt"
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
                  placeholder="Nhập tên Danh mục..."
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
          <Stack direction="column" spacing={1} mb={2.5} flex={0.5}>
            <CFormLabel label="Mô tả Tiếng Việt" htmlFor="description.vi" />
            <Controller
              control={control}
              name="description.vi"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  {...field}
                  id="description.vi"
                  placeholder="Nhập tên mô tả..."
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
        </Stack>
        <Stack direction="column" spacing={3} mb={2.5} flex={0.5}>
          <Stack>
            <CFormLabel
              label="Danh mục Tiếng Anh"
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
                  placeholder="Nhập tên Danh mục..."
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>
          <Stack direction="column" spacing={1} mb={2.5} flex={0.5}>
            <CFormLabel label="Mô tả Tiếng Anh" htmlFor="description.en" />
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

      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        mb={2.5}
      >
        {/* <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" required />
          <CPageSelect control={control} />
        </Stack> */}
        <Stack direction="column" spacing={1} flex={0.5}>
          <CFormLabel label="Danh mục cha" required />
          <Controller
            control={control}
            name="parent_id"
            render={({ field, fieldState: { error } }) => (
              <CCollapseSelect
                {...field}
                data={menuList}
                placeholder="Chọn danh mục cha"
              />
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={0.5}>
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
      </Stack>

      {/* <Stack direction="row" spacing={3} mb={2.5} alignItems="center">
        <CFormLabel label="Trạng thái" />
        <Controller
          control={control}
          name="active"
          render={({ field }) => <CSwitch {...field} />}
        />
      </Stack> */}

      <Stack
        direction="column"
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
            name="type"
            render={({ field }) => (
              <RadioGroup {...field}>
                {MENU_TYPE_OPTIONS.map((e) => (
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

        {/* <MShowHomepageInput control={control} /> */}
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
    </>
  );
};
