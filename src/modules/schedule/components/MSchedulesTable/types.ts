import { IGetSchedulesResponse } from '@/types/schedules';

export interface IMSchedulesTableProps {
  data: IGetSchedulesResponse[];
  page: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
