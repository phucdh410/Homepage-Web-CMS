import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { array, object, string } from 'yup';

import { IAddressForm, ISocialLinksForm } from '@/types/footer';

export const defaultValuesSocialLinks: ISocialLinksForm = {
  facebook: '',
  twitter: '',
  linkedin: '',
  google: '',
  youtube: '',
  instagram: '',
};

export const socialLinksResolver: Resolver<ISocialLinksForm> = yupResolver(
  object({
    facebook: string(),
    twitter: string(),
    linkedin: string(),
    google: string(),
    youtube: string(),
    instagram: string(),
  }),
);

export const defaultValuesAddress: IAddressForm = {
  address: [{ name: '280 An Dương Vương P.4 Q.5' }],
  phone: '',
  fax: '',
};

export const addressResolver: Resolver<IAddressForm> = yupResolver(
  object({
    address: array(
      object({
        name: string().required('Vui lòng nhập địa chỉ!'),
      }),
    )
      .min(1, 'Phải có tối thiểu 1 địa chỉ.')
      .required(),
    phone: string().required('Vui lòng nhập số điện thoại!'),
    fax: string().required('Vui lòng nhập số fax!'),
  }),
);
