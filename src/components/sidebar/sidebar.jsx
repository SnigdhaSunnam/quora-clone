import React from 'react';
import { Box } from '@mui/material';
import Cooking from '../../assets/cooking.jpeg';
import Psychology from '../../assets/psycology.jpeg';
import Health from '../../assets/health.jpeg';
import Technology from '../../assets/technology.jpeg';
import Science from '../../assets/science.jpeg';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import '../sidebar/sidebar.css';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BottomNavigation from '@mui/material/BottomNavigation';


function sidebar() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const breadcrumbItems = [{ text: 'About', href: '/' },{ text: 'Careers', href: '/' },{ text: 'Privacy', href: '/' },{ text: 'Terms', href: '/' },{ text: 'Contact', href: '/' },{ text: 'Languages', href: '/' },{ text: 'Your add choices', href: '/' }, { text: 'Press', href: '/material-ui/getting-started/installation/' }, ];
const breadcrumbs = breadcrumbItems.map((item, index) => (
    <Link key={index} underline="hover" color="inherit" href={item.href} onClick={handleClick} > {item.text} </Link>
));
  return (
    <Box className = 'sidebar'>   
    <p><Typography className='sidebarOption'> <AddIcon /><p className='text'>Discover Spaces</p> </Typography></p>
    <Box className='sidebarOption'><img src={Cooking} ></img><p className='text'>Cooking</p></Box>
    <Box className='sidebarOption'><img src={Psychology}></img><p className='text'>Psychology</p></Box>
    <Box className='sidebarOption'><img src={Health}></img><p className='text'>Health</p></Box>
    <Box className='sidebarOption'><img src={Technology}></img><p className='text'>Technology</p></Box>
    <Box className='sidebarOption'><img src={Science}></img><p className='text'>Science</p></Box> 
    <BottomNavigation className="footer">
                            <Breadcrumbs separator="•" aria-label="breadcrumb"> {breadcrumbs}</Breadcrumbs>
                        </BottomNavigation>
    </Box>

    

  )
}

export default sidebar
