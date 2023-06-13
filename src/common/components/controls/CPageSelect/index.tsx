import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getAllPages } from '@/apis/pages.api';
import { IOption } from '@/types/options';

import { CAutocomplete } from '../CAutocomplete';

import { ICPageSelectProps } from './types';

export const CPageSelect: React.FC<ICPageSelectProps> = ({ control }) => {
  //#region Data
  const { data } = useQuery({
    queryKey: ['pages'],
    queryFn: () => getAllPages(),
  });

  const pages = useMemo<IOption[]>(
    () =>
      data?.data?.data?.map((e) => ({
        id: e.id,
        value: e.id,
        label: e.title,
      })) || [],
    [data],
  );
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Controller
      control={control}
      name="page_id"
      render={({ field, fieldState: { error } }) => (
        <CAutocomplete
          {...field}
          options={pages}
          renderOption={(props, option) => (
            <Box key={option.id} {...props}>
              {option.label}
            </Box>
          )}
          placeholder="Chọn trang..."
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
  //#endregion
};
