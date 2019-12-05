import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Competition extends Component {
  render() {
    // dayjs.extend(relativeTime);
    const {
      classes,
        competition: {
        // body,
        createdAt,
        // userImage,
        userName,
        competitionId,
        // likesCount,
        // commentsCount,
        // title,
        description, 
        // category,
        // author,

      }
    } = this.props;

    return (
      <Card className={classes.card}>
        {/* <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}/> */}
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userName}`}
            color="primary">
            {/* {userHandle} */}
          </Typography>
          {/* {deleteButton} */}
          <Typography variant="body2" color="textSecondary">
            {createdAt}
            {/* {dayjs(createdAt).fromNow()} */}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          {/* <LikeButton screamId={screamId} /> */}
          {/* <span>{likeCount} Likes</span> */}
          {/* <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <ScreamDialog
            screamId={screamId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          /> */}
        </CardContent>
      </Card>
    );
  }
}

// competition.propTypes = {
//   user: PropTypes.object.isRequired,
//   scream: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
//   openDialog: PropTypes.bool
// };

const mapStateToProps = (state) => ({
  user: state.user
});

export default withStyles(styles)(Competition);



