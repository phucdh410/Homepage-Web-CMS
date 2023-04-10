import { IGetNotificationsResponse } from '@/types/notification';

export interface IMNotificationModalRef {
  open: (data?: IGetNotificationsResponse, language_id?: number) => void;
}
