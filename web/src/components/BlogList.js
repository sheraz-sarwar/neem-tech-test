import PropTypes from "prop-types"
import slugify from 'slugify';
import React from "react"
import { Button, Card, CardActions, CardContent, Typography, makeStyles } from '@material-ui/core';
import { navigate } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: theme.spacing(2),
  },
}));

const BlogPost = ({ blogPost }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {blogPost.title}
        </Typography>
        <Typography variant="overline" className={classes.pos} color="textSecondary">
          {blogPost.subtitle}
        </Typography>
        <Typography variant="body1" component="p" noWrap>
          {blogPost.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => navigate(`/posts/${slugify(blogPost.title)}`)} style={{ marginLeft: 'auto' }}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

BlogPost.propTypes = {
  blogPost: PropTypes.shape({}),
}

BlogPost.defaultProps = {
  blogPost: {},
}

export default BlogPost
