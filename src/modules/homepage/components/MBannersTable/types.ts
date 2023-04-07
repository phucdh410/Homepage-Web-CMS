import { IGetBannersResponse } from '@/types/banner';

export interface IMBannersTableProps {
  data: IGetBannersResponse[];
  onEdit: (id: string, language_id: number) => () => void;
  onDelete: (id: string) => () => void;
}
