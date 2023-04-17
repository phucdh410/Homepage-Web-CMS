import { Control } from 'react-hook-form';

import { ICreateSectionParams, IUpdateSectionParams } from '@/types/section';

export interface IMSectionFormProps {
  control: Control<ICreateSectionParams | IUpdateSectionParams, any>;
}
