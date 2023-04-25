import { IGetInstitutesResponse } from '@/types/institutes';

export interface IMInstitutesTableProps {
  data: IGetInstitutesResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
  loading?: boolean;
}
