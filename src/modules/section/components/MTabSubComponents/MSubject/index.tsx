import { useRef } from 'react';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { deleteSubject } from '@/apis/subjects.api';
import { confirm } from '@/confirm/';
import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetSubjectsResponse } from '@/types/subjects';

import { IMCreateModalRef, MCreateModal } from './MCreateModal';
import { IMEmployeesModalRef, MEmployeesModal } from './MEmployeesModal';
import { IMUpdateModalRef, MUpdateModal } from './MUpdateModal';
import { IMSubjectProps } from './types';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Khoa học máy tính',
    updated_date: new Date(),
    active: false,
  },
  {
    id: '2',
    name: 'Giảng viên',
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Ban chủ nhiệm khoa',
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    name: 'Ban chủ nhiệm khoa',
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    name: 'Giảng viên',
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    name: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    updated_date: new Date(),
    active: true,
  },
];

export const MSubject: React.FC<IMSubjectProps> = ({ control }) => {
  //#region Ref
  const createRef = useRef<IMCreateModalRef | null>(null);
  const updateRef = useRef<IMUpdateModalRef | null>(null);
  const employeeRef = useRef<IMEmployeesModalRef | null>(null);
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
      field: 'name',
      headerName: 'TÊN BỘ MÔN',
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
      renderCell: (params: GridRenderCellParams<IGetSubjectsResponse>) => {
        return (
          <CActionsTable
            onCreate={() => onGoEmployee(params.row.id)}
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
  const onEdit = (id: string, data: IGetSubjectsResponse) =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteSubject(id);

        toast.success('Xóa subject thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || 'Xóa subject không thành công!',
        );
      }
    }
  };

  const onGoEmployee = (id: string) => employeeRef.current?.open(id);
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
      <MEmployeesModal ref={employeeRef} />
    </>
  );
  //#endregion
};
