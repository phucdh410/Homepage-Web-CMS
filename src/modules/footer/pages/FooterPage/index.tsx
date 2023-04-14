import { useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

import { CAutocomplete, CFormLabel } from '@/controls/';

import { MFooterForm } from '../../components';

const options = [
  { id: 1, label: 'Tiếng Việt', value: 1 },
  { id: 2, label: 'Tiếng Anh', value: 2 },
  { id: 3, label: 'Tiếng Lào', value: 3 },
  { id: 4, label: 'Tiếng Thái', value: 4 },
];

const FooterPage = () => {
  //#region Data
  const [lang, setLang] = useState(1);
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box>
      <Stack mb={3}>
        <Typography variant="page-title">Footer</Typography>
      </Stack>

      <Paper variant="wrapper">
        <Stack spacing={1} mb={2.5}>
          <CFormLabel label="Ngôn ngữ" required />
          <CAutocomplete
            value={lang}
            onChange={setLang}
            placeholder="Chọn ngôn ngữ"
            options={options}
            renderOption={(props, option) => (
              <Box key={option.id} {...props}>
                {option.label}
              </Box>
            )}
          />
        </Stack>

        <MFooterForm />
      </Paper>
    </Box>
  );
  //#endregion
};

export default FooterPage;
