import { IGetEventsResponse } from '@/types/event';

export interface IMEventsTableProps {
  data: IGetEventsResponse[];
  onEdit: (id: string, language_id: number) => () => void;
  onDelete: (id: string) => () => void;
  page: number;
}
