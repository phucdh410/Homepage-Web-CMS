import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { updateLanguage } from '@/apis/language.api';
import { CActionsForm } from '@/controls/';
import { IGetLanguagesResponse, IUpdateLanguageParams } from '@/types/language';

import { defaultValuesLanguage, languageResolver } from '../../form';
import { MLanguageForm } from '../MLanguageForm';

import { IMUpdateLanguageModalRef } from './types';

export const MUpdateLanguageModal = forwardRef<IMUpdateLanguageModalRef, any>(
  ({ ...props }, ref) => {
    //#region Data
    const [open, setOpen] = useState(false);
    const [id, setId] = useState<string>('');

    const { control, handleSubmit, reset } = useForm<IUpdateLanguageParams>({
      resolver: languageResolver,
      defaultValues: defaultValuesLanguage,
      mode: 'all',
      shouldFocusError: true,
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
          const res = await updateLanguage(id, values);
          toast.success('Cập nhật thông báo thành công!');
        } catch (error: any) {
          toast.error(error?.response?.data?.message || 'Có lỗi xảy ra!');
        }
      })();
    };
    //#endregion

    useImperativeHandle(ref, () => ({
      open: (id: string, data: IGetLanguagesResponse) => {
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
            <MLanguageForm control={control} />

            <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);