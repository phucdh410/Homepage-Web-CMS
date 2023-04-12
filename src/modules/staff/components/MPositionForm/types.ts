import { Control } from 'react-hook-form';

import { ICreatePositionParams, IUpdatePositionParams } from '@/types/position';

export interface IMPositionFormProps {
  control: Control<ICreatePositionParams | IUpdatePositionParams, any>;
}
