import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  deleteNotification,
  getNotifications,
  updateNotification,
} from '@apis/notifications.api';
import { confirm } from '@confirm';
import { CSearchInput } from '@controls';
import { cleanObjValue } from '@func';
import { MNotificationRow } from '@modules/homepage/components';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { CPagination, CTable } from '@others';
import { useQuery } from '@tanstack/react-query';

const headers = [
  { name: 'STT', align: 'center' },
  { name: 'TIÊU ĐỀ', align: 'left' },
  { name: 'NGÀY BẮT ĐẦU', align: 'center' },
  { name: 'NGÀY KẾT THÚC', align: 'center' },
  { name: 'HIỂN THỊ', align: 'center' },
  { name: 'THAO TÁC', align: 'center' },
];
const ListNotificationsPage = () => {
  //#region Data
  const modalRef = useRef();

  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: '',
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const _filter = cleanObjValue(filter);

  const { data, refetch } = useQuery({
    queryKey: ['notifications', _filter],
    queryFn: () => getNotifications(_filter),
  });

  const listData = useMemo(() => data?.data?.data || [], [data]);
  //#endregion

  //#region Event
  const onPageChange = (event, newPage) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onStatusChange = (id, data) => async (e) => {
    try {
      await updateNotification(id, {
        ...data,
        language_id: 1,
        published: e.target.checked,
      });

      refetch();

      toast.success('Điều chỉnh hiển thị thành công!');
    } catch (error) {
      toast.error(error?.message || 'Điều chỉnh hiển thị không thành công!');
    }
  };

  const onEdit = (data, language_id) => () =>
    modalRef.current.open(data, language_id);

  const onDelete = (id) => async () => {
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
      } catch (error) {
        toast.error(error?.message || 'Xóa thông báo không thành công!');
      }
    }
  };

  const onSearch = (value) => setFilter((prev) => ({ ...prev, input: value }));
  //#endregion

  useEffect(() => {
    setPaginate({
      page: data?.data?.page || 1,
      pages: data?.data?.pages || 0,
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
          <CSearchInput onInputChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => modalRef.current.open()}
          >
            Thêm mới
          </Button>
        </Stack>
      </Stack>

      <Paper className="wrapper">
        <CTable
          headers={headers}
          body={listData}
          RowComponent={MNotificationRow}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Paper>

      <CPagination
        page={paginate.page}
        pages={paginate.pages}
        onChange={onPageChange}
      />
    </Box>
  );
  //#endregion
};

export default ListNotificationsPage;
