import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  IconButton,
} from '@mui/material';
import {
  Instagram,
  LinkedIn,
  Email,
  LocationOn,
  GitHub,
  CalendarMonth,
  PhoneIphoneTwoTone,
  Link,
  Mode,
  Twitter,
} from '@mui/icons-material';
import { useState } from 'react';
import EditSmAccounts from '../PopupForms/EditSmAccounts';

export default function SmSection() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        py: 3,
        px: 4,
        backgroundColor: '#222',
        color: 'white',
        position: 'relative',
      }}
    >
      <Grid item xs={4}>
        <List disablePadding>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <Instagram
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  Imdhineshtp
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <Link
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  www.imdhineshtp.com
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <List disablePadding>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <LocationOn
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  Paramakudi, India
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <Twitter
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  imdhineshtp
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <List disablePadding>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <LinkedIn
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  linkedin.com/in/imdhineshtp
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <GitHub
                color='#fff'
                sx={{ height: '1.2em', width: '1.2em', color: '#fff' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant='subtitle1' sx={{ fontWeight: 'normal' }}>
                  github.com/imdhineshtp
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
      <IconButton
        sx={{ position: 'absolute', top: 10, right: 10 }}
        onClick={() => setOpen(true)}
      >
        <Mode sx={{ color: '#fff' }} />
      </IconButton>
      {open && (
        <EditSmAccounts
          cardTitle={'Contact Details'}
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
    </Grid>
  );
}
