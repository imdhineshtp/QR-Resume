import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';
export default function Certifications({ certificates, color }) {
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        CERTIFICATES
      </Typography>
      {certificates.map((cert) => (
        <Grid item xs={12}>
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
        </Grid>
      ))}
    </Grid>
  );
}
