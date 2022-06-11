import { Grid, useTheme, Typography, ListItem, ListItemText, Stack, Chip } from '@mui/material';

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
      projectName: 'Project name',
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
      projectName: 'Project name',
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

  const interests = ['interest one', 'interest two', 'interest three', 'interest four'];
  return (
    <Grid item xs={6}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          SKILLS
        </Typography>
        <Grid container item sx={{ display: 'flex' }}>
          {skills.map((skill) => (
            <Chip
              label={<Typography sx={{ color: '#fff' }}>{skill}</Typography>}
              sx={{ m: 1, ml: 0, backgroundColor: '#2B343D', px: 1, borderRadius: 1 }}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          PERSONAL PROJECT
        </Typography>
        {project.map((proj) => (
          <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: '800', mt: 1 }}>
              {' '}
              {proj.projectName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#eb453d' }}>
              {proj.dos} - {proj.doe}
            </Typography>
            <Typography variant="body2" sx={{ color: '#eb453d' }}>
              Description
            </Typography>
            <div style={{ paddingLeft: '1.2em' }}>
              <ul style={{ listStyleType: 'square' }}>
                {proj.bulletSection.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </div>
            <Typography variant="body1" sx={{ my: 0.5, fontWeight: '600' }}>
              Tech Stack
            </Typography>
            <Grid container item xs={12} sx={{ mb: 0.5 }}>
              {proj.techStack.map((stack) => (
                <Chip
                  label={stack}
                  sx={{ mr: 1, ml: 0, mt: 0, background: '#2B343D', color: '#fff', fontWeight: '600' }}
                />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          CERTIFICATES
        </Typography>
        {certificates.map((cert) => (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: '800', mt: 1 }}>
              {cert.certiName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#eb453d' }}>
              {cert.dos} - {cert.doe}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cert.desc}
            </Typography>
            <Typography variant="caption" color="#eb453d" component={'a'} href={cert.link} target="_blank">
              Certification link
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          Languages
        </Typography>
        <Grid container xs={12}>
          {languages.map((lang) => (
            <Grid item xs={6}>
              <ListItemText
                primary={lang.langName}
                secondary={
                  <Typography variant="caption" color="#eb453d">
                    {lang.langLevel}
                  </Typography>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          Interest
        </Typography>
        <Grid container xs={12} sx={{ mt: 1 }}>
          {interests.map((ints) => (
            <Chip label={ints} variant="outlined" sx={{ borderRadius: 1, mr: 1.5 }} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
