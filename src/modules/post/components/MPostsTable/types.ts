import { IGetPostsResponse } from '@/types/posts';

export interface IMPostsTableProps {
  data: IGetPostsResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  page: number;
}
