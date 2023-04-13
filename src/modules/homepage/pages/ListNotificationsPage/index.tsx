import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteNotification, getNotifications } from '@/apis/notifications.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import {
  MNotificationModal,
  MNotificationsTable,
} from '@/modules/homepage/components';
import { CPagination } from '@/others/';
import { IGetNotificationsResponse } from '@/types/notification';

import { IMNotificationModalRef } from '../../components/MNofiticationModal/types';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: true,
  },
  {
    id: '2',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: false,
  },
  {
    id: '3',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: true,
  },
  {
    id: '4',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: true,
  },
  {
    id: '5',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: false,
  },
  {
    id: '6',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: true,
  },
  {
    id: '7',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: false,
  },
  {
    id: '8',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    updated_date: new Date(),
    created_date: new Date(),
    active: true,
  },
];
const ListNotificationsPage = () => {
  //#region Data
  const modalRef = useRef<IMNotificationModalRef | null>(null);

  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: {
      search: '',
    },
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['notifications', filter],
    queryFn: () => getNotifications(filter),
  });

  const listData = useMemo(() => data?.data?.data?.data || [], [data]);
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (data: IGetNotificationsResponse, language_id: number) => () =>
    modalRef.current?.open(data, language_id);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteNotification(id);

        refetch();

        toast.success('Xóa thông báo thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa thông báo không thành công!',
        );
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({ ...prev, page: 1, input: { search: value } }));
  //#endregion

  useEffect(() => {
    setPaginate({
      page: data?.data?.data?.page || 1,
      pages: data?.data?.data?.pages || 0,
    });
  }, [data]);

  //#region Render
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'start', md: 'center' }}
        justifyContent="space-between"
        flex={1}
        mb={3}
      >
        <Typography variant="page-title">Thông báo</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => modalRef.current?.open()}
          >
            Thêm mới
          </Button>
        </Stack>
      </Stack>

      <Paper className="wrapper">
        <MNotificationsTable
          data={MOCK_DATA || listData || []}
          onEdit={onEdit}
          onDelete={onDelete}
          page={paginate.page}
        />
      </Paper>

      <CPagination
        page={paginate.page}
        pages={paginate.pages}
        onChange={onPageChange}
      />

      <MNotificationModal ref={modalRef} />
    </Box>
  );
  //#endregion
};

export default ListNotificationsPage;
