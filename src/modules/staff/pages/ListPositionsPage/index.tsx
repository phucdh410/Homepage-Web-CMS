import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deletePosition, getPositions } from '@/apis/positions.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { CPagination } from '@/others/';
import { IGetPositionsResponse } from '@/types/position';

import { MPositionsTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Hiệu trưởng',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '2',
    name: 'Phó hiệu trưởng',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '3',
    name: 'Trưởng bộ môn',
    updated_at: new Date(),
    published: false,
  },
  {
    id: '4',
    name: 'Trưởng khoa',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '5',
    name: 'Phó trưởng khoa',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '6',
    name: 'Trưởng phòng',
    updated_at: new Date(),
    published: false,
  },
];

const ListPositionsPage = () => {
  //#region Data
  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: '',
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['positions', filter],
    queryFn: () => getPositions(filter),
  });

  const listData = useMemo<IGetPositionsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string) => () => navigate(`detail/${id}`);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deletePosition(id);

        refetch();

        toast.success('Xóa chức vụ thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa chức vụ không thành công!',
        );
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({ ...prev, input: value }));
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
        <Typography variant="page-title">Chức vụ</Typography>

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
        <MPositionsTable
          data={MOCK_DATA || listData || []}
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

export default ListPositionsPage;
