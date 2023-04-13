import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteSchedule, getSchedules } from '@/apis/schedules.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetSchedulesResponse } from '@/types/schedule';

import { MSchedulesTable } from '../../components';

const MOCK_DATA = [
  {
    id: '1',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: true,
  },
  {
    id: '2',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: true,
  },
  {
    id: '3',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: false,
  },
  {
    id: '4',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: true,
  },
  {
    id: '5',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: true,
  },
  {
    id: '6',
    title:
      'Hội nghị triển khai công tác quy hoạch cán bộ công đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh nhiệm kỳ 2023 - 2028',
    date: new Date(),
    active: false,
  },
];

const ListSchedulesPage = () => {
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
    queryKey: ['schedules', filter],
    queryFn: () => getSchedules(filter),
  });

  const listData = useMemo<IGetSchedulesResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
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
        await deleteSchedule(id);

        refetch();

        toast.success('Xóa lịch công tác thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Xóa lịch công tác không thành công!',
        );
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({ ...prev, page: 1, input: value }));
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
        <Typography variant="page-title">Lịch công tác</Typography>

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

      <Paper className="wrapper">
        <MSchedulesTable
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

export default ListSchedulesPage;
