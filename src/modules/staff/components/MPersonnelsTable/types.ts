import { IGetPersonnelsResponse } from '@/types/personnel';

export interface IMPersonnelsTableProps {
  data: IGetPersonnelsResponse[];
  onEdit: (id: string, language_id: number) => () => void;
  onDelete: (id: string) => () => void;
}
