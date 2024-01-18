
import { TextField, Box, TableFooter, Button } from '@mui/material';
import './auth.css'
import google from '../../assets/images/google icon.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fbicon from '../../assets/images/Facebook-f_Logo-Blue-Logo.wine.svg';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import QuoraLogo from '../../assets/images/quora-logo.png';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';



const Auth = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}> About</Link>,
        <Link underline="hover" key="2" color="inherit" href="/" onClick={handleClick}>Careers</Link>,
        <Link underline="hover" key="3" color="inherit" href="/" onClick={handleClick}>Privacy</Link>,
        <Link underline="hover" key="4" color="inherit" href="/" onClick={handleClick}> Terms</Link>,
        <Link underline="hover" key="5" color="inherit" href="/" onClick={handleClick}>Contact</Link>,
        <Link underline="hover" key="6" color="inherit" href="/" onClick={handleClick}>Languages</Link>,
        <Link underline="hover" key="7" color="inherit" href="/" onClick={handleClick}>Your add choices</Link>,
        <Link underline="hover" key="8" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick}>Press</Link>,
        <Typography key="9" color="text.primary">© Quora, Inc. 2024</Typography>,
    ];

    return (
        <>
            <Box>
                <Box className='auth-container'>
                    <Box className='auth-wrapper'>
                        <Box className='logo-wrapper'>
                            <Box className='logo'><img src={QuoraLogo}></img></Box>
                            <Box><b>A place to share knowledge and better understand the world</b></Box>
                        </Box>
                        <Box className='form-wrapper' component="form">
                            <Box className="login-box">
                                <Box className="left">
                                    <Box className="terms-condition">By continuing you indicate that you agree to Quora's <Link href="">Terms of Service</Link> and <Link href="">Privacy Policy</Link></Box>
                                    <Button className="google-button" variant="outlined" type='button'> <img src={google} ></img>Continue With Google  </Button>
                                    <Box><Button className="fb-button" variant="outlined" type='button'> <img src={fbicon} ></img>Continue With Google  </Button></Box>
                                    <Button variant="text" className="button-signUp" onClick={handleClickOpen}>Sign up with email</Button>
                                    <Dialog className="dialog"
                                        open={open}><DialogTitle>Sign Up</DialogTitle>
                                        <DialogContent>
                                            <Box className="dialog-signup-name" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
                                         <label>Name</label><br />
                                        <TextField required id="outlined-required" placeholder="your Email"  fullWidth/> 
                                            </Box>
                                            <Box className="dialog-signup-email" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
                                            <label>Email</label><br />
                                        <TextField required id="outlined-required" placeholder="your Email"  fullWidth/> 
                                            </Box>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit">Next</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                                <Box className="right">
                                    <h2 className='login-title'>Login</h2>
                                    <Box component="form" sx={{ '& .MuiTextField-root': { my: 1, width: '35ch' }, }} >
                                        <label>Email</label><br />
                                        <TextField required id="outlined-required" placeholder="your Email" />
                                    </Box>
                                    <Box component="form" sx={{ '& .MuiTextField-root': { my: 1, width: '35ch' }, }}>
                                        <label>Password</label>
                                        <br></br>
                                        <TextField id="outlined-password-input" type="password" autoComplete="current-password" placeholder="your password" />
                                    </Box>
                                    <Box className="forget-login-button">
                                        <Link>Forgot Password?</Link>
                                        <Button label="Login" size="medium" variant="contained">Login</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="language"> <Link sx={{ fontSize: 20 }}>हिन्दी <ArrowForwardIosIcon fontSize="extra small" /> </Link></Box><TableFooter />
                        </Box>
                        <BottomNavigation className="about-quora">
                            <Breadcrumbs separator="•" aria-label="breadcrumb"> {breadcrumbs}</Breadcrumbs>
                        </BottomNavigation>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Auth;
