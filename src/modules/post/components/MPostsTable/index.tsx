import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetPostsResponse } from '@/types/posts';

import { IMPostsTableProps } from './types';

export const MPostsTable: React.FC<IMPostsTableProps> = ({
  data,
  onEdit,
  onDelete,
  page,
}) => {
  //#region Ref
  //#endregion

  //#region Data
  const columns: GridColDef[] = [
    {
      field: '__index',
      headerName: 'STT',
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'page',
      headerName: 'TRANG',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      valueFormatter: (
        params: GridValueFormatterParams<{ id: string; title: 'string' }>,
      ) => {
        return params.value?.title;
      },
    },
    {
      field: 'folder',
      headerName: 'DANH MỤC',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      valueFormatter: (
        params: GridValueFormatterParams<{ id: string; title: 'string' }>,
      ) => {
        return params.value?.title;
      },
    },
    {
      field: 'title',
      headerName: 'TIÊU ĐỀ',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'updated_date',
      headerName: 'NGÀY CẬP NHẬT',
      minWidth: 160,
      headerAlign: 'center',
      align: 'center',
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
      renderCell: (params: GridRenderCellParams<Boolean>) => (
        <CActiveTag value={params.value} />
      ),
    },
    {
      field: 'show_homepage',
      headerName: 'HIỂN THỊ TRANG CHỦ',
      minWidth: 230,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<Boolean>) => (
        <CActiveTag value={params.value} />
      ),
    },
    {
      field: 'action',
      headerName: 'THAO TÁC',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: GridRenderCellParams<IGetPostsResponse>) => (
        <CActionsTable
          onEdit={() => onEdit(params.row.id)}
          onDelete={() => onDelete(params.row.id)}
        />
      ),
    },
  ];
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return <CDataGrid columns={columns} rows={data} page={page} />;
  //#endregion
};
