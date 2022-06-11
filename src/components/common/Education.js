import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

export default function Education({ education, color }) {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        EDUCATION
      </Typography>

      {education.map((field) => (
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography variant='h5'>{field.courseName}</Typography>
          <Typography variant='body1'>{field.university}</Typography>
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body2' sx={{ color: color }}>
              {field.dos} - {field.doe}
            </Typography>
            <Typography variant='body2' sx={{ color: color }}>
              {field.loc}
            </Typography>
          </Stack>
          <Typography variant='body2' sx={{ color: color }}>
            CGPA / Percentage : {field.cgpa}
          </Typography>
        </Grid>
      ))}

      {/* <Typography variant="h6" color="text.primary">
          Bsc in Computer Science
        </Typography> */}
    </Grid>
  );
}
