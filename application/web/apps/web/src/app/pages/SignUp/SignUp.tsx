import React from 'react'
import { Box, Button, Container, FormControl, Grid, Input, Stack, TextField, Typography, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ISignUp } from '@web/shared' 

const SignUp = () => {

    const theme = useTheme()
    
    

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
                >
                    <Grid container width='70%' spacing={2} display='flex' alignItems='center' justifyContent='center'>
                        <Grid item xs={12} >
                            <TextField fullWidth label='Username' />
                        </Grid>
                        <Grid item xs={6}  >
                            <TextField fullWidth type='password' label='Password'/>
                        </Grid>
                        <Grid item xs={6}  >
                            <TextField fullWidth type='password' label='Confirm password'/>
                        </Grid>
                    </Grid>
                    <Button type='submit' color="secondary" variant="outlined" sx={{ marginTop: '20px', width: '30%', fontSize: '18px' }}>SignUp</Button>
                </Box>
            </Box>
        </Box >
    )
}

export default SignUp
