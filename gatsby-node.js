exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
      data: {
        gcms: { articles },
      },
    } = await graphql(`
      {
        gcms {
          articles(stage: PUBLISHED) {
            id
            slug
          }
        }
      }
  `);
  
    articles.forEach(({ id, slug }) =>
      createPage({
        path: `${slug}`,
        component: require.resolve(`./src/templates/DocPage.js`),
        context: {
          id,
        },
      })
    );
  };