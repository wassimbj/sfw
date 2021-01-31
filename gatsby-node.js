/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const categories = require('./src/content/categories.json');
const langs = require('./src/lang/available.json');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // Pulls the createPage action from the Actions API
  const { createPage } = actions;

  langs.map(lang => {
    categories[lang].map((cat) => {
      createPage({
        path: `${lang}/category/${cat.slug}`,
        component: path.resolve(`./src/templates/category.js`),
        // values in the context object are passed in as variables to page queries
        context: {
          folder: cat.folder,
          slug: cat.slug
        },
      })
    })
  })
}
