import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Stack } from '@mui/material';

import { CActionsForm, CCKEditor, CFormLabel } from '@/controls/';

export const MFooterForm = () => {
  //#region Data
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: 'all',
  });
  //#endregion

  //#region Event
  const onSubmit = () => {
    handleSubmit(async (values) => {
      console.log(values);
      toast.success('Cập nhật footer thành công!');
    })();
  };

  const onCancel = () => {
    reset();
  };
  //#endregion

  //#region Render
  return (
    <div>
      <form>
        <Stack direction="column" spacing={1} mb={2.5}>
          <CFormLabel label="Thông tin" required htmlFor="help" />
          <Controller
            control={control}
            name="information"
            render={({ field, fieldState: { error } }) => (
              <CCKEditor
                id="information"
                {...field}
                placeholder="Nhập nội dung..."
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <CActionsForm
          onCancel={onCancel}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          isDirty={isDirty}
        />
      </form>
    </div>
  );
  //#endregion
};
