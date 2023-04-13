import { IGetPagesResponse } from '@/types/page';

export interface IMPagesTableProps {
  data: IGetPagesResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
