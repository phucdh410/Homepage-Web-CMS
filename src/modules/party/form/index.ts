import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';

import { ICreatePartyParams, IUpdatePartyParams } from '@/types/parties';

export const defaultValuesParty: ICreatePartyParams = {
  name: '',
  link: '',
  file_id: '',
  active: true,
};

export const partyResolver: Resolver<ICreatePartyParams | IUpdatePartyParams> =
  yupResolver(
    object({
      name: string().required('Vui lòng nhập tên!'),
      link: string().required('Vui lòng nhập liên kết!'),
      file_id: string().required('Vui lòng chọn hình bìa!'),
      active: boolean(),
    }),
  );
