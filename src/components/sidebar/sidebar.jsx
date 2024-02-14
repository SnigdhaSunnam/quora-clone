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




function sidebar() {
  return (
    <Box className = 'sidebar'>   
    <p><Typography className='sidebarOption'> <AddIcon /><p className='text'>Discover Spaces</p> </Typography></p>
    <Box className='sidebarOption'><img src={Cooking} ></img><p className='text'>Cooking</p></Box>
    <Box className='sidebarOption'><img src={Psychology}></img><p className='text'>Psychology</p></Box>
    <Box className='sidebarOption'><img src={Health}></img><p className='text'>Health</p></Box>
    <Box className='sidebarOption'><img src={Technology}></img><p className='text'>Technology</p></Box>
    <Box className='sidebarOption'><img src={Science}></img><p className='text'>Science</p></Box> 
    </Box>

    

  )
}

export default sidebar
