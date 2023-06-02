import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { ICAnimatedTypographyProps } from './types';

const textContainer = {
  animate: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
const text = {
  initial: {
    y: '-200%',
    color: '#FF0088',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  animate: {
    y: 0,
    color: '#124874',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

export const CAnimatedTypography: React.FC<ICAnimatedTypographyProps> = ({
  content,
  ...props
}) => {
  return (
    <Typography {...props}>
      <motion.div
        style={{ display: 'flex', overflow: 'hidden' }}
        initial="initial"
        animate="animate"
        variants={textContainer}
      >
        {content?.split('').map((e, i) => (
          <motion.span key={i} variants={text}>
            {e === ' ' ? '\u00A0' : e}
          </motion.span>
        ))}
      </motion.div>
    </Typography>
  );
};
