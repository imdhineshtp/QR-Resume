import { Grid, useTheme, Typography, ListItem, ListItemText, Stack, Chip } from '@mui/material';

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
      BulletSection: { 'Custom bullet section name': ['bullet point one', 'bullet point two', 'bullet point three'] },
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
      BulletSection: ['bullet point one', 'bullet point two', 'bullet point three'],
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
      BulletSection: ['bullet point one', 'bullet point two', 'bullet point three'],
    },
  ];
  return (
    <Grid item xs={6}>
      <Grid item xs={12}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          EDUCATION
        </Typography>

        {fieldNames.map((field) => (
          <Grid item xs={12} sx={{ my: 2 }}>
            <Typography variant="h5">{field.courseName}</Typography>
            <Typography variant="body1">{field.university}</Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: '#eb453d' }}>
                {field.dos} - {field.doe}
              </Typography>
              <Typography variant="body2" sx={{ color: '#eb453d' }}>
                {field.loc}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: '#eb453d' }}>
              CGPA / Percentage : {field.cgpa}
            </Typography>
          </Grid>
        ))}

        {/* <Typography variant="h6" color="text.primary">
          Bsc in Computer Science
        </Typography> */}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="#EB453D" sx={{ textDecoration: 'underline' }}>
          WORK EXPERIENCE
        </Typography>
        {workFields.map((field) => (
          <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
            <Typography variant="h5">{field.roleName}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              {field.companyName}
            </Typography>
            <Typography variant="body2" sx={{ my: 1 }}>
              {field.roleDesc}
            </Typography>
            <Typography variant="body1" sx={{ my: 1, fontWeight: 'bolder' }}>
              Tech Stack
            </Typography>
            <Grid container item xs={12} sx={{ mb: 1 }}>
              {field.techStack.map((stack) => (
                <Chip
                  label={stack}
                  sx={{ m: 1, ml: 0, mt: 0, background: '#2B343D', color: '#fff', fontWeight: '600' }}
                />
              ))}
            </Grid>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: '#eb453d' }}>
                {field.dos} - {field.doe}
              </Typography>
              <Typography variant="body2" sx={{ color: '#eb453d' }}>
                {field.loc}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: '#eb453d', mt: 1 }}>
              Achievements/ Tasks
            </Typography>
            <div style={{ paddingLeft: '1.2em' }}>
              <ul style={{ listStyleType: 'square' }}>
                {field.BulletSection.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
