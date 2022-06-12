import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  Stack,
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
} from '@mui/icons-material';

const SmAccounts = [
  { icon: <Instagram />, data: '@imdhineshtp' },
  { icon: <LinkedIn />, data: 'linkedIn.com/imdhineshtp' },
  { icon: <Email />, data: 'imdhineshtp@gmail.com' },
  { icon: <GitHub />, data: 'imdhineshtp' },
  { icon: <CalendarMonth />, data: '02 Jan 2000' },
  { icon: <PhoneIphoneTwoTone />, data: '9876543210' },
  { icon: <LocationOn />, data: 'Paramakudi, India' },
  { icon: <Link />, data: 'www.imdhineshtp.com' },
];
export default function SmSection() {
  const theme = useTheme();
  return (
    <Grid item container xs={2} sx={{ position: 'relative' }}>
      <List>
        {SmAccounts.map((sma) => (
          <ListItem>
            <ListItemIcon>{sma.icon}</ListItemIcon>
            <ListItemText primary={sma.data} />
          </ListItem>
        ))}
      </List>
      <Stack
        direction='row'
        sx={{ position: 'absolute', top: -30, left: 220,  }}
        justifyContent={'flex-end'}
      >
        <IconButton>
          <Mode sx={{ fontSize: '1em' }} />
        </IconButton>
      </Stack>
    </Grid>
  );
}
