import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import principal from '../assets/principal.JPG'

import Typography from "@mui/material/Typography";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { FormatQuote, FormatQuoteOutlined } from "@mui/icons-material";

export default function Message({ name, message, role, caption }) {
  return (
    
     <Paper sx={{py:4,height:"100%",bgcolor:"ivory"}} elevation={3}>
    
    
     <Grid container   >
    <Grid item xs={12} md={3} >
  <Paper elevation={5} sx={{width:{xs:"90%",lg:"60%"},height:"100%",mb:3,margin:"auto",p:1}} >
  <Avatar variant="square" src={principal} alt="principal" sx={{width:"100%",height:"100%"}}/>
  </Paper>
    </Grid>
    <Grid item xs={12} md={9} sx={{p:2}}>
    
    <Typography   sx={{py:2,letterSpacing:2,fontSize:{xs:20,md:25,lg:26}}}>Director's <Typography variant="h5" color="Highlight" sx={{display:"inline-flex",fontSize:{xs:20,md:25,lg:26}}}>Message</Typography> </Typography>
    <FormatQuote  sx={{fontSize:{xs:20,md:40}}} color="primary"/>
   <Typography component="p" py={2} sx={{ml:2,fontFamily:"serif",fontSize:{xs:12,md:15,lg:18}}}>
   {message}
   </Typography>
   <Button variant="outlined" size="small" sx={{alignItems:"center",margin:"auto",ml:2}}> Read More</Button>
   


    </Grid>

     
     </Grid>
     </Paper>
  );
}
