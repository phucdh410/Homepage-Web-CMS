import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteUser, getUsers, updateUserStatus } from '@/apis/users.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { MUsersTable } from '@/modules/users/components';
import { CPagination } from '@/others/';
import { IUsersDataTable } from '@/types/user';

const MOCK_DATA = [
  {
    id: '1',
    username: 'Abc123455',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    username: 'Abc123455',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    username: 'Abc123455',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    username: 'Abc123455',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '5',
    username: 'Abc123455',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
];

const ListUsersPage = () => {
  //#region Data
  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: {
      search: '',
    },
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['users', filter],
    queryFn: () => getUsers(filter),
  });

  const listData = useMemo<IUsersDataTable[]>(
    () => data?.data?.data?.data || [],
    [data],
  );

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onStatusChange = (id: string) => async () => {
    try {
      await updateUserStatus(id);

      refetch();

      toast.success('Điều chỉnh trạng thái thành công!');
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          'Điều chỉnh trạng thái không thành công!',
      );
    }
  };

  const onEdit = (id: string) => () => navigate(`detail/${id}`);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteUser(id);

        refetch();

        toast.success('Xóa người dùng thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa người dùng không thành công!',
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
        <Typography variant="page-title">Quản lý người dùng</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => navigate('detail')}
          >
            Thêm mới
          </Button>
        </Stack>
      </Stack>

      <Paper className="wrapper">
        <MUsersTable
          data={MOCK_DATA || listData || []}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          page={paginate.page}
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

export default ListUsersPage;
