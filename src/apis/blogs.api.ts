import { get } from '@/axios/request';
import { IGetBlogsResponse } from '@/types/blogs';
import { IApiResponse, IPaginateData } from '@/types/response';

import { BLOGS } from './url';

export const getAllBlogs = async (
  locale: string,
): Promise<IApiResponse<IPaginateData<IGetBlogsResponse[]>, any>> => {
  return await get(BLOGS.GET_LIST, { params: { locale } });
};
