import { IGetPositionsResponse } from '@/types/position';

export interface IMPositionsTableProps {
  data: IGetPositionsResponse[];
  onEdit: (id: string, data: IGetPositionsResponse) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
