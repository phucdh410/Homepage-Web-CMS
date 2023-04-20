import { Control } from 'react-hook-form';

import { ICreatePartyParams, IUpdatePartyParams } from '@/types/parties';

export interface IMPartyFormProps {
  control: Control<ICreatePartyParams | IUpdatePartyParams, any>;
}
