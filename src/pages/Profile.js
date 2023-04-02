import React from "react";
import Posts from "../components/Posts";
import profilePic from "../assects/edward.jpeg";
import coverPic from "../assects/cover.png";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto pt-2 px-2">
      <div className="bg-white rounded-md">
        <div className="relative pb-20">
          <div className="w-full relative">
            <img className="rounded-md w-full" src={coverPic} alt="" />
            <PencilIcon className="w-6 h-6 btn btn-xs hover:bg-white hover:text-green-700 absolute top-2 right-2 bg-white p-1 rounded-full" />
          </div>
          <div className="flex justify-center w-full absolute -bottom-5">
            <div>
              <div className="relative">
                <img
                  className="bg-white rounded-full w-24 sm:w-40 p-1 ml-24 sm:ml-16"
                  src={profilePic}
                  alt=""
                />
                <PlusIcon className="w-6 h-6 btn btn-xs hover:bg-white hover:text-green-700 absolute top-2 right-24 sm:right-20 bg-white p-1 rounded-full" />
              </div>
              <div className="w-full text-center">
                <h2 className="text-2xl font-semibold ">Md. Omar Faruk</h2>
                <p className="text-md text-gray-400">
                  Web Developer || MERN-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative -top-20 justify-between gap-2 items-center mx-2">
          <div className="w-3/10 sm:w-5/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between py-2">
              <button className="btn btn-sm capitalize rounded-sm lg:px-12">
                <p>Timeline</p>
              </button>
              <button className="hidden sm:block btn btn-sm capitalize rounded-sm lg:px-12">
                <p>About</p>
              </button>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between">
              <button className="hidden sm:block btn btn-sm capitalize rounded-sm lg:px-12">
                <p>Connections</p>
              </button>
              <button className="btn btn-sm capitalize rounded-sm lg:px-12">
                <p>Photos</p>
              </button>
            </div>
          </div>
        </div>
        {/* detail navbar  */}
      </div>
      <div className="bg-white mt-2 rounded-md">
        <div className="flex justify-around px-3">
          <button className="btn w-1/4 rounded-sm mx-1 bg-green-700 text-white hover:bg-green-800">
            <p>Posts</p>
          </button>
          <button className="btn w-1/4 rounded-sm mx-1">
            <p>About</p>
          </button>
          <button className="btn w-1/4 rounded-sm mx-1">
            <p>Photos</p>
          </button>
          <button className="btn w-1/4 rounded-sm mx-1">
            <p>More</p>
          </button>
        </div>
      </div>
      {/* content  */}
      <div className="pb-2">
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Profile;
