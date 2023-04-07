import { Box, Paper, Stack, Typography } from '@mui/material';

import { MLinksForm } from '../../components';

const ListEventsPage = () => {
  //#region Data

  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box>
      <Stack mb={3}>
        <Typography variant="page-title">Liên kết</Typography>
      </Stack>

      <Paper className="wrapper">
        <MLinksForm />
      </Paper>
    </Box>
  );
  //#endregion
};

export default ListEventsPage;
