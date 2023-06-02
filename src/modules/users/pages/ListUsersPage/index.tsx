import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteUser, getUsers } from '@/apis/users.api';
import { confirm } from '@/confirm/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { MUsersTable } from '@/modules/users/components';
import { CPageHeader, CPagination } from '@/others/';
import { IUsersDataTable } from '@/types/user';

const ListUsersPage = () => {
  //#region Data
  const navigate = useNavigate();
  const location = useLocation();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [filter, setFilter] = useState(
    params || {
      page: 1,
      pages: 0,
      inputs: {
        search: '',
      },
    },
  );

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['users', filter],
    queryFn: () => getUsers(filter),
  });

  const listData = useMemo<IUsersDataTable[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, pages: paginate.pages, page: newPage }));

  const onEdit = (id: string) => navigate(`detail/${id}`);

  const onDelete = async (id: string) => {
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
    setFilter((prev) => ({ ...prev, page: 1, inputs: { search: value } }));
  //#endregion

  useEffect(() => {
    setPaginate({
      page: data?.data?.data?.page || 1,
      pages: data?.data?.data?.pages || 0,
    });
  }, [data]);

  useEffect(() => {
    navigateWithNewQuery(filter);
  }, [filter]);

  //#region Render
  return (
    <Box>
      <CPageHeader
        title="Quản lý người dùng"
        onSearch={onSearch}
        onAdd={() => navigate('/detail')}
      />

      <Paper variant="wrapper">
        <MUsersTable
          data={listData || []}
          onEdit={onEdit}
          onDelete={onDelete}
          page={paginate.page}
          loading={isFetching}
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
