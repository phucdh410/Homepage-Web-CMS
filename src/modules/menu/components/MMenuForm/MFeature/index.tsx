import { Paper, Unstable_Grid2 as Grid } from '@mui/material';

import { IMFeatureProps } from './types';

export const MFeature: React.FC<IMFeatureProps> = ({ control }) => {
  return (
    <>
      <Grid lg={6}>
        <Paper variant="wrapper"></Paper>
      </Grid>
      <Grid lg={6}>
        <Paper variant="wrapper"></Paper>
      </Grid>
    </>
  );
};
