import { Grid, useTheme } from '@mui/material';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function TemplateBody() {
  const theme = useTheme();
  return (
    <Grid container item xs={12} spacing={3} sx={{ py: 2, px: 4 }}>
      <LeftSection />
      <RightSection />
    </Grid>
  );
}
