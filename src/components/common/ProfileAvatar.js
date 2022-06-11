import { Grid, Typography, useTheme, Box, Avatar } from '@mui/material';

export default function ProfileAvatar({ color, xs, ...sx }) {
  return (
    <Grid
      item
      xs={xs}
      sx={{
        display: 'flex',
      }}
      {...sx}
    >
      <Avatar
        alt='user'
        src='/static/mock-images/products/product_1.jpg'
        sx={{ height: '8em', width: '8em', border: `0.3em solid ${color}` }}
      />
    </Grid>
  );
}
