import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../Components/common";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    //This one is not part of the grid, it should be displaying to the right of the grid
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Stephanie Raymos";
    post.description =
      "Stephanie Raymos is a Full Stack Web Developer who enjoys spending time with her son.";
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastPost = featured.pop();

const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastPost} tagsOnTop={true} />
          </section>
        </div>
      </section>

      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
};
export default Home;
