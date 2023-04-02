import React, { useState } from "react";
import profilePic from "../assects/edward.jpeg";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const Post = ({ postPic }) => {
  const [comment, setComment] = useState(false);
  return (
    <div className="bg-white p-2 mb-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div>
            <img className="rounded-full w-12" src={profilePic} alt="" />
          </div>
          <div className="leading-3">
            <h3 className="text-sm font-semibold">Md. Omar Faruk</h3>
            <small className="text-xs text-gray-400">
              July 26 2018, 01:03pm
            </small>
          </div>
        </div>
        <div>
          <button className="btn btn-xs px-0 rounded-full">
            <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 font-semibold"></EllipsisVerticalIcon>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p className="">
          Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla
          concert in LA. Was totally fantastic! People were really excited about
          this one!
        </p>
      </div>
      <div className="mt-2">
        <img className="rounded-lg" src={postPic} alt="" />
      </div>
      <div className="flex justify-between items-center m-1 text-gray-500">
        <small className="text-sm">23 likes</small>
        <p>
          <span>15</span>
          <span>
            <ChatBubbleLeftIcon className=" cursor-pointer btn btn-xs btn-link hover:text-black text-gray-500" />
          </span>
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center my-2 mt-4 mx-1">
        <div className="flex gap-0 items-center">
          <HeartIcon className=" cursor-pointer btn btn-xs btn-link text-gray-500 hover:text-black" />
          <ChatBubbleOvalLeftIcon
            onClick={() => setComment(!comment)}
            className=" cursor-pointer btn btn-xs btn-link text-gray-500 hover:text-black"
          />
          <ShareIcon className=" cursor-pointer btn btn-xs btn-link text-gray-500 hover:text-black" />
        </div>
        <div>
          <BookmarkIcon className=" cursor-pointer btn btn-xs btn-link text-gray-500 hover:text-black" />
        </div>
      </div>
      {comment && (
        <div>
          <form className="flex items-center gap-2">
            <input
              className="input input-sm input-bordered w-full"
              type="text"
              placeholder="Comment"
            />
            <input
              className="btn btn-sm btn-outline bg-gray-200 capitalize rounded-md hover:bg-green-800 hover:text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
