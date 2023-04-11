import { IGetLanguagesResponse } from '@/types/language';

export interface IMUpdateLanguageModalRef {
  open: (id: string, data: IGetLanguagesResponse) => void;
}
