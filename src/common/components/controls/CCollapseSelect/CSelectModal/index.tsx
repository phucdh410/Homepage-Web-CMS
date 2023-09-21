import { forwardRef, useImperativeHandle, useState } from 'react';
import { Box, Dialog, List, RadioGroup } from '@mui/material';

import { CSelectItem } from './CSelectItem';
import { ICSelectModalProps, ICSelectModalRef } from './types';

// const MOCK_ROOT_OPTIONS = [
//   { id: '1', label: 'Đại học' },
//   { id: '2', label: 'Sau đại học', isChildren: true },
//   { id: '3', label: 'Chương trình bổ sung' },
//   { id: '4', label: 'Kế hoạch tuyển sinh', isChildren: true },
// ];

export const CSelectModal = forwardRef<ICSelectModalRef, ICSelectModalProps>(
  ({ value, onChange, data, ...props }, ref) => {
    //#region Ref
    //#endregion

    //#region Data
    const [open, setOpen] = useState<boolean>(false);
    //#endregion

    //#region Event
    const onClose = () => setOpen(false);

    const onValueChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      value: string,
    ) => {
      onChange?.(value);
      onClose();
    };
    //#endregion

    //#region Cycle
    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
    }));
    //#endregion

    //#region Render
    return (
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{ sx: { minWidth: '400px' } }}
      >
        <Box p={3}>
          <RadioGroup value={value} onChange={onValueChange}>
            <List>
              {data?.map((e) => (
                <CSelectItem
                  key={e.id}
                  item={e}
                  value={value}
                  onChange={onChange}
                />
              ))}
            </List>
          </RadioGroup>
        </Box>
      </Dialog>
    );
    //#endregion
  },
);
