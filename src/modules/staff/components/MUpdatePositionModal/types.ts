import { IGetPositionsResponse } from '@/types/positions';

export interface IMUpdatePositionModalRef {
  open: (id: string, data: IGetPositionsResponse) => void;
}

export interface IMUpdatePositionModalProps {
  refetch: () => void;
}
