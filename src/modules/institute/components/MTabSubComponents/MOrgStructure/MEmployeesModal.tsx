import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateOrgEmployee } from '@/apis/org-structures.api';
import { CActionsForm } from '@/controls/';
import { defaultValuesEmployee } from '@/modules/institute/form/employee';

import { MEmployeesForm } from './MEmployeesForm';

export interface IMEmployeesModalRef {
  open: (id: string) => void;
}

export const MEmployeesModal = forwardRef<IMEmployeesModalRef, any>(
  ({ ...props }, ref) => {
    //#region Ref
    //#endregion

    //#region Data
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>('');

    const {
      control,
      handleSubmit,
      reset,
      formState: { isSubmitting, isDirty },
    } = useForm({
      mode: 'all',
      // resolver: orgStructureResolver,
      defaultValues: defaultValuesEmployee,
    });
    //#endregion

    //#region Event
    const onCancel = () => {
      reset();
      setOpen(false);
    };

    const onSubmit = () => {
      handleSubmit(async (values) => {
        try {
          console.log(values);
          await updateOrgEmployee(id, values);
          toast.success('Cập nhật nhân sự thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Cập nhật nhân sự không thành công!',
          );
        }
      })();
    };
    //#endregion

    //#region Cycle
    useImperativeHandle(ref, () => ({
      open: (id) => {
        setId(id);
        setOpen(true);
      },
    }));
    //#endregion

    //#region Render
    return (
      <Dialog
        open={open}
        onClose={onCancel}
        PaperProps={{ sx: { minWidth: 800 } }}
      >
        <Box p={2.5}>
          <form>
            <MEmployeesForm control={control} />
            <CActionsForm
              onCancel={onCancel}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              isDirty={isDirty}
            />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
