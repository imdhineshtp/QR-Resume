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

export default function EditIntro({ onClose, cardTitle, open }) {
  const theme = useTheme();
  const introScheme = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    role: Yup.string().required('Role is required'),
    desc: Yup.string().notRequired('Description is Optional'),
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
      firstName: '',
      lastName: '',
      role: '',
      desc: '',
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
            name='firstName'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='First Name'
                error={errors.firstName ? true : false}
                helperText={errors.firstName && errors.firstName.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='lastName'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Last Name'
                error={errors.lastName ? true : false}
                helperText={errors.lastName && errors.lastName.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='role'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Role'
                error={errors.role ? true : false}
                helperText={errors.role && errors.role.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='desc'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Description'
                error={errors.desc ? true : false}
                helperText={errors.desc && errors.desc.message}
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
