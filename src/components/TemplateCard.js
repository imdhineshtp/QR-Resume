import { Card, CardContent, Grid, Button, Typography, useTheme, Stack, Box } from '@mui/material';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function TemplateCard() {
  const theme = useTheme();
  return (
    <Card sx={{ background: theme.palette.grey[500_24], postion: 'relative' }}>
      <img src="/static/mock-images/products/product_1.jpg" alt="" />
      <CardContent
        sx={{ py: 0, pt: 2, m: 0, position: 'absolute', bottom: 0, background: 'rgba(256,256,256,0.4)', width: '100%' }}
      >
        <Grid item xs={12}>
          {/* <Typography align="justify" sx={{ py: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor
            unde,
          </Typography> */}
          <Stack direction="row" justifyContent={'center'} alignItems={'center'} spacing={2} sx={{ mb: 0 }}>
            <Typography align="left" variant="h4">
              {' '}
              Template Name
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" color="success">
              Download
            </Button>
            <Button variant="contained" color="success">
              Share
            </Button>
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
}
