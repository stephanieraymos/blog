import React from "react";
import {catergoryColors} from './styles';

export default function MasonryPost({ post, tagsOnTop }) {
  const imageBackground = {
    backgroundImage: `url("${require(`../../assets/img/${post.image}`)}")`,
  };

  const style = {...imageBackground, ...postMessage.style}
  
  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div classname="image-text">
        <div className="tags-container">
            {post.catergories.map((tag, ind) => <span key={ind} className="tag" style={{backgroundColor: catergoryColors[tag]}}>
                {tag.toUpperCase()}
            </span>)}
          <div>
            <h2 classname="image-title">{post.title}</h2>
            <span className="image-date">{post.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
