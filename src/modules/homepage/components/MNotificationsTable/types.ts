import { IGetNotificationsResponse } from '@/types/notification';

export interface IMNotificationsTableProps {
  data: IGetNotificationsResponse[];
  onEdit: (data: IGetNotificationsResponse) => void;
  onDelete: (id: string) => void;
  page: number;
}
