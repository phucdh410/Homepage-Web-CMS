import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import {
  deleteSectionGroup,
  getSectionGroups,
} from '@/apis/section-groups.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetSectionGroupsResponse } from '@/types/section-group';

import {
  MCreateSectionGroupModal,
  MSectionGroupsTable,
  MUpdateSectionGroupModal,
} from '../../components';
import { IMCreateSectionGroupRef } from '../../components/MCreateSectionGroupModal/types';
import { IMUpdateSectionGroupRef } from '../../components/MUpdateSectionGroupModal/types';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '7',
    name: 'Khoa học xã hội',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
];

const ListSectionGroupsPage = () => {
  //#region Data
  const createRef = useRef<IMCreateSectionGroupRef | null>(null);
  const updateRef = useRef<IMUpdateSectionGroupRef | null>(null);

  const location = useLocation();

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
    queryKey: ['section-groups', filter],
    queryFn: () => getSectionGroups(filter),
  });

  const listData = useMemo<IGetSectionGroupsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string, data: IGetSectionGroupsResponse) => () =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteSectionGroup(id);

        refetch();

        toast.success('Xóa nhóm khoa thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa nhóm khoa không thành công!',
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
        <Typography variant="page-title">Nhóm khoa</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput defaultValue={filter.input} onChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => createRef.current?.open()}
          >
            Thêm mới
          </Button>
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MSectionGroupsTable
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

      <MCreateSectionGroupModal ref={createRef} />
      <MUpdateSectionGroupModal ref={updateRef} />
    </Box>
  );
  //#endregion
};

export default ListSectionGroupsPage;
