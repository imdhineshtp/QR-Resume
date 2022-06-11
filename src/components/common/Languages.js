import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

export default function Languages({ language, color }) {
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        LANGUAGES
      </Typography>
      <Grid container xs={12}>
        {language.map((lang) => (
          <Grid item xs={6}>
            <ListItemText
              primary={lang.langName}
              secondary={
                <Typography variant='caption' color={color}>
                  {lang.langLevel}
                </Typography>
              }
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
