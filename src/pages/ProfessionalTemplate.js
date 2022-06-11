import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import { IntroSection, SmSection, TemplateBody } from '../components/ProfessionalTemplate';

export default function ProfessionalTemplate() {
  const theme = useTheme();
  return (
    <Page title="Professional Template">
      <Container maxWidth="lg">
        <IntroSection />
        <SmSection />
        <TemplateBody/>
      </Container>
    </Page>
  );
}
