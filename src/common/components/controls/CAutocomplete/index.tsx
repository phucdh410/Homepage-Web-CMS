import { forwardRef, useMemo, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { ICAutocompleteProps, ICAutocompleteRef, IOption } from './types';

export const CAutocomplete = forwardRef<ICAutocompleteRef, ICAutocompleteProps>(
  (
    {
      id,
      name,
      placeholder,
      options,
      value,
      onChange,
      multiple,
      renderOption,
      error,
      helperText,
      disableClearable,
      // getOptionLabel,
      ...props
    },
    ref,
  ) => {
    //#region Data
    const [inputValue, setInputValue] = useState('');

    const currentValue = useMemo(() => {
      if (multiple) {
        if (!options || !value) return null;
      } else if (!options || !value?.toString()) return null;

      if (multiple)
        return (
          value?.map((id: any) =>
            options.find((option) => option?.id?.toString() === id?.toString()),
          ) ?? null
        );

      return (
        options.find(
          (option) => option?.value?.toString() === value?.toString(),
        ) ?? null
      );
    }, [multiple, options, value]);
    //#endregion

    //#region Event
    // const handleInputChange = (
    //   event: React.SyntheticEvent,
    //   value: string,
    //   reason: string,
    // ) => setInputValue(onInputChange(value));

    const onValueChange = (
      event: React.SyntheticEvent,
      value: IOption | IOption[] | null,
    ) => {
      if (!onChange) return;
      if (value === null) {
        onChange(null);
      } else if (multiple && Array.isArray(value)) {
        onChange(value.map((e) => e.value));
      } else if (!multiple && !Array.isArray(value)) {
        onChange(value.value);
      }
    };
    //#endregion

    //#region Other
    const getOptionLabel = (option: IOption) => {
      return option.label;
    };
    //#endregion

    return (
      <Autocomplete
        id={id}
        disableClearable={disableClearable}
        multiple={multiple}
        className={'c-autocomplete'}
        value={currentValue}
        onChange={onValueChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            inputRef={ref}
          />
        )}
        renderOption={renderOption}
        getOptionLabel={getOptionLabel}
        {...props}
      />
    );
  },
);

CAutocomplete.defaultProps = {
  options: [],
  disableClearable: true,
};
