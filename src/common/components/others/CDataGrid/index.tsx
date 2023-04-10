import { DataGrid } from '@mui/x-data-grid';

import { ICDataGridProps } from './types';

export const CDataGrid = ({
  rows,
  columns,
  loading,
  ...props
}: ICDataGridProps) => {
  return (
    <DataGrid
      autoHeight
      rowSelection={false}
      disableColumnMenu
      rows={rows}
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
};
