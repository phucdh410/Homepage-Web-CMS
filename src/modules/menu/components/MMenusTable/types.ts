import { IGetMenusResponse } from '@/types/menu';

export interface IMMenusTableProps {
  data: IGetMenusResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
}
