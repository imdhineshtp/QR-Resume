import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import { Mode } from '@mui/icons-material';

export default function Skills({ skills, color, bg }) {
  return (
    <Grid item xs={12} sx={{ mb: 2, position: 'relative' }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        SKILLS
      </Typography>
      <Grid container item sx={{ display: 'flex' }}>
        {skills.map((skill) => (
          <Chip
            label={<Typography sx={{ color: '#fff' }}>{skill}</Typography>}
            sx={{
              m: 1,
              ml: 0,
              backgroundColor: bg,
              px: 1,
              borderRadius: 1,
            }}
          />
        ))}
      </Grid>
      <Stack
        direction='row'
        sx={{ position: 'absolute', top: 0, right: 0 }}
        justifyContent={'flex-end'}
      >
        <IconButton>
          <Mode sx={{ fontSize: '1em' }} />
        </IconButton>
      </Stack>
    </Grid>
  );
}
