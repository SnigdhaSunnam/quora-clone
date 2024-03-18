import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
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
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { deepOrange } from '@mui/material/colors';


export default function Feedcard({ post }) {
  return (
    <Card className='feedcard-oneAvatar' sx={{ minWidth: 500, width: 700, }}>
      <CardHeader
        avatar={
          <Avatar >
          {post?.author?.profileImage && 
            <img src={post?.author?.profileImage} ></img>
          }
          {!post?.author?.profileImage && 
            <span>{post?.author?.name[0]}</span>
          }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post?.author?.name}
        subheader="September 14, 2016"
      />
      <CardContent className='paellaDish'><img src={post.images[0]} ></img></CardContent>

      <CardContent>
        <Typography paragraph>{post.title}</Typography>
        <Typography paragraph>
          {post.content}
        </Typography>
        <Button> <IconButton aria-label="upvote" >
          <ArrowCircleUpIcon />
        </IconButton>
          Upvote</Button>
        <IconButton aria-label="downvote">
          <ArrowCircleDownIcon />
        </IconButton>
       

      </CardContent>
    </Card>
  );
}