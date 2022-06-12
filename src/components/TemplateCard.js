import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  useTheme,
  Stack,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  FormControl,
  TextField,
} from '@mui/material';
import { Download, Share, Add, Close } from '@mui/icons-material';

export default function TemplateCard({ templateDetail }) {
  const theme = useTheme();

  return (
    <Card sx={{ background: theme.palette.grey[500_24], postion: 'relative' }}>
      <img src={templateDetail.tempCover} alt='' />
      <CardContent
        sx={{
          py: 0,
          pt: 2,
          m: 0,
          position: 'absolute',
          bottom: 0,
          background: 'rgba(256,256,256,0.8)',
          width: '100%',
        }}
      >
        <Grid item xs={12}>
          <Stack
            direction='row'
            justifyContent={'center'}
            alignItems={'center'}
            spacing={2}
            sx={{ mb: 0 }}
          >
            <Typography align='left' variant='h4' color={'#333'}>
              {' '}
              {templateDetail.tempName}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant='contained'
              color='warning'
              startIcon={<Download />}
            >
              Download
            </Button>
            <Button variant='contained' color='warning' startIcon={<Share />}>
              Share
            </Button>
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
}
