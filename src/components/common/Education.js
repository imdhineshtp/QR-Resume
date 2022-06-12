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
import { Mode, Delete, Add } from '@mui/icons-material';
import { useState } from 'react';
import EditEducation from '../PopupForms/EditEducations';

export default function Education({ education, color }) {
  const [open, setOpen] = useState(false);
  return (
    <Grid item xs={12} sx={{ mt: 2, position: 'relative' }}>
      <Typography
        variant='h4'
        color={color}
        sx={{ textDecoration: 'underline' }}
      >
        EDUCATION
      </Typography>

      {education.map((field) => (
        <Grid item xs={12} sx={{ my: 2, position: 'relative' }}>
          <Typography variant='h5'>{field.courseName}</Typography>
          <Typography variant='body1'>{field.university}</Typography>
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body2' sx={{ color: color }}>
              {field.dos} - {field.doe}
            </Typography>
            <Typography variant='body2' sx={{ color: color }}>
              {field.loc}
            </Typography>
          </Stack>
          <Typography variant='body2' sx={{ color: color }}>
            CGPA / Percentage : {field.cgpa}
          </Typography>
          <Stack
            direction='row'
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={() => setOpen(true)}>
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
        <IconButton onClick={() => setOpen(true)}>
          <Add sx={{ fontSize: '1em' }} />
        </IconButton>
      </Stack>

      {open && (
        <EditEducation
          open={open}
          onClose={() => setOpen(false)}
          cardTitle={'Education'}
        />
      )}
    </Grid>
  );
}
