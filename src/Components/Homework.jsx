import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const Homework = () => {
  return (
  <Grid container  spacing={2}>
 {[1,2,3,4,5,6,7,8,9,10].map(item=>(
  <Grid item xs={12} md={4} key={item}  >
  <Paper variant='outlined' sx={{border:"1px solid #2196f3",m:3,py:2,height:400}}>
   
  <Typography variant='h6' sx={{mx:3,color:"#2196f3"}}>CLASS - {item} <Divider orientation='vertical' sx={{ border: "1px solid #2196f3",mx:1 ,display:"inline"}} />  SECTION - A</Typography>
  <Divider sx={{ border: "1px solid #2196f3",my:1 }} />
<BasicTable/>
  </Paper>
  </Grid>
 ))}
  </Grid>
  )
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('English', 159),
  createData('Telugu', 237),
  createData('Hindi', 262),
  createData('Maths', 305),
  createData('Science', 356),
];

export  function BasicTable() {
  return (
    <TableContainer  component={Box} sx={{p:2,my:1}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:{xs:13,lg:20}}} variant='head'>Subject</TableCell>
            <TableCell sx={{fontSize:{xs:13,lg:20}}} align="left" variant='head'>Home work</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Homework