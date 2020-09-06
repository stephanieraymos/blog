const trendingPosts = require("./mocks/trending");
const featuredPosts = require("./mocks/featured");
const fs = require("fs");
const path = require("path");
const trending = require("./mocks/trending");

module.exports = {
  resolvers: {
    Query: {
      trendingPosts: () => trendingPosts,
      featuredPosts: () => featuredPosts,
      recentPosts: () => [...trendingPosts, ...featuredPosts, ...featuredPosts]
    },
  },
  schema: fs
    .readFileSync( //Returns file buffer.
      path.resolver(
        __dirname, //Current path that we're in. (Finds absolute path.)
        "./posts-schema.graphql"
      )
    ).toString(),
};
