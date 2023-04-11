import { IGetLanguagesResponse } from '@/types/language';

export interface IMLanguagesTableProps {
  data: IGetLanguagesResponse[];
  onEdit: (id: string, data: IGetLanguagesResponse) => () => void;
  onDelete: (id: string) => () => void;
}
