import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';

import avt1Img from '@/assets/images/avatar-1.jpg';
import coverImg from '@/assets/images/cover.jpg';
import { shortenNumber } from '@/funcs/';

const data = {
  name: 'Jayvion Simon',
  role: 'ux designer',
  follower: 3458364,
  following: 371263,
  total_posts: 26313,
  avatar: avt1Img,
  cover: coverImg,
};

export const ProfileCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 368,
        borderRadius: '16px',
        boxShadow: '0 0 2px 0 #919eab',
      }}
    >
      <CardMedia
        sx={{
          height: 207,
          backgroundColor: '#9f9f9f',
          backgroundBlendMode: 'multiply',
        }}
        image={data.cover}
        component={motion.div}
        whileHover={{
          backgroundBlendMode: 'unset',
        }}
      />
      <CardContent sx={{ p: 0, pb: '0!important', position: 'relative' }}>
        <Box
          position="absolute"
          left="50%"
          p={0.75}
          borderRadius="100%"
          sx={{
            backgroundColor: 'white',
            transform: 'translate(-50%, -40px)',
          }}
        >
          <Avatar
            src={data.avatar}
            sx={{ height: 64, width: 64, margin: 'auto' }}
          />
        </Box>

        <Typography
          textAlign="center"
          fontWeight={600}
          lineHeight="24px"
          fontSize={16}
          pt={6}
          mb={0.5}
        >
          {data.name}
        </Typography>
        <Typography
          textAlign="center"
          lineHeight="22px"
          fontSize={14}
          color="rgb(99, 115, 129)"
        >
          {data.role}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={1}
          mb={3}
        >
          <IconButton>
            <FaFacebookF size={20} color="rgb(24, 119, 242)" />
          </IconButton>
          <IconButton>
            <FaInstagram size={20} color="#e02d69" />
          </IconButton>
          <IconButton>
            <FaLinkedinIn size={20} color="#007ebb" />
          </IconButton>
          <IconButton>
            <FaTwitter size={20} color="#00aaec" />
          </IconButton>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Box textAlign="center" flex={1}>
            <Typography
              mb={0.75}
              lineHeight={1.5}
              fontSize={12}
              color="rgb(145, 158, 171)"
            >
              Follower
            </Typography>
            <Typography fontWeight={600} lineHeight={1.5} fontSize={16}>
              {shortenNumber(data.follower)}
            </Typography>
          </Box>
          <Box textAlign="center" flex={1}>
            <Typography
              mb={0.75}
              lineHeight={1.5}
              fontSize={12}
              color="rgb(145, 158, 171)"
            >
              Following
            </Typography>
            <Typography fontWeight={600} lineHeight={1.5} fontSize={16}>
              {shortenNumber(data.following)}
            </Typography>
          </Box>
          <Box textAlign="center" flex={1}>
            <Typography
              mb={0.75}
              lineHeight={1.5}
              fontSize={12}
              color="rgb(145, 158, 171)"
            >
              Total Post
            </Typography>
            <Typography fontWeight={600} lineHeight={1.5} fontSize={16}>
              {shortenNumber(data.total_posts)}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
