import {
  Grid,
  Typography,
  useTheme,
  Box,
  Avatar,
  IconButton,
} from '@mui/material';
import EditIntro from '../PopupForms/EditIntro';
import { ProfileAvatar } from '../common/Index';
import { Mode } from '@mui/icons-material';
import { useState } from 'react';
export default function IntroSection() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      item
      xs={12}
      // spacing={4}
      sx={{
        py: 3,
        backgroundColor: '#2B343D',
        px: 4,
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Grid item xs={10}>
        <Typography
          variant='h3'
          sx={{ fontWeight: 500, pb: 0.5, color: '#fff' }}
        >
          Dhinesh
        </Typography>
        <Typography
          variant='h6'
          color='#EB453D'
          sx={{ fontWeight: 'normal', py: 0.5 }}
        >
          Full Stack Developer
        </Typography>
        <Typography sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          harum? Voluptatibus numquam harum dolor unde,Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus
          numquam harum dolor unde,Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor
          unde,Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia, harum? Voluptatibus numquam harum dolor unde,
        </Typography>
      </Grid>
      <ProfileAvatar
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
        color='#eb453d'
        xs={2}
      />
      <IconButton
        sx={{ position: 'absolute', top: 10, right: 10 }}
        onClick={() => setOpen(true)}
      >
        <Mode sx={{ color: '#fff' }} />
      </IconButton>
      {open && (
        <EditIntro
          open={open}
          onClose={() => setOpen(false)}
          cardTitle='Introduction'
        />
      )}
    </Grid>
  );
}
