import { useMemo } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
// import { shallowEqual, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';

import { CInput, CInputPassword, CSwitch } from '@/controls/';
import { IPermissionsPayload } from '@/types/permission';

// import { RootState } from '@/redux/';
// import { IPermissionState } from '@/slices/permission';
import { IMFormProps } from './types';

export const MForm: React.FC<IMFormProps> = ({ control, isEdit }) => {
  //#region Data
  // const { permissions } = useSelector<RootState, IPermissionState>(
  //   (state) => state.permission,
  //   shallowEqual,
  // );

  const { fields, replace, update } = useFieldArray({
    control,
    name: 'permissions',
  });

  const disabledCheckAll = useMemo(() => {
    for (let el of fields) {
      if (!el.allowed) return false;
    }

    return true;
  }, [fields]);

  const disabledClearAll = useMemo(() => {
    for (let el of fields) {
      if (el.allowed) return false;
    }

    return true;
  }, [fields]);
  //#endregion

  //#region Event
  const onCheckAll = () =>
    replace(fields.map((e) => ({ ...e, allowed: true })));

  const onClearAll = () =>
    replace(fields.map((e) => ({ ...e, allowed: false })));

  const onCheck = (index: number, value: IPermissionsPayload) => {
    update(index, { ...value, allowed: !value.allowed });
  };
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Tên đăng nhập
        </FormLabel>
        <Controller
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <CInput
              {...field}
              disabled={isEdit}
              placeholder="Nhập username..."
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} mb={2.5}>
        <Stack direction="column" spacing={1} flex={1}>
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
            Mật khẩu
          </FormLabel>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <CInputPassword
                placeholder="Nhập password..."
                {...field}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          {isEdit && (
            <Typography sx={{ opacity: 0.7 }}>
              <i>(Nếu cần chỉnh sửa mật khẩu hãy nhập ô này)</i>
            </Typography>
          )}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          minWidth={200}
          mb={2.5}
        >
          <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
            Trạng thái
          </FormLabel>
          <Controller
            control={control}
            name="active"
            render={({ field }) => <CSwitch {...field} />}
          />
        </Stack>
      </Stack>

      <Stack direction="column" spacing={1} mb={2.5}>
        <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
          Danh sách tính năng truy cập
        </FormLabel>

        <Box>
          <Button
            className="c-button"
            disabled={disabledCheckAll}
            onClick={onCheckAll}
            sx={{ mr: 1 }}
          >
            Chọn tất cả
          </Button>
          <Button
            className="c-button"
            disabled={disabledClearAll}
            onClick={onClearAll}
          >
            Xóa tất cả
          </Button>
        </Box>

        <Controller
          control={control}
          name="permissions"
          render={({ fieldState: { error } }) => (
            <Typography display={!!error ? 'block' : 'none'} color="error">
              {error?.message}
            </Typography>
          )}
        />

        <Grid container spacing={1.5}>
          {fields.map((e, i) => (
            <Grid xs={6} md={4} xl={3} key={e?.id}>
              <FormControlLabel
                checked={e.allowed}
                onChange={() => onCheck(i, e)}
                control={<Checkbox />}
                label={e.label}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
  //#endregion
};
