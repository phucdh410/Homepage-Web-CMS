import { useMemo } from 'react';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetLanguagesResponse } from '@/types/language';

import { IMLanguagesTableProps } from './types';

export const MLanguagesTable: React.FC<IMLanguagesTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Data
  const createdDate = (
    params: GridValueGetterParams<IGetLanguagesResponse>,
  ) => {
    return dayjs(params.row.created_date).format('DD/MM/YYYY');
  };
  const updatedDate = (
    params: GridValueGetterParams<IGetLanguagesResponse>,
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
      field: 'name',
      headerName: 'TÊN NGÔN NGỮ',
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
      renderCell: (params: GridRenderCellParams<IGetLanguagesResponse>) => (
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
