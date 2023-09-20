import { useWatch } from 'react-hook-form';

import { MType1 } from './MType1';
import { MType2 } from './MType2';
import { MType3 } from './MType3';
import { IMTypesProps } from './types';

export const MTypes: React.FC<IMTypesProps> = ({ control }) => {
  //#region Ref
  const typeValue = useWatch({ control, name: 'type' });
  //#endregion

  //#region Data

  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  // if (typeValue === 1) {
  return <MType1 control={control} />;
  // }
  if (typeValue === 2) {
    return <MType2 control={control} />;
  }
  if (typeValue === 3) {
    return <MType3 control={control} />;
  }
  return null;
  //#endregion
};
