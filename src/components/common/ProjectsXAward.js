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
import { Add, Mode, Delete } from '@mui/icons-material';
export default function ProjectsXAward({ title, data, color }) {
  return (
    <Grid item xs={12} sx={{ position: 'relative' }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        {title}
      </Typography>
      {data.map((proj) => (
        <Grid item xs={12} sx={{ mt: 2, mb: 3, position: 'relative' }}>
          <Typography variant='h6' sx={{ fontWeight: '800', mt: 1 }}>
            {' '}
            {proj.name}
          </Typography>
          <Typography variant='body2' sx={{ color: color }}>
            {proj.dos} {title === 'PERSONAL PROJECTS' && ' - ' + proj.doe}
          </Typography>
          <Typography variant='body2' sx={{ color: color }}>
            Description
          </Typography>
          <div style={{ paddingLeft: '1.2em' }}>
            <ul style={{ listStyleType: 'square' }}>
              {proj.bulletSection.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>
          </div>
          {title === 'PERSONAL PROJECTS' && (
            <>
              <Typography variant='body1' sx={{ my: 0.5, fontWeight: '600' }}>
                Tech Stack
              </Typography>
              <Grid container item xs={12} sx={{ mb: 0.5 }}>
                {proj.techStack.map((stack) => (
                  <Chip
                    label={stack}
                    sx={{
                      mr: 1,
                      ml: 0,
                      mt: 0,
                      background: '#2B343D',
                      color: '#fff',
                      fontWeight: '600',
                    }}
                  />
                ))}
              </Grid>
            </>
          )}
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
