import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteInstitute, getInstitutes } from '@/apis/institutes.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetInstitutesResponse } from '@/types/institutes';

import { MInstitutesTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Tổ chức - Hành chính',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    name: 'Kế hoạch - Tài chính',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Hợp tác quốc tế',
    display: 4,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    name: 'Công tác chính trị và Học sinh sinh viên',
    display: 4,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    name: 'Đào tạo',
    display: 1,
    updated_date: new Date(),
    active: true,
  },
];

const ListInstitutesPage = () => {
  //#region Data
  const location = useLocation();
  const navigate = useNavigate();

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

  const { data, refetch } = useQuery({
    queryKey: ['institutes', filter],
    queryFn: () => getInstitutes(filter),
  });

  const listData = useMemo<IGetInstitutesResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, pages: paginate.pages, page: newPage }));

  const onEdit = (id: string) => () => navigate(`detail/${id}`);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteInstitute(id);

        refetch();

        toast.success('Xóa trung tâm thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa trung tâm không thành công!',
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
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'start', md: 'center' }}
        justifyContent="space-between"
        flex={1}
        mb={3}
      >
        <Typography variant="page-title">Phòng ban chức năng</Typography>

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
        <MInstitutesTable
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

export default ListInstitutesPage;
