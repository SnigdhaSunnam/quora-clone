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
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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

     
      <Modal className='addquestion-modal' open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} className = 'modal-title'>
        <Box value={value}>
</Box>
        <IconButton onClick={handleClose} sx={{m:0.5}}> <CloseRoundedIcon /></IconButton>
          <Typography id="modal-top-button" variant="h6" component="h2">
            <Tabs value={value} onChange={handleChange} className="Add-create-tab-box">
              <Tab label="Add Question" {...a11yProps(0)} />
              <Tab label="Create Post" {...a11yProps(1)} />
            </Tabs>         
          </Typography>
          <Box className="addQuestion-tab">
          <CustomTabPanel value={value} index={0}>
            <Typography  sx={{ mt: 2 }}>
            <b>Tips on getting good answers quickly</b>
            <ol style={{ listStyleType: 'disc' }}>
                <li> Make sure your question has not been asked already</li>
                <li> Keep your question short and to the point</li>
                <li> Double-check grammar and spelling</li>
              </ol>
            </Typography>
            
          
          </CustomTabPanel>
          <Box className='modal-avatar-people' >
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar><Button><PeopleOutlineIcon/>Public<ExpandMoreIcon/> </Button></Box>
            <TextField fullWidth   variant="standard"  size="small" placeholder="What would you like to be called?"  sx={{mt:0.5}}  />
          </Box>
        
          

          <Box className="button-end">
            <Button autoFocus onClick={handleClose}>Cancel</Button>
            <Button variant="contained"  sx={{borderRadius:50,backgroundColor:"#96B4FF"}} type="button" > AddQuestion </Button>
          </Box>

          <Box className="createpost-container"></Box>
          </Box>
        
      </Modal>
    </>
  )
}

export default Navbar;