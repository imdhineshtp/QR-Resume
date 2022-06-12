import {
  Grid,
  Typography,
  FormControl,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
  Box,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { DateTimePicker } from '@mui/lab';

export default function EditEducation({ onClose, cardTitle, open }) {
  const theme = useTheme();
  console.log('working here');
  const introScheme = Yup.object().shape({
    courseName: Yup.string().required('Course name is required'),
    universityName: Yup.string().required('University name is required'),
    dos: Yup.string().required('Date of Joined is required'),
    doe: Yup.string().notRequired('Date of End is Optional'),
    location: Yup.string().notRequired('Location is Optional'),
    percentage: Yup.string().required('CGPA or Percentage is important'),
  });
  const {
    control,
    handleSubmit,
    getValues,
    setValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(introScheme),
    defaultValues: {
      courseName: '',
      universityName: '',
      dos: '',
      doe: '',
      location: '',
      percentage: '',
    },
  });

  const onSubmit = (data) => {
    console.log('this is data', data);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth='md'
      scroll='paper'
      onClose={onClose}
    >
      <DialogTitle>
        <Box display='flex' alignItems={'center'}>
          <Box flexGrow={1}>{cardTitle}</Box>
          <Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent component={Grid}>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='courseName'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Course Name'
                error={errors.courseName ? true : false}
                helperText={errors.courseName && errors.courseName.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='universityName'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='University Name'
                error={errors.universityName ? true : false}
                helperText={
                  errors.universityName && errors.universityName.message
                }
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='dos'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Date Joined'
                error={errors.dos ? true : false}
                helperText={errors.dos && errors.dos.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='doe'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='End Date'
                error={errors.doe ? true : false}
                helperText={errors.doe && errors.doe.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='location'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Location'
                error={errors.doe ? true : false}
                helperText={errors.doe && errors.doe.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='percentage'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='CGPA / Percentage'
                error={errors.doe ? true : false}
                helperText={errors.doe && errors.doe.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <Stack direction='row' justifyContent={'center'}>
          {' '}
          <Button
            variant='contained'
            sx={{ mr: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
          <Button variant='contained' color='error' onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
