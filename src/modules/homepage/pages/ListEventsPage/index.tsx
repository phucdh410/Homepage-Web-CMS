import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteEvent, getEvents } from '@/apis/events.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { MEventsTable } from '@/modules/homepage/components';
import { CPagination } from '@/others/';
import { IGetEventsResponse } from '@/types/event';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '2',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '3',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '4',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '5',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '6',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
  {
    id: '7',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: false,
  },
  {
    id: '8',
    title: 'Ra mắt “Cổng thông tin điện tử sinh viên HCMUE”',
    start_date: new Date(),
    end_date: new Date(),
    updated_date: new Date(),
    file_id: 'asd',
    active: true,
  },
];
const ListEventsPage = () => {
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
    queryKey: ['events', filter],
    queryFn: () => getEvents(filter),
  });

  const listData = useMemo<IGetEventsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );

  const navigate = useNavigate();
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
        await deleteEvent(id);

        refetch();

        toast.success('Xóa sự kiện thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa sự kiện không thành công!',
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
        <Typography variant="page-title">Sự kiện trong tháng</Typography>

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
        <MEventsTable
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

export default ListEventsPage;
