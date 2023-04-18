import { post, put, remove } from '@/axios/request';
import { ICreateTimelineParams, IUpdateTimelineParams } from '@/types/timeline';

import { TIMELINES } from './url';

export const createTimeline = (body: ICreateTimelineParams) => {
  return post(TIMELINES.CREATE, body);
};

export const updateTimeline = (id: string, body: IUpdateTimelineParams) => {
  return put(`${TIMELINES.UPDATE}/${id}`, body);
};

export const deleteTimeline = (id: string) => {
  return remove(`${TIMELINES.DELETE}/${id}`);
};
