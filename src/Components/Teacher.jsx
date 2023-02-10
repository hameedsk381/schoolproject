import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Teacher({ match }) {
  const classes = useStyles();
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/users/getusers");
      setTeacher(result.data);
      console.log(result.data)
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      {teacher.map(teacher=>(
        <Card className={classes.card} key={teacher}>
        <CardHeader title={teacher.name} subheader={teacher.department} />
        <CardMedia
          className={classes.media}
          
          title={teacher.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {teacher.email}
          </Typography>
        </CardContent>
        <Button component={Link} to="/" variant="contained" color="primary">
          Back to Teacher List
        </Button>
      </Card>
      ))}
    </div>
  );
}
