import { IGetFoldersResponse } from '@/types/folder';

export interface IMFoldersTableProps {
  data: IGetFoldersResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  page: number;
}
