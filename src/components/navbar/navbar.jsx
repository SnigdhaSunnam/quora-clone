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
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deepOrange} from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <>
      <Toolbar className="navbar" position='static'>
        <Box className='header-logo'><img src={QuoraLogo}></img></Box>
        <Box className='header-icons'>
          <Box className='header-icon'><HomeOutlinedIcon /></Box>
          <Box className='header-icon'><ListAltOutlinedIcon /></Box>
          <Box className='header-icon'><RateReviewOutlinedIcon /></Box>
          <Box className='header-icon'><Groups2OutlinedIcon /></Box>
          <Box className='header-icon'><NotificationsNoneOutlinedIcon /></Box>
        </Box>
        <Box className='header-input'>
          <Box>
            <SearchOutlinedIcon />
            <Input
              placeholder="Search Quora" type='text'
            />
          </Box>
        </Box>
        <Box className='header-remain'>
          <Box className='header-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar></Box>
          <LanguageIcon />
          <button className='add-question'onClick={handleOpen} >Add Question</button>

        </Box>


      </Toolbar>

     
      <Modal className='modal-add'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className = 'modal-title'>
        <IconButton onClick={handleClose} sx={{m:0.5}}> <CloseRoundedIcon /></IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Button>Add Question</Button> 
          <Button>Create Post</Button> 
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Tips on getting good answers quickly
          Make sure your question has not been asked already
           Keep your question short and to the point
           Double-check grammar and spelling
          </Typography>
          <Box className='modal-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar></Box>
        </Box>
      </Modal>
    </>
  )
}

export default Navbar;