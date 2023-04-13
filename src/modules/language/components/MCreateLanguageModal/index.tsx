import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Box, Dialog } from '@mui/material';

import { createLanguage } from '@/apis/languages.api';
import { CActionsForm } from '@/controls/';
import { ICreateLanguageParams } from '@/types/language';

import { defaultValuesLanguage, languageResolver } from '../../form';
import { MLanguageForm } from '../MLanguageForm';

import { IMCreateLanguageModalRef } from './types';

export const MCreateLanguageModal = forwardRef<IMCreateLanguageModalRef, any>(
  ({ ...props }, ref) => {
    //#region Data
    const [open, setOpen] = useState(false);

    const { control, handleSubmit, reset } = useForm<ICreateLanguageParams>({
      resolver: languageResolver,
      defaultValues: defaultValuesLanguage,
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
          const res = await createLanguage(values);
          toast.success('Tạo mới ngôn ngữ thành công!');
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
            <MLanguageForm control={control} />

            <CActionsForm onCancel={onCancel} onSubmit={onSubmit} />
          </form>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
