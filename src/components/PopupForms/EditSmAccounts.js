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
import { DateTimePicker } from '@mui/lab';
import * as Yup from 'yup';

export default function EditSmAccounts({ onClose, cardTitle, open }) {
  const theme = useTheme();
  let currentDate = new Date();
  const introScheme = Yup.object().shape({
    instagram: Yup.string().notRequired,
    linkedIn: Yup.string().notRequired,
    github: Yup.string().notRequired,
    website: Yup.string().notRequired,
    location: Yup.string().notRequired,
    twitter: Yup.string().notRequired,
    phone: Yup.string().notRequired,
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
      instagram: '',
      linkedIn: '',
      github: '',
      website: '',
      location: '',
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
            name='instagram'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Instagram'
                error={errors.instagram ? true : false}
                helperText={errors.instagram && errors.instagram.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='linkedIn'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='LinkedIn'
                error={errors.linkedIn ? true : false}
                helperText={errors.linkedIn && errors.linkedIn.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='github'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Github'
                error={errors.github ? true : false}
                helperText={errors.github && errors.github.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='website'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Website'
                error={errors.website ? true : false}
                helperText={errors.website && errors.website.message}
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
                error={errors.location ? true : false}
                helperText={errors.location && errors.location.message}
              />
            )}
            control={control}
          />
        </FormControl>
        <FormControl required sx={{ width: '100%', mb: 2 }}>
          <Controller
            name='twitter'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Twitter'
                error={errors.twitter ? true : false}
                helperText={errors.twitter && errors.twitter.message}
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
