module.exports = {
    pathPrefix: '/presentation-deck',
    plugins: [
      'gatsby-plugin-catch-links',
      {
        resolve: 'gatsby-theme-mdx-deck',
        options: {
          basePath: '/presentation-deck/slides',
        },
    },
    {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
        modules: ["@mdx-deck/gatsby-plugin"]
        }
    }
    ],
  }