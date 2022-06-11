import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

export default function Skills({ skills, color, bg }) {
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
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
    </Grid>
  );
}
