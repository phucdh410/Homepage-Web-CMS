import { IGetEmployeesResponse } from '@/types/employee';

export interface IMEmployeesTableProps {
  data: IGetEmployeesResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
