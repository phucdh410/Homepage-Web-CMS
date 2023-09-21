import { Dayjs } from 'dayjs';

export interface IGetBlogsResponse {
  _id: string;
  sortOrder: number;
  viewCount: number;
  isPin: number;
  isConfirm: boolean;
  type: string;
  categoryId: string;
  link: string;
  createdName: string;
  createdBy: string;
  updatedBy: string;
  imageAlt: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  categoryTitle: string;
  image: string;
  imageThumb: string;
  activateDate: string;
  deactivateDate: string;
  createdDate: string;
  updatedDate: string;
}

export interface ICreateOrUpdateBlogParams {
  category_id: string;
  type: 0 | 1;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  content: {
    vi: string;
    en: string;
  };
  slug: string;
  files?: any;
  is_pin: boolean;
  is_confirm: boolean;
  activate_date: Date | Dayjs | string;
  deactivate_date: Date | Dayjs | string;
}
