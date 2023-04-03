import { forwardRef, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CInput, CSwitch } from '@controls';
import { useResolver } from '@hooks';
import {
  defaultValuesNotification,
  validationSchemaNotification,
} from '@modules/homepage/form';
import { Box, Dialog, FormLabel, Stack } from '@mui/material';
import { CActionsForm } from '@others';

export const MNotificationModal = forwardRef(({ props }, ref) => {
  //#region Data
  const [open, setOpen] = useState(false);

  const resolver = useResolver(validationSchemaNotification);

  const { control, handleSubmit, reset } = useForm({
    resolver,
    defaultValues: defaultValuesNotification,
    mode: 'all',
    shouldFocusError: true,
  });
  //#endregion

  //#region Event
  const close = () => {
    reset();

    setOpen(false);
  };

  const onSubmit = async (values) => {
    console.log(values);
  };
  //#endregion

  useImperativeHandle(ref, () => ({
    open: (data, language_id) => {
      if (data && language_id) {
        reset({ ...data, language_id });
      }

      setOpen(true);
    },
  }));

  //#region Render
  return (
    <Dialog open={open} onClose={close}>
      <Box p={2.5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2.5} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Tiêu đề
              </FormLabel>
              <Controller
                control={control}
                name="title"
                render={({ field, fieldState: { error } }) => (
                  <CInput
                    placeholder="Nhập tiêu đề..."
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={1} minWidth={200}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
                Hiển thị
              </FormLabel>
              <Controller
                control={control}
                name="published"
                render={({ field }) => <CSwitch {...field} />}
              />
            </Stack>
          </Stack>

          <CActionsForm onBack={close} />
        </form>
      </Box>
    </Dialog>
  );
  //#endregion
});
