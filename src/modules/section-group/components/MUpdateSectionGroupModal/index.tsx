import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateSectionGroup } from '@/apis/section-groups.api';
import { CActionsForm } from '@/controls/';
import { IUpdateSectionGroupParams } from '@/types/section-groups';

import { defaultValues, sectionGroupResolver } from '../../form';
import { MSectionGroupForm } from '..';

import { IMUpdateSectionGroupProps, IMUpdateSectionGroupRef } from './types';

export const MUpdateSectionGroupModal = forwardRef<
  IMUpdateSectionGroupRef,
  IMUpdateSectionGroupProps
>(({ refetch }, ref) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUpdateSectionGroupParams>({
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
        await updateSectionGroup(id, values);
        toast.success('Chỉnh sửa nhóm khoa thành công!');
        refetch();
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.repsonse?.data?.message ||
            'Chỉnh sửa nhóm khoa không thành công!',
        );
      }
    })();
  };
  //#endregion

  useImperativeHandle(ref, () => ({
    open: (id, data) => {
      if (id && data) {
        setId(id);
        reset(data);
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
          <MSectionGroupForm control={control} />

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
});
