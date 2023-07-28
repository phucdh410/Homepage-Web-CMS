import {
  faPlugCircleBolt,
  faPlugCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Masonry } from '@mui/lab';
import { Box, Container } from '@mui/material';

import { useNetwork } from '@/hooks/';

//#region Image
import img1 from './1a.jpg';
import img2 from './1b.jpg';
import img12 from './11.jpg';
import img13 from './22.jpg';
import img14 from './33.jpg';
import img15 from './44.jpg';
import img16 from './55.jpg';
import img17 from './66.jpg';
import img18 from './77.jpg';
import img3 from './a.png';
import img4 from './b.png';
import img5 from './c.png';
import img6 from './d.jpg';
import img7 from './e.jpg';
import img8 from './f.jpg';
import img9 from './g.jpg';
import img10 from './h.jpg';
import img11 from './i.jpg';

//#endregion
import './index.scss';

const MOCK = [
  { id: '1', img: img1 },
  { id: '3', img: img3 },
  { id: '12', img: img12 },
  { id: '15', img: img15 },
  { id: '4', img: img4 },
  { id: '2', img: img2 },
  { id: '5', img: img5 },
  { id: '13', img: img13 },
  { id: '10', img: img10 },
  { id: '14', img: img14 },
  { id: '6', img: img6 },
  { id: '16', img: img16 },
  { id: '7', img: img7 },
  { id: '18', img: img18 },
  { id: '8', img: img8 },
  { id: '17', img: img17 },
  { id: '9', img: img9 },
  { id: '11', img: img11 },
];

const DashboardPage = () => {
  //#region Data
  const isConnect = useNetwork();
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <>
      {isConnect ? (
        <Box display="flex" alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faPlugCircleBolt} size="xl" color="#01bc01" />
          <span style={{ fontWeight: 'bold' }}>Internet Connected</span>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faPlugCircleXmark} size="xl" color="red" />
          <span style={{ fontWeight: 'bold' }}>No Internet</span>
        </Box>
      )}

      <Container maxWidth="md">
        <Masonry columns={3} spacing={5}>
          {MOCK.map((e) => (
            <img key={e.id} src={e.img} alt="" loading="lazy" />
          ))}
        </Masonry>
      </Container>
    </>
  );
  //#endregion
};

export default DashboardPage;
