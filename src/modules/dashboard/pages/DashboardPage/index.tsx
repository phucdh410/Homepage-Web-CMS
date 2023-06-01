import { FaYinYang } from 'react-icons/fa';
import { Button } from '@mui/material';

const DashboardPage = () => {
  return (
    <div>
      <Button endIcon={<FaYinYang className="anim-spin" size="32px" />}>
        Diệt trừ yêu ma
      </Button>
    </div>
  );
};

export default DashboardPage;
