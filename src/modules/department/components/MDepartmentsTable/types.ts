import { IGetDepartmentsResponse } from '@/types/departments';

export interface IMDepartmentsTableProps {
  data: IGetDepartmentsResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
