import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  grid: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default function Classes() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://api-classes.herokuapp.com/classes')
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid className={classes.grid}>
      {list &&
        list.map((ele, index) => (
          <Card key={ele._id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://freetuts.net/upload/tut_cate/images/2015/12/14/11/hoc-javascript.gif'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                ></Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {list[index].description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Teacher: {list[index].teacherName}
              </Button>
              <Button size='small' color='primary'>
                Course: {list[index].name}
              </Button>
            </CardActions>
          </Card>
        ))}
    </Grid>
  );
}
