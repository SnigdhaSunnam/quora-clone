import React from 'react'
import Card from '@mui/material/Card';
import '../cards/card.css';
import { Box, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import QuestionModal from '../questionModal/questionModal';






function Cards() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
   
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
   
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };   
          
  return (
    <Box  className = 'card' sx={{ minWidth: 500, width:700 }}>
      <Card  variant="outlined">
      <CardContent className='card-content-bar'>
          <Box className='header-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar></Box>
           
              <Box className='search-bar' fullWidth  id="fullWidth" onClick={handleOpen} >What do you want to ask or share?</Box>
              </CardContent>
    <Box className='card-options'> 

    <Button className='card-buttons'onClick={handleOpen} ><RateReviewOutlinedIcon /><p className='text'>Ask</p></Button>
    <Divider orientation="vertical" flexItem className="divider"/>
    <Button className='card-buttons' ><HelpOutlineOutlinedIcon /><p className='text'>Answer</p></Button>
    <Divider orientation="vertical" flexItem className="divider"/>
    <Button className='card-buttons' onClick={handleOpen} ><CreateOutlinedIcon /><p className='text'>Post</p></Button>
    </Box>
    </Card>
    <Modal
                            open={open}
                            onClose={handleClose}
                         
                        >
                            <QuestionModal handleClose={handleClose}/>
                        </Modal>
    </Box>
      
    
  )
}

export default Cards
