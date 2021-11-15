import React from "react";
import { catergoryColors } from "./styles";

const TagRow = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, ind) => (
        <span
          key={ind}
          className="tag"
          style={{ backgroundColor: catergoryColors[tag] }}
        >
          {tag.toUpperCase()}
        </span>
      ))}
    </div>
  );
};
export default TagRow;
