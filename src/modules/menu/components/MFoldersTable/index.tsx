import { useMemo } from 'react';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { DISPLAY_LABELS } from '@/constants/enums';
import { CActionsTable, CDataGrid } from '@/others/';
import { CActiveTag } from '@/others/';
import { IGetFoldersResponse } from '@/types/folder';

import { IMFoldersTableProps } from './types';

export const MFoldersTable: React.FC<IMFoldersTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Data
  const display = (params: GridValueGetterParams<IGetFoldersResponse>) => {
    return DISPLAY_LABELS[params.row.display];
  };
  const updatedDate = (params: GridValueGetterParams<IGetFoldersResponse>) => {
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
      field: 'title',
      headerName: 'DANH MỤC',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      flex: 1,
    },
    {
      field: 'display',
      headerName: 'DẠNG HIỂN THỊ',
      minWidth: 300,
      headerAlign: 'left',
      align: 'left',
      sortable: false,
      valueGetter: display,
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
