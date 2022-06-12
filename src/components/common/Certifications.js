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
import { Add, Mode, Delete } from '@mui/icons-material';

export default function Certifications({ certificates, color }) {
  return (
    <Grid item xs={12} sx={{ mb: 2, position: 'relative' }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        CERTIFICATES
      </Typography>
      {certificates.map((cert) => (
        <Grid item xs={12} sx={{ position: 'relative' }}>
          <Typography variant='h6' sx={{ fontWeight: '800', mt: 1 }}>
            {cert.certiName}
          </Typography>
          <Typography variant='body2' sx={{ color: color }}>
            {cert.dos} - {cert.doe}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {cert.desc}
          </Typography>
          <Typography
            variant='caption'
            color={color}
            component={'a'}
            href={cert.link}
            target='_blank'
          >
            Certification link
          </Typography>
          <Stack
            direction='row'
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              justifyContent: 'flex-end',
            }}
          >
            <IconButton>
              <Mode sx={{ fontSize: '0.8em' }} />
            </IconButton>
            <IconButton>
              <Delete sx={{ fontSize: '0.8em' }} />
            </IconButton>
          </Stack>
        </Grid>
      ))}
      <Stack
        direction='row'
        sx={{ position: 'absolute', top: 0, right: 0 }}
        justifyContent={'flex-end'}
      >
        <IconButton>
          <Add sx={{ fontSize: '1em' }} />
        </IconButton>
      </Stack>
    </Grid>
  );
}
