import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

export default function InterestXHobbies({ data, title }) {
  return (
    <Grid item xs={12}>
      <Typography
        variant='h4'
        color='#EB453D'
        sx={{ textDecoration: 'underline' }}
      >
        {title}
      </Typography>
      <Grid container xs={12} sx={{ mt: 1 }}>
        {data.map((ints) => (
          <Chip
            label={ints}
            variant='outlined'
            sx={{ borderRadius: 1, mr: 1.5 }}
          />
        ))}
      </Grid>
    </Grid>
  );
}
