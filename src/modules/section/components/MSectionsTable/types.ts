import { IGetSectionsResponse } from '@/types/section';

export interface IMSectionsTableProps {
  data: IGetSectionsResponse[];
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
