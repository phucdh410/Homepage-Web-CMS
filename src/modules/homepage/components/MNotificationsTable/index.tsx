import { useMemo } from 'react';
import { Delete, Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CDataGrid } from '@/others/';
import { IGetNotificationsResponse } from '@/types/notification';

import { IMNotificationsTableProps } from './types';

export const MNotificationsTable: React.FC<IMNotificationsTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  //#region Data
  const createdDate = (
    params: GridValueGetterParams<IGetNotificationsResponse>,
  ) => {
    return dayjs(params.row.created_at);
  };
  const updatedDate = (
    params: GridValueGetterParams<IGetNotificationsResponse>,
  ) => {
    return dayjs(
      params.row?.updated_at ? params.row.updated_at : params.row.created_at,
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'index',
      headerName: 'STT',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
    },
    {
      field: 'title',
      headerName: 'TIÊU ĐỀ',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      flex: 1,
    },
    {
      field: 'created_at',
      headerName: 'NGÀY TẠO',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: createdDate,
    },
    {
      field: 'updated_at',
      headerName: 'NGÀY CẬP NHẬT',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: updatedDate,
    },
    {
      field: 'published',
      headerName: 'TRẠNG THÁI',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params: GridRenderCellParams<Boolean>) =>
        params.value ? <Visibility /> : <VisibilityOff />,
    },
    {
      field: 'action',
      headerName: 'THAO TÁC',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params: GridRenderCellParams<IGetNotificationsResponse>) => (
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="warning" onClick={onEdit(params.value, 1)}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={onDelete(params.value)}>
            <Delete />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const rows = useMemo<GridRowsProp>(
    () =>
      data?.map((e, i) => ({
        ...e,
        index: i + 1,
        id: e.id,
        action: e,
      })),
    [data],
  );
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return <CDataGrid columns={columns} rows={rows} />;
  //#endregion
};
