import { IGetPositionsResponse } from '@/types/positions';

export interface IMPositionsTableProps {
  data: IGetPositionsResponse[];
  onEdit: (id: string, data: IGetPositionsResponse) => void;
  onDelete: (id: string) => void;
  page: number;
}
