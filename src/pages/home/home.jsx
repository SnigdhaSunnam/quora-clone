import '../home/home.css';
import { Box } from '@mui/material';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import { UserContext } from '../../contexts/user-context';

import InfiniteScroll from "react-infinite-scroll-component";
import FeedCard from "../../components/feedcard/feedcard";
import { useState, useContext } from "react";
function Home() {
  
    // const [page,setPage] = useState(0);
    //const [feeds,setFeeds] = useState([]);
    const [open, setOpen] = useState(false);
    // const [nextPage, setNextpage] = useState(true);
    const [setSelectedFeed] = useState(null)
    const {feeds,setPage,nextPage} = useContext(UserContext);
    const handleOpen = () => setOpen(true);

    const handleClose = (isDataUpdated=false) => {
        if(isDataUpdated){
            setPage(0)
            scrollToTop();
        }
        setOpen(false);
        setSelectedFeed(null);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleEdit = (feed) => {
        setSelectedFeed(feed);
        handleOpen();
        
    }


    const fetchMoreData = () => {
        setPage((prev)=>prev+1);
    };
  return <Box className = 'home' sx= {{overflow: 'auto hidden'}}>
       <Box className ='quora-content'>
        <Sidebar /> 
        
       <Feed />
       <InfiniteScroll
                        dataLength={feeds.length}
                        next={fetchMoreData}
                        hasMore={nextPage}
                        loader={<h4>Loading...</h4>}
                    >
                        
                    </InfiniteScroll>

    
       </Box>
  </Box>;
  

}

export default Home;