import { IGetNotificationsResponse } from '@/types/notification';

export interface IMNotificationsTableProps {
  data: IGetNotificationsResponse[];
  onEdit: (data: IGetNotificationsResponse, language_id: number) => () => void;
  onDelete: (id: string) => () => void;
}
