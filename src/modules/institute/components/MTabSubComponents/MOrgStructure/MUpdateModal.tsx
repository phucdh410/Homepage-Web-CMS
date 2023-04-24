import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateOrgStructure } from '@/apis/org-structures.api';
import { CActionsForm } from '@/controls/';
import {
  defaultValuesOrgStructure,
  orgStructureResolver,
} from '@/modules/institute/form/org-structure';
import { IGetOrgStructuresResponse } from '@/types/org-structures';

import { MForm } from './MForm';

export interface IMUpdateModalRef {
  open: (id: string, data: IGetOrgStructuresResponse) => void;
}

export const MUpdateModal = forwardRef<IMUpdateModalRef, any>(
  ({ ...props }, ref) => {
    //#region Ref
    //#endregion

    //#region Data
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>('');

    const { control, handleSubmit, reset } = useForm({
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
          await updateOrgStructure(id, values);
          toast.success('Chỉnh sửa org-structure thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Chỉnh sửa org-structure không thành công!',
          );
        }
      })();
    };
    //#endregion

    //#region Cycle
    useImperativeHandle(ref, () => ({
      open: (id, data) => {
        if (id && data) {
          reset(data);
          setId(id);
        }

        setOpen(true);
      },
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
            <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
