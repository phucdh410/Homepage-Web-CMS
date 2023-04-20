import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getDetailParty, updateParty } from '@/apis/parties.api';
import { CActionsForm } from '@/controls/';
import { IUpdatePartyParams } from '@/types/parties';

import { MPartyForm } from '../../components';
import { defaultValuesParty, partyResolver } from '../../form';

const UpdatePartyPage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isError } = useQuery(
    ['party', id],
    () => getDetailParty(id as string),
    {
      enabled: !!id,
    },
  );

  if (error || isError)
    toast.error((error as any)?.response?.data?.message || 'Có lỗi xảy ra!');

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUpdatePartyParams>({
    mode: 'all',
    resolver: partyResolver,
    defaultValues: data?.data?.data || defaultValuesParty,
  });
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();
    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
        await updateParty(id as string, values);
        toast.success('Chỉnh sửa Đảng và Đoàn thể thành công!');
        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Chỉnh sửa Đảng và Đoàn thể không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Chỉnh sửa</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPartyForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </form>
      </Paper>
    </>
  );
  //#endregion
};

export default UpdatePartyPage;
