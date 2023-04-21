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

import { deleteOrgStructure } from '@/apis/org-structures.api';
import { confirm } from '@/confirm/';
import { DISPLAY_LABELS, DISPLAY_TYPES } from '@/constants/enums';
import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetOrgStructuresResponse } from '@/types/org-structures';

import { IMCreateModalRef, MCreateModal } from './MCreateModal';
import { IMEmployeesModalRef, MEmployeesModal } from './MEmployeesModal';
import { IMUpdateModalRef, MUpdateModal } from './MUpdateModal';
import { IMOrgStructureProps } from './types';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Ban chủ nhiệm khoa',
    display: 2,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '2',
    name: 'Giảng viên',
    display: 2,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Ban chủ nhiệm khoa',
    display: 3,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    name: 'Ban chủ nhiệm khoa',
    display: 2,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    name: 'Giảng viên',
    display: 3,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    name: 'Khoa Toán Đại học Sư phạm Sài Gòn',
    display: 2,
    updated_date: new Date(),
    active: true,
  },
];

export const MOrgStructure: React.FC<IMOrgStructureProps> = ({ control }) => {
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
      headerName: 'TÊN TỔ CHỨC',
      headerAlign: 'left',
      align: 'left',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'display',
      headerName: 'DẠNG HIỂN THỊ',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
      valueFormatter: (params: GridValueFormatterParams<DISPLAY_TYPES>) => {
        return DISPLAY_LABELS[params.value];
      },
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
      renderCell: (params: GridRenderCellParams<IGetOrgStructuresResponse>) => {
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
  const onEdit = (id: string, data: IGetOrgStructuresResponse) =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteOrgStructure(id);

        toast.success('Xóa cơ cấu tổ chức thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Xóa cơ cấu tổ chức không thành công!',
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
