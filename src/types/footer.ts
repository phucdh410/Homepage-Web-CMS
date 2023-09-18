export interface IAddress {
  name: string;
}

export interface IAddressForm {
  address: IAddress[];
  phone: string;
  fax: string;
}
export interface ISocialLinksForm {
  facebook: string;
  twitter: string;
  linkedin: string;
  google: string;
  youtube: string;
  instagram: string;
}

export interface ISubLinkOfCategory {
  name: string;
  href: string;
}
export interface IGetCategoriesResponse {
  id: string;
  data: ISubLinkOfCategory[];
}
