import { useRef } from 'react';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { deleteTimeline } from '@/apis/timelines.api';
import { confirm } from '@/confirm/';
import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetTimelinesResponse } from '@/types/timeline';

import { IMCreateModalRef, MCreateModal } from './MCreateModal';
import { IMUpdateModalRef, MUpdateModal } from './MUpdateModal';
import { IMTimelineProps } from './types';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '2',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2023,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2023,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    title: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    from: 2013,
    to: 2023,
    updated_date: new Date(),
    active: true,
  },
];

export const MTimeline: React.FC<IMTimelineProps> = ({ control }) => {
  //#region Ref
  const createRef = useRef<IMCreateModalRef | null>(null);
  const updateRef = useRef<IMUpdateModalRef | null>(null);

  const onEdit = (id: string, data: IGetTimelinesResponse) =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteTimeline(id);

        toast.success('Xóa timeline thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa timeline không thành công!',
        );
      }
    }
  };

  //#endregion

  //#region Data
  const columns: GridColDef[] = [
    {
      field: '__index',
      headerName: 'STT',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'time',
      headerName: 'MỐC THỜI GIAN',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      valueGetter: (params: GridValueGetterParams<IGetTimelinesResponse>) => {
        return `${params.row.from} - ${
          params.row.to === new Date().getFullYear() ? 'NAY' : params.row.to
        }`;
      },
    },
    {
      field: 'title',
      headerName: 'TÊN KHOA',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'updated_date',
      headerName: 'NGÀY CẬP NHẬT',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      valueFormatter: (params: GridValueFormatterParams<Date>) => {
        return dayjs(params.value).format('DD/MM/YYYY');
      },
    },
    {
      field: 'active',
      headerName: 'TRẠNG THÁI',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      renderCell: (params: GridRenderCellParams<Boolean>) => {
        return <CActiveTag value={params.value} />;
      },
    },
    {
      field: 'actions',
      headerName: 'THAO TÁC',
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<IGetTimelinesResponse>) => {
        return (
          <CActionsTable
            onEdit={() => onEdit(params.row.id, params.row)}
            onDelete={() => onDelete(params.row.id)}
          />
        );
      },
    },
  ];

  const rows = [...MOCK_DATA];
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <CDataGrid columns={columns} rows={rows} page={1} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          marginTop: '1rem',
        }}
      >
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddCircleOutline />}
          sx={{ borderRadius: '10px', fontSize: '16px' }}
          onClick={() => createRef.current?.open()}
        >
          THÊM MỚI
        </Button>
      </div>

      <MCreateModal ref={createRef} />
      <MUpdateModal ref={updateRef} />
    </>
  );
  //#endregion
};
