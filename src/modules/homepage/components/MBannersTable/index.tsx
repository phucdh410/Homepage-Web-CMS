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
import { IGetBannersResponse } from '@/types/banner';

import { IMBannersTableProps } from './types';

export const MBannersTable: React.FC<IMBannersTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  //#region Data
  const displayTime = (params: GridValueGetterParams<IGetBannersResponse>) => {
    return `${dayjs(params.row?.start_date)} - ${dayjs(params.row?.end_date)}`;
  };

  const updatedDate = (params: GridValueGetterParams<IGetBannersResponse>) => {
    return dayjs(params.row.updated_date);
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
      field: 'time',
      headerName: 'THỜI GIAN HIỂN THỊ',
      minWidth: 250,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: displayTime,
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
      renderCell: (params: GridRenderCellParams<String>) => (
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
