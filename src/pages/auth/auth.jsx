
import { TextField, Box, TableFooter, Button, Modal } from '@mui/material';
import './auth.css'
import google from '../../assets/images/google icon.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fbicon from '../../assets/images/Facebook-f_Logo-Blue-Logo.wine.svg';
import Link from '@mui/material/Link';
import { useState } from 'react';
import QuoraLogo from '../../assets/images/quora-logo.png';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SignupModal from '../../components/modal/modal';
import authService from "../../service/authService";



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
    const breadcrumbItems = [{ text: 'About', href: '/' },{ text: 'Careers', href: '/' },{ text: 'Privacy', href: '/' },{ text: 'Terms', href: '/' },{ text: 'Contact', href: '/' },{ text: 'Languages', href: '/' },{ text: 'Your add choices', href: '/' }, { text: 'Press', href: '/material-ui/getting-started/installation/' }, ];
    const breadcrumbs = breadcrumbItems.map((item, index) => (
        <Link key={index} underline="hover" color="inherit" href={item.href} onClick={handleClick} > {item.text} </Link>
    ));
    const validationSignUpSchema = yup.object({
        name:yup.string().trim().min(2,"Your name needs to be at least 2 characters long.").required("name is required"),
        email:yup.string().email("The email address you entered is not valid.").required("email is required"),
        password:yup.string().min(5, 'Password should be of minimum 5 characters length').required('Password is required').trim()
});

const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
    },
    validationSchema: validationSignUpSchema,
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        handleLogin(values)
        
    },

})
const handleLogin = (values) => {
    authService.login(values.email, values.password).then((res) => {
        localStorage.setItem('token', res?.data?.token)
        setTimeout(() => {
           
        }, 100);
    })
}

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
                                    
                                </Box>
                                <Box className="right">
                                    <h2 className='login-title'>Login</h2>
                                    <Box component="form" sx={{ '& .MuiTextField-root': { my: 1, width: '35ch' }, }} >
                                        <label>Email</label><br />
                                        <TextField required id="outlined-required" placeholder="your Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
                                    </Box>
                                    <Box component="form" sx={{ '& .MuiTextField-root': { my: 1, width: '35ch' }, }}>
                                        <label>Password</label>
                                        <br></br>
                                        <TextField id="outlined-password-input" type="password" autoComplete="current-password" placeholder="your password"  name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
                                    </Box>
                                    <Box className="forget-login-button">
                                        <Link>Forgot Password?</Link>
                                        <Button label="Login" size="medium" variant="contained" type="Button" onClick={formik.handleSubmit}>Login</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="language"> <Link sx={{ fontSize: 20 }}>हिन्दी <ArrowForwardIosIcon fontSize="extra small" /> </Link></Box><TableFooter />
                        </Box>
                        <BottomNavigation className="about-quora">
                            <Breadcrumbs separator="•" aria-label="breadcrumb"> {breadcrumbs}</Breadcrumbs>
                        </BottomNavigation>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <SignupModal handleClose={handleClose}/>
                        </Modal>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Auth;
