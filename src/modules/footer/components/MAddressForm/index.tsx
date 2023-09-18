import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Stack } from '@mui/material';

import { CActionsForm, CFormLabel, CInput } from '@/controls/';
import { IAddressForm } from '@/types/footer';

import { addressResolver, defaultValuesAddress } from '../../form';

import { MAddressField } from './MAddressField';
import { IMAddressFormProps } from './types';

export const MAddressForm: React.FC<IMAddressFormProps> = ({ data }) => {
  //#region Data
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm<IAddressForm>({
    defaultValues: data ? data : defaultValuesAddress,
    mode: 'all',
    resolver: addressResolver,
  });
  //#endregion

  //#region Event
  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        // data ? await updateLinks(values) : createLinks(values);
        toast.success('Cập nhật liên kết thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Cập nhật liên kết không thành công!',
        );
      }
    })();
  };

  const onCancel = () => {
    data ? reset(data) : reset();
  };

  useEffect(() => {
    if (data) reset({ ...data });
  }, [data]);
  //#endregion

  //#region Render
  return (
    <form>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Điện thoại" required htmlFor="phone" />
        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState: { error } }) => (
            <CInput
              id="phone"
              {...field}
              placeholder="Nhập số điện thoại"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Fax" required htmlFor="fax" />
        <Controller
          control={control}
          name="fax"
          render={({ field, fieldState: { error } }) => (
            <CInput
              id="fax"
              {...field}
              placeholder="Nhập số Fax"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Stack>

      <MAddressField control={control} />

      <CActionsForm
        onCancel={onCancel}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        isDirty={isDirty}
      />
    </form>
  );
  //#endregion
};
