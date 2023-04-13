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
import { IGetPositionsResponse } from '@/types/position';

import { IMPositionsTableProps } from './types';

export const MPositionsTable: React.FC<IMPositionsTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Data
  const updatedDate = (
    params: GridValueGetterParams<IGetPositionsResponse>,
  ) => {
    return dayjs(params.row?.updated_date).format('DD/MM/YYYY');
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
      field: 'name',
      headerName: 'TÊN CHỨC VỤ',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      flex: 1,
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
          onEdit={onEdit(params.value?.id, params.value)}
          onDelete={onDelete(params.value?.id)}
        />
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
