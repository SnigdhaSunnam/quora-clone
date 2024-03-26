import { Box } from '@mui/material';
import QuoraLogo from '../../assets/images/quora-logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Toolbar from '@mui/material/Toolbar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import '../navbar/navbar.css';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { deepOrange} from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useContext, useState } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import QuestionModal from '../questionModal/questionModal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 600,bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,
};

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'grey'
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    border: "1px solid blue"
  },

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: "0.5px solid grey",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const validationForm = yup.object({
  search:yup.string().trim().required(),
});




function Navbar() {

  const [value, setValue] = useState(0);
  const [questionOpen, setQuestionOpen] = useState(false);
  const {userDetail} = useContext(UserContext);
  const navigate = useNavigate();

  const handleQuestionOpen = () => setQuestionOpen(true);
  const handleQuestionClose = () => setQuestionOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      search:"",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch=(values)=>{
    navigate('/search',{state : {title:values}})
    // navigate('/search')
  }

  const handleLogout = ()=>{
    localStorage.clear();
    navigate('/auth');
    handleClose();
  }
  
  const handleUserProfile = ()=>{
    navigate('/user');
    handleClose();
  }

 
  

 

  return (
    <>
      <Toolbar className="navbar" position='static'>
        <Box className='header-logo'><img src={QuoraLogo}></img></Box>
        <Box className='header-icons' value={value} onChange={handleChange}>
          <Box className='header-icon' onClick={()=>navigate("/home")}><HomeOutlinedIcon /></Box>
          <Box className='header-icon' onClick={()=>navigate("/following")}><ListAltOutlinedIcon /></Box>
          <Box className='header-icon' onClick={()=>navigate("/answer")}><RateReviewOutlinedIcon /></Box>
          <Box className='header-icon' onClick={()=>navigate("/space")} ><Groups2OutlinedIcon /></Box>
          <Box className='header-icon'   onClick={()=>navigate("/notifications")} ><NotificationsNoneOutlinedIcon /></Box>
        </Box>
        <Box className='header-input'>
          <Box>
          <form onSubmit={formik.handleSubmit}>
            
            
            <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search Quora"
                      inputProps={{ 'aria-label': 'search' }}
                      name="search"
                      value={formik.values.search}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.search && Boolean(formik.errors.search)}
                      helperText={formik.touched.search && formik.errors.search}
                    />
                  </Search>
                </form>
          </Box>
          
        </Box>
        <Box className='header-remain'>
        <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
          <Box className='header-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>{userDetail?.name.charAt(0).toUpperCase()}</Avatar></Box>
      
      
          </IconButton>
          
                </Tooltip>
                <LanguageIcon />
              

        </Box>
        <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleUserProfile}>
                  <Avatar /> <span style={{paddingLeft:"0.7rem"}}>Profile</span>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
                </Menu>
                <button className='add-question' onClick={handleQuestionOpen} >Add Question</button>
        
      </Toolbar>
      <Modal
                            open={questionOpen}
                            onClose={handleQuestionClose}
                         
                        >
                            <QuestionModal handleClose={handleQuestionClose}/>
                        </Modal>
     
     
      
    </>
  )
}

export default Navbar;