import React from "react";
import TagRow from "./TagRow";

const MasonryPost = ({ post, tagsOnTop }) => {
  const windowWidth = window.innerWidth

  const imageBackground = {
    backgroundImage: `url("${require(`../../assets/img/${post.image}`)}")`,
  };

  const style = windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text" style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}>
        <TagRow tags={post.catergories} />
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}

export default MasonryPost;