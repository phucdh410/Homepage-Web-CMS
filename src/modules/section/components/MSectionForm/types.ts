import { Control } from 'react-hook-form';

import { ICreateSectionParams, IUpdateSectionParams } from '@/types/sections';

export interface IMSectionFormProps {
  control: Control<ICreateSectionParams | IUpdateSectionParams, any>;
}
