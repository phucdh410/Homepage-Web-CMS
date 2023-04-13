import { useMemo } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CActiveTag, CDataGrid } from '@/others/';
import { IGetNotificationsResponse } from '@/types/notification';

import { IMNotificationsTableProps } from './types';

export const MNotificationsTable: React.FC<IMNotificationsTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Data
  const createdDate = (
    params: GridValueGetterParams<IGetNotificationsResponse>,
  ) => {
    return dayjs(params.row.created_date).format('DD/MM/YYYY');
  };
  const updatedDate = (
    params: GridValueGetterParams<IGetNotificationsResponse>,
  ) => {
    return dayjs(
      params.row?.updated_date
        ? params.row.updated_date
        : params.row.created_date,
    ).format('DD/MM/YYYY');
  };

  const columns: GridColDef[] = [
    {
      field: '__index',
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
      field: 'created_date',
      headerName: 'NGÀY TẠO',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: createdDate,
    },
    {
      field: 'updated_date',
      headerName: 'NGÀY CẬP NHẬT',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: updatedDate,
    },
    {
      field: 'active',
      headerName: 'TRẠNG THÁI',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params: GridRenderCellParams<Boolean>) => (
        <CActiveTag value={params.value} />
      ),
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
          <IconButton color="secondary" onClick={onDelete(params.value?.id)}>
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
        action: e,
      })),
    [data],
  );
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return <CDataGrid columns={columns} rows={rows} page={page} />;
  //#endregion
};
