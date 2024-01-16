import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import './auth.css'
import google from '../../assets/images/google icon.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fbicon from '../../assets/images/Facebook-f_Logo-Blue-Logo.wine.svg';
import Link from '@mui/material/Link';

import { TableFooter, Divider, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';




const Auth = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box>
                <Box className='auth-container'>
                    <Box className='auth-wrapper'>
                        <Box className='logo-wrapper'>
                            <Box className='logo'>Quora</Box>
                            <Box><b>A place to share knowledge and better understand the world</b></Box>
                        </Box>

                        <Box className='form-wrapper' component="form">

                            <Box className="login-box">
                                <Box className="right">
                                    <h2>Login</h2>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}


                                    >
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            placeholder="your Email"


                                        />
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}


                                    >
                                        <TextField
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="your password"
                                        />


                                    </Box>
                                    <Box className="forget-login-button">
                                        <Link>Forgot Password?</Link>

                                        <Button label="Login" size="medium" variant="contained">Login</Button>
                                    </Box>


                                </Box>
                                <Divider orientation="vertical" />
                                <Box className="left">
                                    <Box className="Terms&Conditions">By continuing you indicate that you agree to Quora's <Link href="">Terms of Service</Link> and <Link href="">Privacy Policy</Link>
                                    </Box>



                                    <Button className="google-button" variant="outlined" type='button'> <img src={google} ></img>Continue With Google  </Button>
                                    <Box>
                                        <Button className="fb-button" variant="outlined" type='button'> <img src={fbicon} ></img>Continue With Google  </Button>
                                    </Box>

                                    <Button variant="text" className="button-signUp" onClick={handleClickOpen}>Sign up with email</Button>
                                    <Dialog
                                        open={open}><DialogTitle>Sign Up</DialogTitle>
                                        <DialogContent>
                                            <Box className="dialog-signup-name" component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                }}>
                                                <TextField
                                                    autoFocus
                                                    required
                                                    id="outlined-required"
                                                    label="Name"
                                            
                                                    fullWidth
                                                    placeholder="What would you like to be called?"
                                                />
                                            </Box>
                                            <Box className="dialog-signup-email" component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25ch'}, 
                                                }}>
                                                <TextField
                                                    autoFocus
                                                    required
                                                    id="outlined-required"
                                                    label="Email"
                                                    fullWidth
                                                    placeholder="your Email"

                                                />
                                            </Box>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit">Next</Button>
                                        </DialogActions>
                                    </Dialog>



                                    <Box className="language">
                                        <Link sx={{ fontSize: 20 }}>हिन्दी <ArrowForwardIosIcon fontSize="extra small" /> </Link>

                                    </Box>
                                    <TableFooter />
                                </Box>



                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}
export default Auth;
