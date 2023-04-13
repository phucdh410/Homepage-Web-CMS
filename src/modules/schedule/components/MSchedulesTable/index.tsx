import { useMemo } from 'react';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CActionsTable, CDataGrid } from '@/others/';
import { CActiveTag } from '@/others/';
import { IGetSchedulesResponse } from '@/types/schedule';

import { IMSchedulesTableProps } from './types';

export const MSchedulesTable: React.FC<IMSchedulesTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  const _date = (params: GridValueGetterParams<IGetSchedulesResponse>) => {
    return dayjs(params.row?.date).format('DD/MM/YYYY');
  };
  const _time = (params: GridValueGetterParams<IGetSchedulesResponse>) => {
    return dayjs(params.row?.date).format('HH:mm');
  };

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
      field: 'day',
      headerName: 'NGÀY DIỄN RA',
      minWidth: 200,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: _date,
    },
    {
      field: 'time',
      headerName: 'GIỜ',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      valueGetter: _time,
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
      field: 'active',
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
        <CActionsTable
          onEdit={onEdit(params.value)}
          onDelete={onDelete(params.value)}
        />
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
