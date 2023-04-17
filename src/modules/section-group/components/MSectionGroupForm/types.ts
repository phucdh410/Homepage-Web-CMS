import { Control } from 'react-hook-form';

import {
  ICreateSectionGroupParams,
  IUpdateSectionGroupParams,
} from '@/types/section-group';

export interface IMSectionGroupFormProps {
  control: Control<ICreateSectionGroupParams | IUpdateSectionGroupParams, any>;
}