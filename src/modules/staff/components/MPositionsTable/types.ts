import { IGetPositionsResponse } from '@/types/position';

export interface IMPositionsTableProps {
  data: IGetPositionsResponse[];
  onEdit: (id: string, language_id: number) => () => void;
  onDelete: (id: string) => () => void;
}
