import { IFormInputComponentProps } from '@/types/form';

export interface ICImageUploadProps extends IFormInputComponentProps {
  url?: string;
  value: string;
  onChange: (file_id: string) => void;
  // value: IFileUpload | null;
  // onChange: (value: IFileUpload) => void;
  aspectRatio?: string;
  isSquare?: boolean;
}
