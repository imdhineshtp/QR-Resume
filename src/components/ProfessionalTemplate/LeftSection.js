import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

import { Education, Experience } from '../common/Index';
export default function LeftSection() {
  const theme = useTheme();
  const fieldNames = [
    {
      courseName: 'Course Name',
      university: 'University name',
      dos: 'DOS',
      doe: 'DOE',
      loc: 'Location',
      cgpa: '8.0',
      BulletSection: {
        'Custom bullet section name': [
          'bullet point one',
          'bullet point two',
          'bullet point three',
        ],
      },
    },
    {
      courseName: 'Course Name',
      university: 'University name',
      dos: 'DOS',
      doe: 'DOE',
      loc: 'Location',
      cgpa: '8.0',
    },
  ];
  const workFields = [
    {
      roleName: 'Role Name',
      companyName: 'CompanyName',
      roleDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      dos: 'DOS',
      doe: 'DOE',
      loc: 'Location',
      refName: 'referName',
      refno: '9876543210',
      techStack: ['stack one ', 'stack two', 'stack three', 'stack four'],
      BulletSection: [
        'bullet point one',
        'bullet point two',
        'bullet point three',
      ],
    },
    {
      roleName: 'Role Name',
      companyName: 'CompanyName',
      roleDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      dos: 'DOS',
      doe: 'DOE',
      loc: 'Location',
      refName: 'referName',
      refno: '9876543210',
      techStack: ['stack one ', 'stack two', 'stack three', 'stack four'],
      BulletSection: [
        'bullet point one',
        'bullet point two',
        'bullet point three',
      ],
    },
  ];
  return (
    <Grid item xs={6}>
      <Education education={fieldNames} color='#eb453d' />
      <Experience
        title='Experiences'
        experience={workFields}
        color={'#EB453D'}
      />
    </Grid>
  );
}
