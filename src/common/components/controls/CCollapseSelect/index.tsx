import { forwardRef, useMemo, useRef } from 'react';
import { HighlightOff } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';

import { ICSelectModalRef } from './CSelectModal/types';
import { CSelectModal } from './CSelectModal';
import { ICCollapseSelectProps, ICCollapseSelectRef } from './types';

export const CCollapseSelect = forwardRef<
  ICCollapseSelectRef,
  ICCollapseSelectProps
>(({ value, onChange, data, placeholder, sx, ...props }, ref) => {
  //#region Ref
  const modalRef = useRef<ICSelectModalRef | null>(null);
  //#endregion

  //#region Data
  const selectedItem = useMemo(
    () => data.find((e: any) => e.id === value),
    [data, value],
  );
  //#endregion

  //#region Event
  const onClick = (
    e: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>,
  ) => {
    modalRef.current?.open();
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange?.('');
  };
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <TextField
        placeholder={placeholder}
        value={selectedItem?.label ?? ''}
        onClick={onClick}
        InputProps={{
          readOnly: true,
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton onClick={onClear}>
                <HighlightOff />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': { backgroundColor: '#F5F5F5' },
          ...sx,
        }}
      />

      <CSelectModal
        data={data}
        value={value}
        onChange={onChange}
        ref={modalRef}
      />
    </>
  );
  //#endregion
});
