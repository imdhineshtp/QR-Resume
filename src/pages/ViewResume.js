import { Grid, Button, Stack, useTheme, Container } from '@mui/material';
import Page from '../components/Page';
import ProfessionalTemplate from './ProfessionalTemplate';
import { useParams } from 'react-router-dom';
import MinimalTemplate from './MinimalTemplate';
export default function ViewResume() {
  const theme = useTheme();
  const { template_name } = useParams();
  return (
    <Page
      title='View Resume'
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Container sx={{ maxWidth: '85%' }}>
        {/* <Stack direction='row' justifyContent={'flex-end'} sx={{ mb: 3 }}>
          <Button variant='contained' color='info' sx={{ mr: 1 }}>
            Clone
          </Button>
          <Button variant='contained' color='error' sx={{ mr: 1 }}>
            Delete
          </Button>
          <Button variant='contained' color='success' sx={{ mr: 1 }}> 
            Save
          </Button>
        </Stack> */}
        {template_name === 'professional-resume' ? (
          <ProfessionalTemplate />
        ) : (
          template_name === 'minimal-resume' && <MinimalTemplate />
        )}
      </Container>
    </Page>
  );
}
