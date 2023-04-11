import { useMemo } from 'react';
import { BorderColor, DeleteForever } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CSwitch } from '@/controls/';
import { CDataGrid } from '@/others/';
import { IUsersDataTable } from '@/types/user';

import { IMUsersTableProps } from './types';

export const MUsersTable: React.FC<IMUsersTableProps> = ({
  data,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  //#region Data

  const createdDate = (params: GridValueGetterParams<IUsersDataTable>) => {
    return dayjs(params.row.created_at);
  };
  const updatedDate = (params: GridValueGetterParams<IUsersDataTable>) => {
    return dayjs(
      params.row?.updated_at ? params.row.updated_at : params.row.created_at,
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'col1',
      headerName: 'STT',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
    },
    {
      field: 'col2',
      headerName: 'TÊN ĐĂNG NHẬP',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      flex: 1,
    },
    {
      field: 'col3',
      headerName: 'NGÀY TẠO',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: createdDate,
    },
    {
      field: 'col4',
      headerName: 'NGÀY CẬP NHẬT',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: updatedDate,
    },
    {
      field: 'col5',
      headerName: 'TRẠNG THÁI',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params: GridRenderCellParams<IUsersDataTable>) => (
        <CSwitch
          value={params.value?.active}
          onChange={onStatusChange(params.value?.id)}
        />
      ),
    },
    {
      field: 'col6',
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
        id: e.id,
        col1: i + 1,
        col2: e.username,
        col3: e.created_at,
        col4: e.updated_at,
        col5: e,
        col6: e.id,
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
