import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';


const menu = [{name:"Home",route:"/"},{name:"My profile",route:"/profile"},{name:"Academics",route:"/academics"},{name:"Admissions",route:"/admissions"},{name:"Clubs",route:"/clubs"},{name:"Faculty",route:"faculty"},{name:"Contact",route:"contact"},]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{fontFamily:"cinzel",backgroundColor:'#2196f3'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
        
          <Typography
         
            noWrap
            component="img"
            src={logo}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
             width:"20%",m:1
            }}
          />
           

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menu.map((item,i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link style={{textAlign:"center",color:"Highlight",fontFamily:"-moz-initial"}} to={`${item.route}`}>{item.name}</Link>
                </MenuItem>
              ))}
            </Menu>
            
            <Link to="/"><Typography
           
            noWrap
            component="img"
            src={logo}
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0.5,width:"80%",my:1
            
            }}
          /></Link>
        
          
          </Box>
         
         <Stack direction="row" spacing={2}> <Link to="homework"> <Button variant='text' size='small' sx={{fontSize:"10px",color:"white",display:{xs:"flex",md:"none"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
             
         borderBottom:"1px solid #fafafa",
         boxShadow: 'none',
       },pt:2}}>Homework</Button></Link>

       {currentUser === null ? (<Button variant='text' size='small' onClick={()=>{window.location.href='/login'}} sx={{fontSize:"10px",color:"white",display:{xs:"flex",md:"none"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
            
       borderBottom:"1px solid #fafafa",
       boxShadow: 'none',
     },pt:2}}>Log in</Button>):(<Button variant='text' size='small' onClick={() => { dispatch(logoutUser()) }} sx={{fontSize:"10px",color:"white",display:{xs:"flex",md:"none"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
           
     borderBottom:"1px solid #fafafa",
     boxShadow: 'none',
   },pt:2}}>Log out</Button>)}
       </Stack>
           
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menu.map((item,i) => (
              <Link  key={i}   to={`${item.route}`}><Button
              key={i}
              onClick={handleCloseNavMenu}
              sx={{fontWeight:"bold", my: 2, color: 'white',fontFamily:"cinzel",transition:"transform .2s", '&:hover': {transform: "scale(1.1)",
             
                borderBottom:"1px solid #fafafa",
                boxShadow: 'none',
              },
               }}
             
            >
              {item.name}
            </Button></Link>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Stack direction="row" spacing={2}><Link to="homework"> <Button variant='text' size='small' sx={{color:"white",display:{xs:"none",md:"flex"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
             
          borderBottom:"1px solid #fafafa",
          boxShadow: 'none',
        },pt:2}}>Homework</Button></Link>{currentUser === null ? (<Button variant='text' size='small' onClick={()=>{window.location.href='/login'}} sx={{fontSize:"10px",color:"white",display:{xs:"none",md:"flex"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
            
          borderBottom:"1px solid #fafafa",
          boxShadow: 'none',
        },pt:2}}>Log in</Button>):(<Button variant='text' size='small' onClick={() => { dispatch(logoutUser()) }} sx={{fontSize:"10px",color:"white",display:{xs:"none",md:"flex"},fontFamily:"cinzel",transition:"transform .2s",'&:hover': {transform: "scale(1.1)",
              
        borderBottom:"1px solid #fafafa",
        boxShadow: 'none',
      },pt:2}}>Log out</Button>)} </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;