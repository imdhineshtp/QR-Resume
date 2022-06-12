import {
  Grid,
  Typography,
  useTheme,
  Box,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import { Mode } from '@mui/icons-material';
import { ProfileAvatar } from '../common/Index';
export default function IntroSection() {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={9}
      sx={{
        py: 3,
        backgroundColor: '#223f5b',
        px: 4,
        position: 'relative',
        // justifyContent: 'flex-end',
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant='h3'
          sx={{ fontWeight: 500, pb: 0.5, color: '#fff' }}
        >
          Dhinesh
        </Typography>
        <Typography
          variant='h6'
          color='#FFF'
          sx={{ fontWeight: 'normal', py: 0.5 }}
        >
          Full Stack Developer
        </Typography>
        <Divider sx={{ my: 1, borderColor: '#fff' }} />
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
      <IconButton sx={{ position: 'absolute', top: 20, right: 20 }}>
        <Mode sx={{ color: '#fff' }} />
      </IconButton>
    </Grid>
  );
}
