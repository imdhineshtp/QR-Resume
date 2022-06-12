import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Mode, Add, Delete } from '@mui/icons-material';
export default function Languages({ language, color }) {
  const { template_name } = useParams();
  return (
    <Grid item xs={12} sx={{ mb: 2, position: 'relative' }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        LANGUAGES
      </Typography>
      <Grid container xs={12}>
        {language.map((lang) => (
          <Grid
            item
            xs={template_name === 'minimal-resume' ? 12 : 6}
            sx={{ position: 'relative' }}
          >
            <ListItemText
              primary={lang.langName}
              secondary={
                <Typography variant='caption' color={color}>
                  {lang.langLevel}
                </Typography>
              }
            />
            <Stack
              direction='row'
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                justifyContent: 'flex-end',
              }}
            >
              <IconButton>
                <Mode sx={{ fontSize: '0.8em' }} />
              </IconButton>
              <IconButton>
                <Delete sx={{ fontSize: '0.8em' }} />
              </IconButton>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction='row'
        sx={{ position: 'absolute', top: 0, right: 0 }}
        justifyContent={'flex-end'}
      >
        <IconButton>
          <Add sx={{ fontSize: '1em' }} />
        </IconButton>
      </Stack>
    </Grid>
  );
}
