import { FormLabel } from '@mui/material';

import { ICFormLabelProps } from './types';

export const CFormLabel: React.FC<ICFormLabelProps> = ({
  label,
  htmlFor,
  required,
  sx,
  ...props
}) => {
  return (
    <FormLabel
      sx={{ display: 'block', fontWeight: 600, lineHeight: '24px', ...sx }}
      required={required}
      htmlFor={htmlFor}
      {...props}
    >
      {label}
    </FormLabel>
  );
};
