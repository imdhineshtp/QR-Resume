import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
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
    <Grid item container xs={2}>
      <List>
        {SmAccounts.map((sma) => (
          <ListItem>
            <ListItemIcon>{sma.icon}</ListItemIcon>
            <ListItemText primary={sma.data} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
