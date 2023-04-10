import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getUserById } from '@/apis/users.api';
import { MForm } from '@/modules/users/components';

const UpdateUserPage = () => {
  //#region Data
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate(-1);
  }

  const { data } = useQuery({
    queryKey: ['user-detail', id],
    queryFn: () => getUserById(id as string),
  });
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box>
      <MForm data={data?.data?.data} />
    </Box>
  );
  //#endregion
};

export default UpdateUserPage;
