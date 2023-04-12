import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { createPosition } from '@/apis/positions.api';
import { CActionsForm } from '@/controls/';
import { ICreatePositionParams } from '@/types/position';

import { defaultValuesPosition, positionResolver } from '../../form';
import { MPositionForm } from '../MPositionForm';

import { IMCreatePositionModalRef } from './types';

export const MCreatePositionModal = forwardRef<IMCreatePositionModalRef, any>(
  ({ ...props }, ref) => {
    //#region Data
    const [open, setOpen] = useState(false);

    const { control, handleSubmit, reset } = useForm<ICreatePositionParams>({
      resolver: positionResolver,
      defaultValues: defaultValuesPosition,
      mode: 'all',
      shouldFocusError: true,
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
          const res = await createPosition(values);
          toast.success('Tạo mới chức vụ thành công!');
        } catch (error: any) {
          toast.error(error?.response?.data?.message || 'Có lỗi xảy ra!');
        }
      })();
    };
    //#endregion

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
    }));

    //#region Render
    return (
      <Dialog
        open={open}
        onClose={onCancel}
        PaperProps={{ sx: { minWidth: '400px' } }}
      >
        <Box p={2.5}>
          <form>
            <MPositionForm control={control} />

            <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
