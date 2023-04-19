import { IGetSchedulesResponse } from '@/types/schedule';

export interface IMSchedulesTableProps {
  data: IGetSchedulesResponse[];
  page: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
