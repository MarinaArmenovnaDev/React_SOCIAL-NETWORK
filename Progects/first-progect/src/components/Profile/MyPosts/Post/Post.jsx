import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://png.pngtree.com/png-vector/20230131/ourlarge/pngtree-purple-blue-modern-neon-circle-png-image_6579211.png" />
    {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
