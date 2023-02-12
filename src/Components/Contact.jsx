import { Textarea } from '@mui/joy';
import { Box, Breadcrumbs, Button, Container, FormControl, Grid, Input, InputLabel, Link, MenuItem, OutlinedInput, Paper, Select, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
   <Container>
   <Box component="div" role="presentation" sx={{my:2}}>
   <Typography variant="h6">Contact</Typography>
   <Breadcrumbs aria-label="breadcrumb" >
     <Link underline="hover" color="inherit" href="/">
     Home
     </Link>
    
     <Typography sx={{ color: "#757ce8" }}>Contact</Typography>
   </Breadcrumbs>
   </Box>
   <Paper variant='elevation' elevation={6} sx={{my:3}} component="form">
   <Typography variant='h6'  color="Highlight" sx={{px:3,pt:2,textAlign:{xs:"center",lg:"left"}}}>Contact <Typography variant='h6' display={"inline-flex"}>Us</Typography></Typography>
  <Grid container spacing={2} sx={{p:2}}>
  <Grid item xs={12} md={6}>
  <Stack sx={{px:3,py:{xs:0,md:3}}} spacing={3} >
  <Stack direction='row' justifyContent="space-between" spacing={3} sx={{display:{xs:"none",md:"flex"}}}>
  <TextField label="Full Name" fullWidth size='small'/>
  
  <FormControl fullWidth size='small'>
  <InputLabel id="demo-simple-select-label">You are</InputLabel>
  <Select size='small'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="You are"
    onChange={handleChange}
  >
    <MenuItem value={10}>Parent</MenuItem>
    <MenuItem value={20}>Student</MenuItem>
    <MenuItem value={30}>Teacher</MenuItem>
    <MenuItem value={30}>Vendor</MenuItem>
    <MenuItem value={30}>Media</MenuItem>
    <MenuItem value={30}>Other..</MenuItem>
  </Select>
</FormControl>
  </Stack>
  <Stack spacing={3} sx={{display:{xs:"block",md:"none"}}}>
  <TextField label="Full Name" fullWidth size='small'/>
  
  <FormControl fullWidth size='small'>
  <InputLabel id="demo-simple-select-label">You are</InputLabel>
  <Select size='small'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="You are"
    onChange={handleChange}
  >
    <MenuItem value={10}>Parent</MenuItem>
    <MenuItem value={20}>Student</MenuItem>
    <MenuItem value={30}>Teacher</MenuItem>
    <MenuItem value={30}>Vendor</MenuItem>
    <MenuItem value={30}>Media</MenuItem>
    <MenuItem value={30}>Other..</MenuItem>
  </Select>
</FormControl>
  </Stack>
  <TextField  type='tel' size='small' label="Contact no.." fullWidth/>
  <TextField size='small' type="email" label="Email" fullWidth/>
  <Textarea
  disabled={false}
  minRows={2}
  placeholder="Enter your message..."
  sx={{fontFamily:"sans-serif",border:"1px solid #808080"}}
  size="md"
  variant="outlined"
/>
<Button variant='contained' size='small' type='submit'>Submit</Button>
  </Stack>
  </Grid>
  <Grid item xs={12} md={6} >
  <Paper variant='outlined' sx={{p:2,bgcolor:"#2196f3",color:"white"}} >
  <Typography sx={{fontSize:"large"}} fontFamily='-moz-initial'> Christ The King International School </Typography>
 <Stack spacing={1} sx={{py:2}}>

 <Typography sx={{fontSize:"small"}} >sunnapubatila center, Mogalrajapuram</Typography>
 <Typography sx={{fontSize:"small"}}> Christurajupuram, Vijayawada </Typography>
 <Typography sx={{fontSize:"small"}} fontWeight={'bold'}>Andhra Pradesh </Typography>
 <Typography sx={{fontSize:"small"}}>
 520008
 </Typography>
 <Typography sx={{fontSize:"small"}}>Phone :<Link underline='none' style={{color:"white"}}> +91 74269857439</Link></Typography>
 <Typography sx={{fontSize:"small"}}>Email : <Link underline='none' style={{color:"white"}}> Christtheking@gmail.com</Link> </Typography>
 </Stack>
 
  </Paper>
  </Grid>
  </Grid>
   </Paper>
   </Container>
  )
}

export default Contact