import { IGetSectionGroupsResponse } from '@/types/section-group';

export interface IMSectionGroupsTableProps {
  data: IGetSectionGroupsResponse[];
  onDelete: (id: string) => void;
  onEdit: (id: string, data: IGetSectionGroupsResponse) => void;
  page: number;
}
