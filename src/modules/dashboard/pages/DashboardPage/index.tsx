import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';

import { CImage } from '@/others/';

import img1 from './1a.jpg';
import img2 from './1b.jpg';

const data = [
  { id: '1', image: img1 },
  { id: '2', image: img2 },
];

const variants = {
  initial: {
    y: 0,
    x: 0,
    transition: { duration: 0.5 },
  },
  animate: {
    y: 35,
    x: 35,
    zIndex: 1,
    transition: { duration: 0.5 },
  },
};

const DashboardPage = () => {
  //#region Data
  const [idActive, setIdActive] = useState<string>(data[0].id);
  //#endregion

  //#region Event
  const onChange = (id: string) => setIdActive(id);
  //#endregion

  //#region Render
  return (
    <div style={{ margin: '40px', marginLeft: '100px' }}>
      <Stack direction="row" spacing={2} alignItems="center" maxWidth={800}>
        <Box position="relative" marginRight="60px" height={300} minWidth={220}>
          {data.map((e, i) => (
            <Box
              key={e.id}
              position="absolute"
              component={motion.div}
              variants={variants}
              initial="initial"
              animate={idActive === e.id ? 'animate' : 'initial'}
              onClick={() => onChange(e.id)}
            >
              <CImage aspectRatio="3/4" height={300} src={e.image} />
            </Box>
          ))}
        </Box>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Stack>
    </div>
  );
  //#endregion
};

export default DashboardPage;
