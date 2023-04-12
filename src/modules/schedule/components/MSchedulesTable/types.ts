import { IGetSchedulesResponse } from '@/types/schedule';

export interface IMSchedulesTableProps {
  data: IGetSchedulesResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
}
