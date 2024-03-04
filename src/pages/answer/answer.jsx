import './answer.css';

import { Box } from '@mui/material';
import Navbar from '../../components/navbar/navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarsIcon from '@mui/icons-material/Stars';




function Answer() {
  return <Box className = 'answer-navbar' sx= {{overflow: 'auto hidden'}}>
    <Navbar />
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <StarsIcon />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Questions for you
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      </Card> 
        
       
       
  </Box>;
  

}

export default Answer;