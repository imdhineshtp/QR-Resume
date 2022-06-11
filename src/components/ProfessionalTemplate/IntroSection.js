import { Grid, Typography, useTheme, Box, Avatar } from '@mui/material';

export default function IntroSection() {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={12}
      // spacing={4}
      sx={{ py: 3, backgroundColor: '#2B343D', px: 4, justifyContent: 'space-between' }}
    >
      <Grid item xs={10}>
        <Typography variant="h3" sx={{ fontWeight: 500, pb: 0.5, color: '#fff' }}>
          Dhinesh
        </Typography>
        <Typography variant="h6" color="#EB453D" sx={{ fontWeight: 'normal', py: 0.5 }}>
          Full Stack Developer
        </Typography>
        <Typography sx={{ color: '#fff' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor
          unde,Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum
          dolor unde,Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam
          harum dolor unde,Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus
          numquam harum dolor unde,
        </Typography>
      </Grid>
      <Grid
        item
        xs={1.5}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Avatar
          alt="user"
          src="/static/mock-images/products/product_1.jpg"
          sx={{ height: '8em', width: '8em', border: '0.3em solid #eb453d' }}
        />
      </Grid>
    </Grid>
  );
}
