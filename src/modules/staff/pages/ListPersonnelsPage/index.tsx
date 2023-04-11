import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deletePersonnel, getPersonnels } from '@/apis/personnels.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { CPagination } from '@/others/';
import { IGetPersonnelsResponse } from '@/types/personnel';

import { MPersonnelsTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '2',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '3',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: false,
  },
  {
    id: '4',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '5',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: true,
  },
  {
    id: '6',
    name: 'Nguyễn Văn AAAAAA AAA AAA',
    degree: 'Tiến sĩ',
    updated_at: new Date(),
    published: false,
  },
];

const ListPersonnelsPage = () => {
  //#region Data
  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: '',
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['personnels', filter],
    queryFn: () => getPersonnels(filter),
  });

  const listData = useMemo<IGetPersonnelsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string, language_id: number) => () =>
    navigate(`detail/${id}/?language_id=${language_id}`);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deletePersonnel(id);

        refetch();

        toast.success('Xóa nhân sự thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa nhân sự không thành công!',
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
        <Typography variant="page-title">Nhân sự</Typography>

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
        <MPersonnelsTable
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

export default ListPersonnelsPage;
