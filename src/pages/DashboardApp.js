import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import TemplateCard from '../components/TemplateCard';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const template = [
    {
      tempName: 'Professional Template',
      tempCover: '/static/mock-images/products/product_1.jpg',
      link: '/dashboard/view-resume/professional-resume',
    },
    {
      tempName: ' Minimalistic Template',
      tempCover: '/static/mock-images/products/product_3.jpg',
      link: '/dashboard/view-resume/minimal-resume',
    },
  ];

  return (
    <Page title='Dashboard'>
      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Welcome Dhinesh,
        </Typography>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Resume Templates
          </Typography>
          <Grid container spacing={3}>
            {template.map((temp, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={5}
                key={idx}
                component={RouterLink}
                to={temp.link}
              >
                <TemplateCard templateDetail={temp} template={true} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
