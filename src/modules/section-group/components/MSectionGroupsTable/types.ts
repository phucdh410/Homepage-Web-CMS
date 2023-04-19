import { IGetSectionGroupsResponse } from '@/types/section-groups';

export interface IMSectionGroupsTableProps {
  data: IGetSectionGroupsResponse[];
  onDelete: (id: string) => void;
  onEdit: (id: string, data: IGetSectionGroupsResponse) => void;
  page: number;
}
