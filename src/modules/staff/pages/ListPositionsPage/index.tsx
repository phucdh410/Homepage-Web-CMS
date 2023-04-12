import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deletePosition, getPositions } from '@/apis/positions.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetPositionsResponse } from '@/types/position';

import {
  MCreatePositionModal,
  MPositionsTable,
  MUpdatePositionModal,
} from '../../components';
import { IMCreatePositionModalRef } from '../../components/MCreatePositionModal/types';
import { IMUpdatePositionModalRef } from '../../components/MUpdateLanguageModal/types';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Hiệu trưởng',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    name: 'Phó hiệu trưởng',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Trưởng bộ môn',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    name: 'Trưởng khoa',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    name: 'Phó trưởng khoa',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '6',
    name: 'Trưởng phòng',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
];

const ListPositionsPage = () => {
  //#region Data
  const location = useLocation();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const createModalRef = useRef<IMCreatePositionModalRef | null>(null);
  const updateModalRef = useRef<IMUpdatePositionModalRef | null>(null);

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
    queryKey: ['positions', filter],
    queryFn: () => getPositions(filter),
  });

  const listData = useMemo<IGetPositionsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string, data: IGetPositionsResponse) => () =>
    updateModalRef.current?.open(id, data);

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
        <Typography variant="page-title">Chức vụ</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter.input} onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => createModalRef.current?.open()}
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

      <MCreatePositionModal ref={createModalRef} />
      <MUpdatePositionModal ref={updateModalRef} />
    </Box>
  );
  //#endregion
};

export default ListPositionsPage;
