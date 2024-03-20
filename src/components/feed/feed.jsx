import '../feed/feed.css';

import { Box } from '@mui/material';
import Card from '../cards/card';
import Feedcard from '../feedcard/feedcard'
import { useEffect, useState } from 'react';
import PostService from '../../service/postService';



function Feed() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getFeeds();
        
    } , [])


    const getFeeds = () => {
        PostService.getFeeds(page).then((res) => {
            setPosts(res.data.data)
        })
    }

    return (
        <Box className='feed'>
            <Card />
        {posts.map((post) => {
            return(
            
                <Feedcard feed={post}/>
                

            )
        })}
        </Box>)

}
export default Feed;
