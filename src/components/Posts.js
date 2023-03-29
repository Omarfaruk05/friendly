import React from "react";
import postPic1 from "../assects/1.jpg";
import postPic2 from "../assects/2.jpg";
import postPic3 from "../assects/3.jpg";
import postPic4 from "../assects/4.jpg";
import Post from "./Post";

const Posts = () => {
  const postPics = [postPic1, postPic2, postPic3, postPic4];
  return (
    <div>
      {postPics.map((postPic) => (
        <Post postPic={postPic} key={postPic.index}></Post>
      ))}
    </div>
  );
};

export default Posts;
