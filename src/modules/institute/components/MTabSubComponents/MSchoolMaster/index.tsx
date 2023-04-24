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

import { deleteSchoolMaster } from '@/apis/school-masters.api';
import { confirm } from '@/confirm/';
import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetSchoolMastersResponse } from '@/types/school-masters';

import { IMCreateModalRef, MCreateModal } from './MCreateModal';
import { IMEmployeesModalRef, MEmployeesModal } from './MEmployeesModal';
import { IMUpdateModalRef, MUpdateModal } from './MUpdateModal';
import { IMSchoolMasterProps } from './types';

const MOCK_DATA = [
  {
    id: '1',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '2',
    from: 2013,
    to: 2023,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    from: 2013,
    to: 2023,
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    from: 2013,
    to: 2018,
    updated_date: new Date(),
    active: true,
  },
];

export const MSchoolMaster: React.FC<IMSchoolMasterProps> = ({ control }) => {
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
      field: 'time',
      headerName: 'MỐC THỜI GIAN',
      headerAlign: 'center',
      align: 'center',
      minWidth: 200,
      flex: 1,
      valueGetter: (
        params: GridValueGetterParams<IGetSchoolMastersResponse>,
      ) => {
        return `${params.row.from} - ${
          params.row.to === new Date().getFullYear() ? 'NAY' : params.row.to
        }`;
      },
    },
    {
      field: 'updated_date',
      headerName: 'NGÀY CẬP NHẬT',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
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
      renderCell: (params: GridRenderCellParams<IGetSchoolMastersResponse>) => {
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
  const onEdit = (id: string, data: IGetSchoolMastersResponse) =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteSchoolMaster(id);

        toast.success('Xóa thành công!');
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Xóa không thành công!');
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
