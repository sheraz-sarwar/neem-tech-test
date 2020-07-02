import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Card, CardContent, Link, Typography, Grid, makeStyles } from '@material-ui/core';

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  const { allSanityBlogPost, allSanitySocial } = useStaticQuery(graphql`
    query BlogQuery {
      allSanityBlogPost {
        edges {
          node {
            _id
            title
            subtitle
            content
            author {
              firstName
              jobTitle
            }
            date
          }
        }
      },
      allSanitySocial {
        edges {
          node {
            name
            url
          }
        }
      }
    },
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3}>        
        <Grid item xs={9}>
          {allSanityBlogPost.edges.map(({ node: blogPost }) => <BlogList key={blogPost._id} blogPost={blogPost} />)}
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              {allSanitySocial.edges.map(({ node: social }) => (
                <Box key={social.name}>
                  <Typography variant="overline" style={{ fontSize: '1.25rem' }} component="p">
                    {social.name}
                  </Typography>
                  <Link href={social.url} target="_blank">
                    {social.url}
                  </Link>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default IndexPage
