import React, { useState } from "react";
import profilePic from "../assects/profile.png";
import {
  PencilIcon,
  PhotoIcon,
  VideoCameraIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

const CreatePost = () => {
  const [post, setPost] = useState("");
  console.log(post);
  return (
    <div>
      <div className="bg-white rounded-md">
        <div className="grid grid-cols-3 gap-2 justify-between p-2">
          <button className="btn btn-sm w-full capitalize rounded-none gap-2">
            <PencilIcon className="h-4 w-4" />
            <p>Publish</p>
          </button>
          <div className="btn btn-sm capitalize rounded-none gap-2">
            <PhotoIcon className="h-4 w-4" />
            <p>Albums</p>
          </div>
          <div className="btn btn-sm capitalize rounded-none gap-2">
            <VideoCameraIcon className="h-4 w-4" />
            <p>Video</p>
          </div>
        </div>
        {/* text area  */}
        <div className="mt-3 mx-2 grid grid-cols-7 gap-1 w-full">
          <div>
            <img
              className="rounded-full w-12 bg-slate-300"
              src={profilePic}
              alt=""
            />
          </div>
          <div onChange={(e) => setPost(e.target.value)} className="col-span-6">
            <textarea
              className="p-1 -ml-3 min-h-16 outline-none w-full font-semibold"
              placeholder="Write something about you...
              "
            ></textarea>
          </div>
        </div>
        <hr />
        {/* media activity more  */}
        <div className="flex justify-between items-center p-2">
          <div className="flex gap-2">
            <button className="btn btn-xs capitalize rounded-full gap-1 px-3 text-gray-400 hover:text-black hover:bg-gray-100 hover:border-none border-none">
              <CameraIcon className="h-4 w-4" />
              <p>Media</p>
            </button>
            <button className="btn btn-xs capitalize rounded-full gap-1 px-3 text-gray-400 hover:text-black hover:bg-gray-100 hover:border-none border-none">
              <CameraIcon className="h-4 w-4" />
              <p>Activity</p>
            </button>
            <button className="btn btn-xs capitalize rounded-full gap-1 px-3 text-gray-400 hover:text-black hover:bg-gray-100 hover:border-none border-none font-bold">
              <p className="text-xl -mt-3"> ...</p>
            </button>
          </div>
          <div>
            {!(post === "") && (
              <button className="btn btn-xs capitalize rounded-full gap-1 px-3 text-white bg-green-700 hover:bg-green-900 hover:border-none border-none font-bold">
                <p> Post</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
