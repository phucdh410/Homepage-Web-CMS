import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { createOrgStructure } from '@/apis/org-structures.api';
import { CActionsForm } from '@/controls/';
import {
  defaultValuesOrgStructure,
  orgStructureResolver,
} from '@/modules/institute/form/org-structure';

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
      formState: { isSubmitting },
    } = useForm({
      mode: 'all',
      resolver: orgStructureResolver,
      defaultValues: defaultValuesOrgStructure,
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
          await createOrgStructure(values);
          toast.success('Thêm mới cơ cấu tổ chức thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Thêm mới cơ cấu tổ chức không thành công!',
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
            />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
