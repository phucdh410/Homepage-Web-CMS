import { Dayjs } from 'dayjs';

export interface ICreateTimelineParams {
  from: number;
  to: number | null;
  title: string;
  active: boolean;
}

export interface IGetTimelinesResponse {
  id: string;
  from: number;
  to: number | null;
  title: string;
  updated_date: Date | Dayjs | string | null;
  active: boolean;
}

export interface IGetDetailTimelineResponse
  extends Omit<IGetTimelinesResponse, 'updated_date'> {}

export interface IUpdateTimelineParams extends ICreateTimelineParams {}
