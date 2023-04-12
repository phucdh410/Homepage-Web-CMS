import { IGetPersonnelsResponse } from '@/types/personnel';

export interface IMPersonnelsTableProps {
  data: IGetPersonnelsResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
}
