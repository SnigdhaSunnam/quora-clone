import { Box, TextField, Button, AppBar, Input } from '@mui/material';
import QuoraLogo from '../../assets/images/quora-logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Toolbar from '@mui/material/Toolbar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import '../navbar/navbar.css';
import Popper from '@mui/material/Popper';
import { useState } from 'react';

function Navbar() {
 




 
  
  


    return (
        <Toolbar className="navbar" position='static'>
          <Box className='header-logo'><img src={QuoraLogo}></img></Box>
          <Box className='header-icons'>
            <Box className='header-icon'><HomeOutlinedIcon/></Box>
            <Box className='header-icon'><ListAltOutlinedIcon/></Box>
            <Box className='header-icon'><RateReviewOutlinedIcon/></Box>
            <Box className='header-icon'><Groups2OutlinedIcon/></Box>
            <Box className='header-icon'><NotificationsNoneOutlinedIcon/></Box>
          </Box>
          <Box className= 'header-input'>
          <Box>
          
              <SearchOutlinedIcon/>
          
            <Input
              placeholder="Search Quora" type='text' 
            />
          </Box>                      
          </Box>
          <Box className='header-remain'>
            <Box className='header-avatar' ><Avatar/></Box>
            <LanguageIcon/>
            <Button  >Add Question</Button>
     
          </Box>

      
        </Toolbar>
    )
}

export default Navbar;