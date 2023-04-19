import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteMenu, getMenus } from '@/apis/menus.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetMenusResponse } from '@/types/menus';

import { MMenusTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 2,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 2,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '6',
    title: 'Giới thiệu, Tin tức - Sự kiện',
    display: 1,
    updated_date: new Date(),
    active: false,
  },
];

const ListMenusPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const [filter, setFilter] = useState(
    params || {
      page: 1,
      pages: 0,
      input: {
        search: '',
      },
    },
  );

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['menus', filter],
    queryFn: () => getMenus(filter),
  });

  const listData = useMemo<IGetMenusResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string) => navigate(`detail/${id}`);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteMenu(id);

        refetch();

        toast.success('Xóa menu thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa menu không thành công!',
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

  useEffect(() => {
    navigateWithNewQuery(filter);
  }, [filter]);

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
        <Typography variant="page-title">Menu</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter.input} onChange={onSearch} />
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

      <Paper variant="wrapper">
        <MMenusTable
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
    </Box>
  );
  //#endregion
};

export default ListMenusPage;
