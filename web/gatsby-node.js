const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
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
      }
    },
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogPosts = result.data.allSanityBlogPost.edges || []
  blogPosts.forEach((edge) => {
    createPage({
      path: `/posts/${slugify(edge.node.title)}`,
      component: require.resolve("./src/components/BlogPost.js"),
      context: { blogPost: edge.node },
    })
  })
}