import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteParty, getParties } from '@/apis/parties.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { CPagination } from '@/others/';
import { IGetPartiesResponse } from '@/types/parties';

import { MPartiesTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Đảng bộ trưởng',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '2',
    name: 'Đoàn thanh niên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '3',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '4',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '5',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '6',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '7',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '8',
    name: 'Hội sinh viên trường',
    created_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
];
const ListPartiesPage = () => {
  //#region Data
  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    inputs: {
      search: '',
    },
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['parties', filter],
    queryFn: () => getParties(filter),
  });

  const listData = useMemo<IGetPartiesResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );

  const navigate = useNavigate();
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
        await deleteParty(id);

        refetch();

        toast.success('Xóa đảng và đoàn thể thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Xóa đảng và đoàn thể không thành công!',
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
        <Typography variant="page-title">Đảng và Đoàn thể</Typography>

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

      <Paper variant="wrapper">
        <MPartiesTable
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

export default ListPartiesPage;
