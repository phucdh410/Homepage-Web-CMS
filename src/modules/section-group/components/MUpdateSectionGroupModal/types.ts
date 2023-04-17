import { IGetSectionGroupsResponse } from '@/types/section-group';

export interface IMUpdateSectionGroupRef {
  open: (id: string, data: IGetSectionGroupsResponse) => void;
}
