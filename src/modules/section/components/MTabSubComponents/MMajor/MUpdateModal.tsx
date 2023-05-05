import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateMajor } from '@/apis/majors.api';
import { CActionsForm } from '@/controls/';
import {
  defaultValuesMajor,
  majorResolver,
} from '@/modules/section/form/major';
import { IGetMajorsResponse } from '@/types/majors';

import { MForm } from './MForm';

export interface IMUpdateModalRef {
  open: (id: string, data: IGetMajorsResponse) => void;
}

export const MUpdateModal = forwardRef<IMUpdateModalRef, any>(
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
      resolver: majorResolver,
      defaultValues: defaultValuesMajor,
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
          await updateMajor(id, values);
          toast.success('Chỉnh sửa major thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Chỉnh sửa major không thành công!',
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
