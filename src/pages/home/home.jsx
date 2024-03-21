import '../home/home.css';
import { Box } from '@mui/material';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';


function Home() {
  return <Box className = 'home' sx= {{overflow: 'auto hidden'}}>
       <Box className ='quora-content'>
        <Sidebar /> 
        
       <Feed />
    
       </Box>
  </Box>;
  

}

export default Home;