import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
    backgroundColor: '#C0C0C0'
  },
  image: {
    minWidth: 200,
    maxWidth: 200,
    maxHeigth:200
  },
  content: {
    padding: 25,
    objectFit: 'cover',
    size: '5pt'
  }
};

class Idea extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
        idea: {
        body,
        createdAt,
        userImage,
        userName,
        ideaId,
        likesCount,
        commentsCount
      }
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}/>
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userName}`}
            color="primary">
            {userName}
            
            <br />
          </Typography>
          <br/>
          <Typography
            variant="body1"
            component={Link}
            to={`/users/${userName}`}
            color="secondary">
            {body}<hr/><br/>
          </Typography>
          
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()} 
          </Typography>
          
          
        </CardContent>
      </Card>
    );
  }
}


export default withStyles(styles)(Idea);



