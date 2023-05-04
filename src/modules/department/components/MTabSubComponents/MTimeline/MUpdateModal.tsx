import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateTimeline } from '@/apis/timelines.api';
import { CActionsForm } from '@/controls/';
import {
  defaultValuesTimeline,
  timelineResolver,
} from '@/modules/department/form/timeline';
import { IGetTimelinesResponse } from '@/types/timelines';

import { MForm } from './MForm';

export interface IMUpdateModalRef {
  open: (id: string, data: IGetTimelinesResponse) => void;
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
      resolver: timelineResolver,
      defaultValues: defaultValuesTimeline,
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
          await updateTimeline(id, values);
          toast.success('Chỉnh sửa timeline thành công!');
          onCancel();
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message ||
              'Chỉnh sửa timeline không thành công!',
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
