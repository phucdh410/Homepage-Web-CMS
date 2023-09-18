import { Box, Paper, Stack, Typography } from '@mui/material';

import { MAddressForm } from '../../components';

const AddressPage = () => {
  //#region Data
  // const { data } = useQuery(['social-links'], () => getLinks());

  // const formData = useMemo(() => {
  //   if (data?.data?.data) {
  //     const values: ISocialLinksForm = {
  //       facebook: '',
  //       twitter: '',
  //       linkedin: '',
  //       google: '',
  //       youtube: '',
  //       instagram: '',
  //     };
  //     data.data.data?.forEach((e) => {
  //       if (e.category === 1) values.youth = e.url;
  //       if (e.category === 2) values.online = e.url;
  //       if (e.category === 3) values.certificate = e.url;
  //       if (e.category === 4) values.support = e.url;
  //       if (e.category === 5) values.facebook = e.url;
  //     });
  //     return values;
  //   } else return undefined;
  // }, [data]);
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box>
      <Stack mb={3}>
        <Typography variant="page-title">Địa chỉ cơ sở</Typography>
      </Stack>

      <Paper variant="wrapper">
        <MAddressForm />
      </Paper>
    </Box>
  );
  //#endregion
};

export default AddressPage;
