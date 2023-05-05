import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { createSchoolMaster } from '@/apis/school-masters.api';
import { CActionsForm } from '@/controls/';
import {
  defaultValuesSchoolMaster,
  schoolMasterResolver,
} from '@/modules/department/form/school-master';

import { MForm } from './MForm';

export interface IMCreateModalRef {
  open: () => void;
}

export const MCreateModal = forwardRef<IMCreateModalRef, any>(
  ({ ...props }, ref) => {
    //#region Ref
    //#endregion

    //#region Data
    const [open, setOpen] = useState<boolean>(false);

    const {
      control,
      handleSubmit,
      reset,
      formState: { isSubmitting, isDirty },
    } = useForm({
      mode: 'all',
      resolver: schoolMasterResolver,
      defaultValues: defaultValuesSchoolMaster,
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
          await createSchoolMaster(values);
          toast.success('Thêm mới thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message || 'Thêm mới không thành công!',
          );
        }
      })();
    };
    //#endregion

    //#region Cycle
    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
    }));
    //#endregion

    //#region Render
    return (
      <Dialog
        open={open}
        onClose={onCancel}
        PaperProps={{ sx: { minWidth: 400 } }}
      >
        <Box p={2.5}>
          <form>
            <MForm control={control} />
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
