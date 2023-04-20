import { IGetPartiesResponse } from '@/types/parties';

export interface IMPartiesTableProps {
  data: IGetPartiesResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  page: number;
}
