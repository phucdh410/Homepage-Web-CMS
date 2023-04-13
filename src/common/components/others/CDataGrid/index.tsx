import { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { ICDataGridProps } from './types';

export const CDataGrid = ({
  rows,
  columns,
  loading,
  page = 1,
  pageSize = 10,
  ...props
}: ICDataGridProps) => {
  //#region Data
  const _rows = useMemo(() => {
    return rows.map((e, i) => ({
      ...e,
      __index: (page - 1) * pageSize + (i + 1),
    }));
  }, [rows]);
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <DataGrid
      autoHeight
      rowSelection={false}
      disableColumnMenu
      rows={_rows}
      columns={columns}
      hideFooter
      disableVirtualization
      localeText={{
        noRowsLabel: 'Không có dữ liệu hiển thị !',
        noResultsOverlayLabel: 'Không có dữ liệu hiển thị !',
      }}
      // getRowHeight={() => 'auto'}
      {...props}
    />
  );
  //#endregion
};
