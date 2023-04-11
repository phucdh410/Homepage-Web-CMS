import { Box, Paper, Stack, Typography } from '@mui/material';

import { MFooterForm } from '../../components';

const FooterPage = () => {
  return (
    <Box>
      <Stack mb={3}>
        <Typography variant="page-title">Footer</Typography>
      </Stack>

      <Paper className="wrapper">
        <MFooterForm />
      </Paper>
    </Box>
  );
};

export default FooterPage;
