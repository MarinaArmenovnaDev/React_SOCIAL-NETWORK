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
        <Post message="Hello, how are you?" likesCount ='10'/>
        <Post message="It's my first post ❤️ " likesCount = '25' />
      </div>
      
    </div>
  );
};
export default MyPosts;
