import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updatePosition } from '@/apis/positions.api';
import { CActionsForm } from '@/controls/';
import {
  IGetPositionsResponse,
  IUpdatePositionParams,
} from '@/types/positions';

import { defaultValuesPosition, positionResolver } from '../../form';
import { MPositionForm } from '../MPositionForm';

import { IMUpdatePositionModalProps, IMUpdatePositionModalRef } from './types';

export const MUpdatePositionModal = forwardRef<
  IMUpdatePositionModalRef,
  IMUpdatePositionModalProps
>(({ refetch }, ref) => {
  //#region Data
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<IUpdatePositionParams>({
    resolver: positionResolver,
    defaultValues: defaultValuesPosition,
    mode: 'all',
  });
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();
    setId('');
    setOpen(false);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        await updatePosition(id, values);
        toast.success('Cập nhật thông báo thành công!');
        refetch();
        onCancel();
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Có lỗi xảy ra!');
      }
    })();
  };
  //#endregion

  useImperativeHandle(ref, () => ({
    open: (id: string, data: IGetPositionsResponse) => {
      if (data && id) {
        reset({ ...data });
        setId(id);
      }

      setOpen(true);
    },
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
});
