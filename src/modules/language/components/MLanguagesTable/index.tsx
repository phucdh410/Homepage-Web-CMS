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
import { IGetLanguagesResponse } from '@/types/language';

import { IMLanguagesTableProps } from './types';

export const MLanguagesTable: React.FC<IMLanguagesTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  //#region Data
  const createdDate = (
    params: GridValueGetterParams<IGetLanguagesResponse>,
  ) => {
    return dayjs(params.row.created_at).format('DD/MM/YYYY');
  };
  const updatedDate = (
    params: GridValueGetterParams<IGetLanguagesResponse>,
  ) => {
    return dayjs(
      params.row?.updated_at ? params.row.updated_at : params.row.created_at,
    ).format('DD/MM/YYYY');
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
      headerName: 'TÊN NGÔN NGỮ',
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
        params.value ? (
          <Visibility sx={{ color: '#346FA5' }} />
        ) : (
          <VisibilityOff sx={{ color: '#CF373D' }} />
        ),
    },
    {
      field: 'action',
      headerName: 'THAO TÁC',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params: GridRenderCellParams<IGetLanguagesResponse>) => (
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton
            color="warning"
            onClick={onEdit(params.value?.id, params.value)}
          >
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
