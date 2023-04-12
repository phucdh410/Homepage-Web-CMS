import { IGetPositionsResponse } from '@/types/position';

export interface IMUpdatePositionModalRef {
  open: (id: string, data: IGetPositionsResponse) => void;
}
