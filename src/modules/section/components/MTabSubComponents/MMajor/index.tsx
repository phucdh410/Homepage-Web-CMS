import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { toast } from 'react-toastify';
import { AddCircleOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { deleteMajor } from '@/apis/majors.api';
import { confirm } from '@/confirm/';
import { CActionsTable, CActiveTag, CDataGrid } from '@/others/';
import { IGetMajorsResponse, IMajorData } from '@/types/majors';

import { IMCreateModalRef, MCreateModal } from './MCreateModal';
import { IMUpdateModalRef, MUpdateModal } from './MUpdateModal';
import { IMMajorProps } from './types';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Đại học',
    majors: [
      { sort_order: 1, name: 'Thạc sĩ Giải tích toán học' },
      { sort_order: 2, name: 'Tiến sĩ siêu nhân' },
      { sort_order: 3, name: 'Anh Duy Mập' },
    ],
    updated_date: new Date(),
    active: false,
  },
  {
    id: '2',
    title: 'Đại học',
    majors: [
      { sort_order: 1, name: 'Ngành học 1' },
      { sort_order: 2, name: 'Ngành học 2' },
      { sort_order: 3, name: 'Ngành học siêu cấp 3' },
    ],
    updated_date: new Date(),
    active: true,
  },
  {
    id: '3',
    title: 'Đại học',
    majors: [
      { sort_order: 1, name: 'Siêu nhân gao' },
      { sort_order: 2, name: 'Siêu nhân cuồng phong' },
      { sort_order: 3, name: 'Mấy con oraku' },
    ],
    updated_date: new Date(),
    active: false,
  },
  {
    id: '4',
    title: 'Đại học',
    majors: [{ sort_order: 1, name: 'Thạc sĩ Giải tích toán học' }],
    updated_date: new Date(),
    active: true,
  },
  {
    id: '5',
    title: 'Đại học',
    majors: [{ sort_order: 1, name: 'Thạc sĩ Giải tích toán học' }],
    updated_date: new Date(),
    active: false,
  },
  {
    id: '6',
    title: 'Đại học',
    majors: [{ sort_order: 1, name: 'Thạc sĩ Giải tích toán học' }],
    updated_date: new Date(),
    active: true,
  },
];

export const MMajor: React.FC<IMMajorProps> = ({ control }) => {
  //#region Ref
  const createRef = useRef<IMCreateModalRef | null>(null);
  const updateRef = useRef<IMUpdateModalRef | null>(null);

  const onEdit = (id: string, data: IGetMajorsResponse) =>
    updateRef.current?.open(id, data);

  const onDelete = async (id: string) => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteMajor(id);

        toast.success('Xóa ngành đào tạo thành công!');
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Xóa ngành đào tạo không thành công!',
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
      field: 'title',
      headerName: 'TIÊU ĐỀ',
      minWidth: 200,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'majors',
      headerName: 'NGÀNH ĐÀO TẠO',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
      renderCell: (params: GridRenderCellParams<IMajorData[]>) => {
        return (
          <Marquee speed={100} gradient={false}>
            {(params.value as IMajorData[]).map((e, i) => (
              <p
                style={{ marginRight: '2rem' }}
                key={new Date().toString() + i}
              >
                {e.name}
              </p>
            ))}
          </Marquee>
        );
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
      renderCell: (params: GridRenderCellParams<IGetMajorsResponse>) => {
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
