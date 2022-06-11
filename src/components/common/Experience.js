import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

export default function Experience({ title, experience, color }) {
  return (
    <Grid item xs={12}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        {title}
      </Typography>
      {experience.map((field) => (
        <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
          <Typography variant='h5'>{field.roleName}</Typography>
          <Typography variant='h6' sx={{ fontWeight: 400 }}>
            {field.companyName}
          </Typography>
          <Typography variant='body2' sx={{ my: 1 }}>
            {field.roleDesc}
          </Typography>
          <Typography variant='body1' sx={{ my: 1, fontWeight: 'bolder' }}>
            Tech Stack
          </Typography>
          <Grid container item xs={12} sx={{ mb: 1 }}>
            {field.techStack.map((stack) => (
              <Chip
                label={stack}
                sx={{
                  m: 1,
                  ml: 0,
                  mt: 0,
                  background: '#2B343D',
                  color: '#fff',
                  fontWeight: '600',
                }}
              />
            ))}
          </Grid>
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body2' sx={{ color: color }}>
              {field.dos} - {field.doe}
            </Typography>
            <Typography variant='body2' sx={{ color: color }}>
              {field.loc}
            </Typography>
          </Stack>
          <Typography variant='body2' sx={{ color: color, mt: 1 }}>
            Achievements/ Tasks
          </Typography>
          <div style={{ paddingLeft: '1.2em' }}>
            <ul style={{ listStyleType: 'square' }}>
              {field.BulletSection.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
