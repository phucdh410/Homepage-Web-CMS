import { useMemo } from 'react';
import { BorderColor, DeleteForever } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CActiveTag, CDataGrid } from '@/others/';

import { IMUsersTableProps } from './types';

export const MUsersTable: React.FC<IMUsersTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Data
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
      field: 'username',
      headerName: 'TÊN ĐĂNG NHẬP',
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
      valueFormatter: (params: GridValueFormatterParams<Date>) => {
        return dayjs(params.value).format('DD/MM/YYYY');
      },
    },
    {
      field: 'updated_date',
      headerName: 'NGÀY CẬP NHẬT',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueFormatter: (params: GridValueFormatterParams<Date>) => {
        return dayjs(params.value).format('DD/MM/YYYY');
      },
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
      renderCell: (params: GridRenderCellParams<String>) => (
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="warning" onClick={onEdit(params.value)}>
            <BorderColor />
          </IconButton>
          <IconButton color="secondary" onClick={onDelete(params.value)}>
            <DeleteForever />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const rows = useMemo<GridRowsProp>(
    () =>
      data?.map((e, i) => ({
        ...e,
        action: e.id,
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
