import React from 'react'
import Card from '@mui/material/Card';
import '../cards/card.css';
import { Box, TextField, Button } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green} from '@mui/material/colors';
import Divider from '@mui/material/Divider';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';




function Cards() {
   
        
          
  return (
    <Box  className = 'card' sx={{ minWidth: 500, width:700 }}>
      <Card  variant="outlined">
      <CardContent className='card-content-bar'>
          <Box className='header-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar></Box>
           
              <Box className='search-bar' fullWidth  id="fullWidth">What do you want to ask or share?</Box>
              </CardContent>
    <Box className='card-options'> 

    <Button className='card-buttons' ><RateReviewOutlinedIcon /><p className='text'>Ask</p></Button>
    <Divider orientation="vertical" flexItem className="divider"/>
    <Button className='card-buttons' ><HelpOutlineOutlinedIcon /><p className='text'>Answer</p></Button>
    <Divider orientation="vertical" flexItem className="divider"/>
    <Button className='card-buttons' ><CreateOutlinedIcon /><p className='text'>Post</p></Button>
    </Box>
   
    
           </Card>
      
    </Box>
      
    
  )
}

export default Cards
