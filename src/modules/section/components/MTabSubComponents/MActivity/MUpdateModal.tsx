import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateActivity } from '@/apis/activities.api';
import { CActionsForm } from '@/controls/';
import {
  activityResolver,
  defaultValuesActivity,
} from '@/modules/section/form/activity';
import { IGetActivitiesResponse } from '@/types/activities';

import { MForm } from './MForm';

export interface IMUpdateModalRef {
  open: (id: string, data: IGetActivitiesResponse) => void;
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
      formState: { isSubmitting },
    } = useForm({
      mode: 'all',
      resolver: activityResolver,
      defaultValues: defaultValuesActivity,
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
          await updateActivity(id, values);
          toast.success('Chỉnh sửa activity thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Chỉnh sửa activity không thành công!',
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
            />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
