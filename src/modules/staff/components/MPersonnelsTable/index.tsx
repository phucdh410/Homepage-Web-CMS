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

import { CDataGrid } from '@/others/';
import { CActiveTag } from '@/others/';
import { IGetPersonnelsResponse } from '@/types/personnel';

import { IMPersonnelsTableProps } from './types';

export const MPersonnelsTable: React.FC<IMPersonnelsTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  //#region Data
  const updatedDate = (
    params: GridValueGetterParams<IGetPersonnelsResponse>,
  ) => {
    return dayjs(params.row?.updated_at).format('DD/MM/YYYY');
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
      field: 'name',
      headerName: 'HỌ VÀ TÊN',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      flex: 1,
    },
    {
      field: 'degree',
      headerName: 'HỌC VỊ',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
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
      headerName: 'HIỂN THỊ',
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
          <IconButton color="warning" onClick={onEdit(params.value, 1)}>
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
        index: i + 1,
        id: e.id,
        action: e.id,
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
