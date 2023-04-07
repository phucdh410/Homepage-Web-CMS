import { ICreateNotificationParams } from '@/types/notification';

export interface IMNotificationModalRef {
  open: (data?: ICreateNotificationParams, language_id?: number) => void;
}
