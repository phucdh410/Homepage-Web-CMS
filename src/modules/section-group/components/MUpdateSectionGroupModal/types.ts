import { IGetSectionGroupsResponse } from '@/types/section-groups';

export interface IMUpdateSectionGroupRef {
  open: (id: string, data: IGetSectionGroupsResponse) => void;
}

export interface IMUpdateSectionGroupProps {
  refetch: () => void;
}
