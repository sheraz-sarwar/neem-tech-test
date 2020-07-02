import PropTypes from "prop-types"
import React from "react"
import { Button, Card, CardActions, CardContent, Typography, makeStyles } from '@material-ui/core';
import { navigate } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

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

const BlogPost = ({ pageContext: { blogPost } }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title={blogPost.title} />
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <Typography variant="h3" component="h2">
            {blogPost.title}
          </Typography>
          <Typography variant="overline" className={classes.pos} color="textSecondary">
            {`Authored by ${blogPost.author.firstName} [${blogPost.author.jobTitle}] on ${blogPost.date}`}
          </Typography>
          <Typography variant="body1" component="p">
            {blogPost.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={() => navigate(`/`)} style={{ marginLeft: 'auto' }}>
            Take me back home
        </Button>
        </CardActions>
      </Card>
    </Layout>
  );
}

BlogPost.propTypes = {
  blogPost: PropTypes.shape({}),
}

BlogPost.defaultProps = {
  blogPost: {},
}

export default BlogPost
