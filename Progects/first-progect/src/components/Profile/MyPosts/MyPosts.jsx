import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hello, how are you?" />
        <Post message="It's my first post ❤️ " />
      </div>
      
    </div>
  );
};
export default MyPosts;
