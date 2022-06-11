import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import {
  ProfileAvatar,
  Education,
  Experience,
  Skills,
  Languages,
  Projects,
  Certifications,
} from 'src/components/common/Index';
import { IntroSection, SmSection } from 'src/components/MinimalTemplate';

export default function MinimalTemplate() {
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
  ];
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
  const languages = [
    { langName: 'English', langLevel: 'Limited Proficiency' },
    { langName: 'English', langLevel: 'Limited Proficiency' },
    { langName: 'English', langLevel: 'Limited Proficiency' },
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
  const theme = useTheme();
  return (
    <Page
      title='Minimal Template'
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Grid maxWidth='lg'>
        <Grid container item xs={12}>
          <ProfileAvatar
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            color='#223f5b'
            xs={3}
          />
          <IntroSection />
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <SmSection />
            <Skills
              skills={skills}
              color={'#223f5b'}
              bg={theme.palette.grey[600]}
            />
            <Languages language={languages} color='#223f5b' />
          </Grid>
          <Grid item xs={9}>
            <Education education={fieldNames} color='#223f5b' />
            <Experience
              title={'INTERNSHIP EXPERIENCE'}
              experience={workFields}
              color='#223f5b'
            />
            <Projects
              title={'PERSONAL PROJECTS'}
              data={project}
              color={'#223f5b'}
            />
            <Certifications certificates={certificates} color={'#223f5b'} />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}
