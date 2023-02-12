import { Alert, Avatar, Box, Breadcrumbs, Button, Container, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, getUser } from '../actions/userActions';
import Teachercards from './Teachercards';

const Faculty = () => {
    const [user,setUser] = useState()
    const dispatch = useDispatch();
    const loginstate = useSelector((state) => state.getAllUsersReducer);
    const { loading, error ,users} = loginstate;
    console.log(loginstate);
    useEffect(() => {
     
      dispatch(getAllUsers())
    }, []);
    
  return (
    <Container>
    <Box component="div" role="presentation" sx={{my:2}}>
<Typography variant="h6">Faculty</Typography>
<Breadcrumbs aria-label="breadcrumb" >
  <Link underline="hover" color="inherit" href="/">
  Home
  </Link>
 
  <Typography sx={{ color: "#757ce8" }}>Faculty</Typography>
</Breadcrumbs>
</Box>
  <Grid container spacing={3} sx={{p:3}}>
  {loading && (<Skeleton variant="rectangular" width={210} height={60} />)}
  {error && (<Alert severity="error">This is an error alert — check it out!</Alert>)}
  
  {users.map((teacher,i)=>(
   <Grid item xs={12} lg={3} sx={{p:2}} key={i}>

   <Paper sx={{pb:4}} elevation={3} >
      <Box
        sx={{
          width: "100%",
          height: {xs:100,lg:150},
       
          opacity: 0.8,
          background: "linear-gradient(to right, #2196f3 ,#2196f3, #2196f3)",
        }}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1727&q=60"
        sx={{
          my: {xs:-6,lg:-10},
     margin:"auto",
         
          width: {lg:120,xs:100},
          height: {lg:120,xs:100},
          border: "5px solid white",
        }}
      />
      <Stack
        sx={{
          mt: {xs:7,lg:11},
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontWeight:"bold",fontSize:{xs:17,lg:25,}}}> {teacher.name}</Typography>
        <Typography sx={{fontWeight:"bold",fontSize:{xs:14,lg:18}}} color={grey[600]}>
         {teacher.department}  Department
        </Typography>
        <Button variant='contained' size='small' color='info'  sx={{my:2}} >View profile</Button>
      </Stack>
     
     
    </Paper>
   </Grid>
  ))}
  </Grid>
    </Container>

  )
}

export default Faculty