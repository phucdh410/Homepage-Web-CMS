import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteLanguage, getLanguages } from '@/apis/languages.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IGetLanguagesResponse } from '@/types/language';

import {
  MCreateLanguageModal,
  MLanguagesTable,
  MUpdateLanguageModal,
} from '../../components';
import { IMCreateLanguageModalRef } from '../../components/MCreateLanguageModal/types';
import { IMUpdateLanguageModalRef } from '../../components/MUpdateLanguageModal/types';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Tiếng Việt',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '2',
    title: 'Tiếng Anh',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    title: 'Tiếng Thái',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    title: 'Tiếng Nhật',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    title: 'Tiếng Hàn',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '6',
    title: 'Tiếng Trung',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
  {
    id: '7',
    title: 'Tiếng Pháp',
    created_date: new Date(),
    updated_date: new Date(),
    active: true,
  },
  {
    id: '8',
    title: 'Tiếng lòng....mẹ bao la như biển thái bình',
    created_date: new Date(),
    updated_date: new Date(),
    active: false,
  },
];

const ListLanguagesPage = () => {
  //#region Data
  const location = useLocation();

  const { navigateWithNewQuery } = useNavigateQuery();
  const params = useRevertQuery(location.search);

  const createModalRef = useRef<IMCreateLanguageModalRef | null>(null);
  const updateModalRef = useRef<IMUpdateLanguageModalRef | null>(null);

  const [filter, setFilter] = useState(
    params || {
      page: 1,
      pages: 0,
      input: '',
    },
  );

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data, refetch } = useQuery({
    queryKey: ['languages', filter],
    queryFn: () => getLanguages(filter),
  });

  const listData = useMemo<IGetLanguagesResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
  //#endregion

  //#region Event
  const onPageChange = (event: any, newPage: number) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onEdit = (id: string, data: IGetLanguagesResponse) => () =>
    updateModalRef.current?.open(id, data);

  const onDelete = (id: string) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteLanguage(id);

        refetch();

        toast.success('Xóa ngôn ngữ thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa ngôn ngữ không thành công!',
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
        <Typography variant="page-title">Ngôn ngữ</Typography>

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
        <MLanguagesTable
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

      <MCreateLanguageModal ref={createModalRef} />
      <MUpdateLanguageModal ref={updateModalRef} />
    </Box>
  );
  //#endregion
};

export default ListLanguagesPage;
