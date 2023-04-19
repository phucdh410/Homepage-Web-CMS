import { IGetLanguagesResponse } from '@/types/languages';

export interface IMUpdateLanguageModalRef {
  open: (id: string, data: IGetLanguagesResponse) => void;
}
