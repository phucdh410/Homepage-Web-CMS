import { IGetEventsResponse } from '@/types/event';

export interface IMEventsTableProps {
  data: IGetEventsResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  page: number;
}
