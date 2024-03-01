import React from 'react'
import Card from '@mui/material/Card';
import '../cards/card.css';
import { Box, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green} from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





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
           
              <Box className='search-bar' fullWidth  id="fullWidth">What do you want to ask or share?</Box>
              </CardContent>
    <Box className='card-options'> 

    <Button className='card-buttons'onClick={handleOpen} ><RateReviewOutlinedIcon /><p className='text'>Ask</p></Button>
    <Modal className='addquestion-modal' open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style} className = 'modal-title'>
        <Box value={value}>
  
  
 
</Box>
        <IconButton onClick={handleClose} sx={{m:0.5}}> <CloseRoundedIcon /></IconButton>
          <Typography id="modal-top-button" variant="h6" component="h2">
          <Button >Add Question</Button> 
          <Button>Create Post</Button> 
          </Typography>
          <Divider />
          <Typography  className = 'question-modal-typo'sx={{ mt: 2 }}>
          <b>Tips on getting good answers quickly</b>
         
           <ol style={{ listStyleType: 'disc' }}>
                    <li> Make sure your question has not been asked already</li>
                    <li> Keep your question short and to the point</li>
                    <li> Double-check grammar and spelling</li>
                </ol>
          </Typography>
          
          <Box className='modal-avatar-people' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar><Button><PeopleOutlineIcon/>Public<ExpandMoreIcon/> </Button></Box>
          
          <TextField fullWidth   variant="standard"  size="small" placeholder="What would you like to be called?"  sx={{mt:0.5}}  />
           
          <Box className="button-end">
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
                <Button variant="contained"  sx={{borderRadius:50,backgroundColor:"#96B4FF"}} type="button" > AddQuestion </Button>
            </Box>
            
          </Box>
      </Modal>
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
