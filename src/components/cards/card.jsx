import React from 'react'
import Card from '@mui/material/Card';
import '../cards/card.css';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function Cards() {
    const card = (
        <React.Fragment>
          <CardContent>
          <Box className='header-avatar' ><Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar></Box>
           
          </CardContent>
          <CardActions>
           
          </CardActions>
        </React.Fragment>
        );
        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),marginLeft: 0,width: '100%',[theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(3),width: 'auto',
            },
          }));
          
          const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }));
          const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            '& .MuiInputBase-input': {
              padding: theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
              paddingLeft: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create('width'),
              width: '100%',
              [theme.breakpoints.up('md')]: {
                width: '20ch',
              },
            },
          }));
  return (
    <Box sx={{ minWidth: 500, width:700 }}>
      <Card variant="outlined">{card}
      <Search className='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></Card>
      
    </Box>
      
    
  )
}

export default Cards
