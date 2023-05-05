import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getAllPages } from '@/apis/pages.api';
import { deleteBlog, getPosts } from '@/apis/posts.api';
import { confirm } from '@/confirm/';
import {
  CAutocomplete,
  CCollapseSelect,
  CFormLabel,
  CSearchInput,
} from '@/controls/';
import { useNavigateQuery, useRevertQuery } from '@/hooks/';
import { CPagination } from '@/others/';
import { IOption } from '@/types/options';
import { IGetPostsResponse } from '@/types/posts';

import { MPostsTable } from '../../components';

const ListPostsPage = () => {
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
        page_id: '',
        folder_id: '',
      },
    },
  );

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const { data: pageResponse } = useQuery(['pages'], () => getAllPages());

  const pages = useMemo<IOption[]>(
    () =>
      pageResponse?.data?.data?.map((e) => ({
        id: e.id,
        value: e.id,
        label: e.title,
      })) || [],
    [pageResponse],
  );

  const { data, refetch } = useQuery({
    queryKey: ['posts', filter],
    queryFn: () => getPosts(filter),
  });

  const listData = useMemo<IGetPostsResponse[]>(
    () => data?.data?.data?.data || [],
    [data],
  );
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
        await deleteBlog(id);

        refetch();

        toast.success('Xóa nội dung thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa nội dung không thành công!',
        );
      }
    }
  };

  const onSearch = (value: string) =>
    setFilter((prev) => ({ ...prev, page: 1, inputs: { search: value } }));

  const onFilterPage = (value: string) =>
    setFilter((prev) => ({
      ...prev,
      page: 1,
      input: { ...prev.input, page_id: value },
    }));

  const onFilterFolder = (value: string) =>
    setFilter((prev) => ({
      ...prev,
      page: 1,
      input: { ...prev.input, folder_id: value },
    }));
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
        <Typography variant="page-title">Quản lý nội dung</Typography>

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

      <Stack direction="row" spacing={3} mb={2}>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Trang" />
          <CAutocomplete
            disableClearable={false}
            value={filter.input?.page_id}
            onChange={onFilterPage}
            placeholder="Tất cả"
            options={pages}
            renderOption={(props, option) => (
              <div key={option.id} {...props}>
                {option.label}
              </div>
            )}
          />
        </Stack>
        <Stack direction="column" spacing={1} flex={1}>
          <CFormLabel label="Danh mục" />
          <CCollapseSelect
            value={filter.input?.folder_id}
            onChange={onFilterFolder}
            placeholder="Tất cả"
          />
        </Stack>
      </Stack>

      <Paper variant="wrapper">
        <MPostsTable
          data={listData || []}
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

export default ListPostsPage;
