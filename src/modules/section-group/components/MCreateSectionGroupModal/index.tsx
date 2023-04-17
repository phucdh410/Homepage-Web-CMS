import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { createSectionGroup } from '@/apis/section-group.api';
import { CActionsForm } from '@/controls/';
import { ICreateSectionGroupParams } from '@/types/section-group';

import { defaultValues, sectionGroupResolver } from '../../form';
import { MSectionGroupForm } from '..';

import { IMCreateSectionGroupRef } from './types';

export const MCreateSectionGroupModal = forwardRef<
  IMCreateSectionGroupRef,
  any
>(({ ...props }, ref) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<ICreateSectionGroupParams>({
    mode: 'all',
    resolver: sectionGroupResolver,
    defaultValues: defaultValues,
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
        await createSectionGroup(values);
        toast.success('Thêm mới nhóm khoa thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.repsonse?.data?.message ||
            'Thêm mới nhóm khoa không thành công!',
        );
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
          <MSectionGroupForm control={control} />

          <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
        </form>
      </Box>
    </Dialog>
  );
  //#endregion
});
