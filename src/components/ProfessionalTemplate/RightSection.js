import {
  Grid,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';

import {
  Skills,
  Awards,
  Languages,
  Interest,
  Certifications,
} from '../common/Index';
export default function RightSection() {
  const theme = useTheme();
  const skills = [
    'skill1',
    'skill2',
    'skill3',
    'skill4',
    'skill5',
    'skill6',
    'skill7',
    'skill8',
    'skill9',
    'skill10',
    'skill11',
  ];
  const project = [
    {
      name: 'Project name',
      dos: 'DOS',
      doe: 'DOE',
      bulletSection: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
        'bullet point two',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
      ],
      techStack: ['stack one ', 'stack two', 'stack three', 'stack four'],
    },
    {
      name: 'Project name',
      dos: 'DOS',
      doe: 'DOE',
      bulletSection: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
        'bullet point two',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
      ],
      techStack: ['stack one ', 'stack two', 'stack three', 'stack four'],
    },
  ];
  const certificates = [
    {
      certiName: 'Certification Name',
      dos: 'DOS',
      doe: 'DOE',
      link: 'https://google.com',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
    },
    {
      certiName: 'Certification Name',
      dos: 'DOS',
      doe: 'DOE',
      link: 'https://google.com',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, harum? Voluptatibus numquam harum dolor unde,Lorem',
    },
  ];

  const languages = [
    { langName: 'English', langLevel: 'Limited Proficiency' },
    { langName: 'English', langLevel: 'Limited Proficiency' },
    { langName: 'English', langLevel: 'Limited Proficiency' },
  ];

  const data = [
    'interest one',
    'interest two',
    'interest three',
    'interest four',
  ];
  return (
    <Grid item xs={6}>
      <Skills skills={skills} color='#eb453d' bg={'#2B343D'} />
      <Awards title={'AWARDS'} data={project} color='#eb453d' />
      <Certifications certificates={certificates} color={'#eb453d'} />
      <Languages language={languages} color='#eb453d' />
    </Grid>
  );
}
