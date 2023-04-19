import { IGetBannersResponse } from '@/types/banner';

export interface IMBannersTableProps {
  data: IGetBannersResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  page: number;
}
