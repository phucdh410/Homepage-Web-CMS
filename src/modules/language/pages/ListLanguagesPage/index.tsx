import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { deleteLanguage, getLanguages } from '@/apis/language.api';
import { confirm } from '@/confirm/';
import { CSearchInput } from '@/controls/';
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
    created_at: new Date(),
    updated_at: new Date(),
    published: true,
  },
  {
    id: '2',
    title: 'Tiếng Anh',
    created_at: new Date(),
    updated_at: new Date(),
    published: true,
  },
  {
    id: '3',
    title: 'Tiếng Thái',
    created_at: new Date(),
    updated_at: new Date(),
    published: false,
  },
  {
    id: '4',
    title: 'Tiếng Nhật',
    created_at: new Date(),
    updated_at: new Date(),
    published: false,
  },
];

const ListLanguagesPage = () => {
  //#region Data
  const createModalRef = useRef<IMCreateLanguageModalRef | null>(null);
  const updateModalRef = useRef<IMUpdateLanguageModalRef | null>(null);

  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: '',
  });

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
          <CSearchInput onChange={onSearch} />
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
