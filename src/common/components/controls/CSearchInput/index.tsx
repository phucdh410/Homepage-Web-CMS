import { forwardRef, useCallback, useState } from 'react';
import { Search } from '@mui/icons-material';
import { debounce, InputAdornment, TextField } from '@mui/material';

import { ICSearchInputProps, ICSearchInputRef } from './types';

export const CSearchInput = forwardRef<ICSearchInputRef, ICSearchInputProps>(
  ({ id, name, placeholder, onChange, ...props }, ref) => {
    //#region Data
    const [input, setInput] = useState('');
    //#endregion

    //#region Event
    const debounceSearch = useCallback(
      debounce((value) => onChange?.(value), 400),
      [],
    );

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      debounceSearch(e.target.value);
    };
    //#endregion

    //#region Render
    return (
      <TextField
        inputRef={ref}
        id={id}
        name={name}
        value={input}
        onChange={onInputChange}
        placeholder={placeholder}
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff' } }}
        {...props}
      />
    );
    //#endregion
  },
);

CSearchInput.defaultProps = {
  placeholder: 'Tìm kiếm',
};
