import { useState } from 'react';
import { UseFieldArrayAppend } from 'react-hook-form';
import { Button, Stack } from '@mui/material';

import { CInput } from '@/controls/';
import { IAddressForm } from '@/types/footer';

export interface IAddTextFieldProps {
  append: UseFieldArrayAppend<IAddressForm, 'address'>;
}

export const AddTextField = ({ append }: IAddTextFieldProps) => {
  //#region Data
  const [value, setValue] = useState<string>('');
  //#endregion

  //#region Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onAdd = () => {
    append({ name: value });
    setValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onAdd();
    }
  };

  const handleClick = () => {
    onAdd();
  };
  //#endregion

  //#region Render
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CInput
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Thêm một địa chỉ cơ sở..."
        sx={{ minWidth: 400 }}
      />
      <Button disabled={!value} onClick={handleClick}>
        Thêm
      </Button>
    </Stack>
  );

  //#endregion
};
