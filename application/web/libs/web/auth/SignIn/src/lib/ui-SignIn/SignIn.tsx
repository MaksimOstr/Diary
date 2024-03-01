import React from 'react'
import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { formBodyProps, submitButtonProps } from '../features-SignIn/styles/styles';
import { ISignIn } from '@web/shared'
import { formSchema } from '../features-SignIn/validation/signInSchema';

export const SignIn: React.FC<any> = () => {

  const theme = useTheme()
  const { control, handleSubmit, reset } = useForm<ISignIn>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    }
  })
  const { errors } = useFormState({
    control
  })
  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default }}
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        sx={ formBodyProps }
        borderRadius='15px'
        padding='2% 2%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Typography marginBottom='10%' variant='h2'>Sign In</Typography>
        <Box
          width='100%'
          rowGap={3}
          component='form'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name='username'
            render={({ field }) => (
              <TextField
                fullWidth
                color='secondary'
                label='Username'
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field }) => (
              <TextField
                fullWidth
                color='secondary'
                label='Password'
                type='password'
                error={!!errors.password}
                onChange={(e) => field.onChange(e)}
                value={field.value}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button type='submit' color="secondary" variant="outlined" sx={ submitButtonProps }>Sign Up</Button>
        </Box>
      </Box>
    </Box >
  )
}

export default SignIn
