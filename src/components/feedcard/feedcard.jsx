import * as React from 'react';
import { Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { RxThickArrowUp } from "react-icons/rx";
import { RxThickArrowDown } from "react-icons/rx";
import { TbMessageCircle } from "react-icons/tb";
import { RiLoopLeftFill } from "react-icons/ri";
import { useContext,useEffect,useState } from "react";
import { UserContext } from '../../contexts/user-context';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaellaDish from '../../assets/Paella dish.jpg'
import FeedCardAvatar from '../../assets/feedCard-oneAvatar.jpeg';
import '../feedcard/feedcard.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CommentCard from '../comment/commentCard';
import { BsThreeDots } from "react-icons/bs";
import postService from '../../service/postService';


export default function Feedcard({ feed, handleEdit }) {
  const {userDetail} = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [commentOpen, setCommentOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState([]);
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const [likes, setLikes] = useState(feed?.likeCount||0);
    const open = Boolean(anchorEl);

    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const ITEM_HEIGHT = 48;

    const handleCmtOpenandClose = ()=>{
        setCommentOpen(!commentOpen);
    }

    const edit = ()=>{
        handleEdit(post);
        handleClose();
    }
    useEffect(()=>{
        if(commentOpen){
            getComments();
        }
        
    },[commentOpen])


    useEffect(()=>{
        if(feed?.author?.name){
            setPost(feed)
        }
        else{
            if(feed?._id){
                getPostDetail()
            }
        }
    },[feed])

    const getComments = ()=>{
        postService.getComments(feed?._id).then((res)=>{
           
            setComments(res.data.data);
            // console.log(res.data.data);
            // console.log(comments);
        })
    }

    const getPostDetail =()=>{
        postService.getPost(feed?._id).then((res)=>{
            setPost(res.data.data)
        });
    };

    const like = ()=>{

        if(!upVote && !downVote){
            setUpVote(true);
            setLikes((prev) => prev+1)
            postService.upVote(feed._id).then((res)=>{

            });
        }
        else if(!upVote && downVote){
            setDownVote(false);
            setUpVote(true);
            setLikes((prev) => prev+1)
        }
        else{
            setUpVote(false);
            setLikes((prev) => prev-1)
        }
    }

    const disLike = ()=>{
        
        if(!upVote && !downVote){
            setDownVote(true);
            postService.downVote(feed._id).then((res)=>{

            })
        }
        else if(upVote && !downVote){
            setUpVote(false);
            setDownVote(true);
            setLikes((prev) => prev-1);
        }
        else{
            setDownVote(false)
        }
    }

    const deletePost = () => {
        postService.deletePost(feed._id).then((res) => {
            post();
           
        })
        handleClose();
    }
  return (
    <Card className='feedcard-oneAvatar' sx={{ minWidth: 500, width: 700, }}>
      <CardHeader
        avatar={
          <Avatar >
          {post?.author?.profileImage && 
            <img src={post?.author?.profileImage} ></img>
          }
          {!post?.author?.profileImage && 
            <span>{post?.author?.name}</span>
          }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post?.author?.name}
                subheader={post?.createdAt}
      />
       <Box sx={{textAlign:"left", padding:"0.5rem 0 0.5rem 1rem" , fontWeight:500}}>
                {post?.title}
            </Box>
            {
                post?.content &&<CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.content}
                    </Typography>
                </CardContent>
            }
               { <CardMedia
                className='post-img'
                component="img"
                height="auto"
                image={post?.images}
            />   }


      <Box className="like-dislike-container">
                <Box className="like-dislike-com-container">
                    <Box>
                        <Button startIcon={<RxThickArrowUp color='blue'/>} 
                            className='upvote-btn' 
                            sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                            onClick={like}
                        >
                            U<span>pvote</span> · {likes}</Button>
                        <Button startIcon={<RxThickArrowDown className={downVote && "red-btn"} />} 
                            className='downvote-btn' 
                            sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                            onClick={disLike}
                        ></Button>
                    </Box>
                    <IconButton className='comment-btn' onClick={handleCmtOpenandClose}><TbMessageCircle /> <span className='cunt-cmt-shr'>{post?.commentCount>0?post.commentCount:""}</span></IconButton>
                    <IconButton className='comment-btn share-btn'><RiLoopLeftFill /> <span className='cunt-cmt-shr'></span></IconButton>
                </Box>
                {userDetail?._id==post?.author?._id &&
                    <Box>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <BsThreeDots />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                            }}
                        >
                            <MenuItem  onClick={deletePost}>
                                Delete
                            </MenuItem>
                            <MenuItem  onClick={edit}>
                                Edit
                            </MenuItem>
                        </Menu>
                    </Box>
                }
            </Box>
            {
                commentOpen && 
                    <CommentCard comments={comments} feed={post}  getComments={getComments}/>
            }
    </Card>
  );
}