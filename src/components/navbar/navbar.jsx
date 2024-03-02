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

import QuestionModal from '../questionModal/questionModal';


const style = {
  position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 600,bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState('1');
  
const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
 
  

 

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
      <Modal
                            open={open}
                            onClose={handleClose}
                         
                        >
                            <QuestionModal handleClose={handleClose}/>
                        </Modal>
     
     
      
    </>
  )
}

export default Navbar;