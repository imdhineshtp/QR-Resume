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

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome Dhinesh,
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={5}>
            <TemplateCard />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TemplateCard />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
