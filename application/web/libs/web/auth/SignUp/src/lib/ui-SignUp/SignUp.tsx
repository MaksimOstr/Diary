import React from 'react'
import { Box, Button, Container, FormControl, Grid, Input, Stack, TextField, Typography, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ISignUp } from '@web/shared'
import { error } from 'console'

export const SignUp:React.FC<any> = () => {

    const theme = useTheme()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset,
        watch
    } = useForm<ISignUp>({
        mode: 'onBlur',
    })

    const onSubmit = (data: ISignUp) => {
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
                sx={{ backgroundColor: 'white' }}
                borderRadius='15px'
                maxWidth='90%'
                padding='2% 2%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <Typography marginBottom='10%' variant='h2'>SignUp</Typography>

                <Box
                    width='100%'
                    component='form'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid container width='70%' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label={errors?.Username ? errors.Username.message : 'Username'}
                                color='secondary'
                                {...register('Username', {
                                    required: 'This field is required!',
                                    minLength: {
                                        value: 4,
                                        message: 'Minimum 4 characters'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]/,
                                        message: 'Please enter a valid email',
                                    },
                                })}
                                error={errors.Username ? true : false}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type='password'
                                label={errors?.Password ? errors.Password.message : 'Password'}
                                color='secondary'
                                {...register('Password', {
                                    required: 'This field is required!',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 characters'
                                    }
                                })}
                                error={errors.Password ? true : false}
                            />
                        </Grid>
                        <Grid item xs={6}  >
                            <TextField
                                fullWidth
                                type='password'
                                label={errors?.ConfirmPassword ? errors.ConfirmPassword.message : 'Confirm password'}
                                color='secondary'
                                {...register('ConfirmPassword', {
                                    required: 'This field is required!',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 characters'
                                    },
                                    validate: value => {
                                        if (watch('Password') !== value) {
                                            return "Your passwords do no match";
                                        }
                                    }
                                })}
                                error={errors.ConfirmPassword ? true : false}
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' color="secondary" variant="outlined" sx={{ marginTop: '20px', width: '30%', fontSize: '18px' }}>SignUp</Button>
                </Box>
            </Box>
        </Box >
    )
}

export default SignUp
