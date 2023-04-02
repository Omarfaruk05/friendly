import React from "react";
import profilePic1 from "../assects/profile.png";
import profilePic from "../assects/edward.jpeg";
import coverPic from "../assects/cover.png";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  const num = [1, 2, 3, 4];
  return (
    <div className=" max-w-7xl mx-auto pt-6 px-2">
      <div>
        <section className="grid grid-cols-10 gap-6">
          {/* my profile section  */}
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <div className="sticky top-16 rounded-md bg-white cursor-pointer">
              {/* photo  */}
              <Link to="/profile">
                <div>
                  <div>
                    <img className="rounded-t-md h-32" src={coverPic} alt="" />
                  </div>
                  <div className="rounded-full w-20 p-[2px] bg-white relative -top-12  mx-auto text-center">
                    <img
                      className="bg-gray-500 rounded-full"
                      src={profilePic}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
              {/* Bio section  */}
              <div className="-mt-12 text-center mx-1">
                <Link to="/profile">
                  <h2 className="text-xl font-semibold hover:underline">
                    Md. Omar Faruk
                  </h2>
                </Link>
                <p className=" font-mono text-sm">
                  Web Developer || MERN Stack Developer
                </p>
                <hr />
                <div className="flex justify-between p-2 m-1 rounded-sm hover:bg-gray-200 cursor-pointer">
                  <p className="text-gray-400 font-semibold">Connections</p>
                  <p className="font-semibold">7</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-span-10 md:col-span-7 lg:col-span-5">
            <CreatePost></CreatePost>
            <Posts></Posts>
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <div>
              <div className=" bg-white rounded-md mb-4">
                <h2 className="p-2 rounded-t-md text-lg font-semibold bg-slate-100">
                  Your Connections
                </h2>
                {/* my connections  */}
                {num.map((x) => (
                  <div key={x}>
                    <div className="flex gap-2 m-2 hover:bg-gray-200 p-1 rounded">
                      <div>
                        <img
                          className="rounded-full w-12"
                          src={profilePic}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-md font-semibold">
                          Md. Omar Faruk
                        </h3>
                        <small className="text-sm text-gray-400">
                          Company. Web Developer
                        </small>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-md mb-4">
                <h2 className="p-2 rounded-t-md text-lg font-semibold bg-slate-100">
                  People you may know
                </h2>
                {/* my connections  */}
                {num.map((x) => (
                  <div key={x}>
                    <div className="flex gap-2 my-2 p-1 rounded">
                      <div>
                        <img
                          className="rounded-full w-14"
                          src={profilePic1}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-md font-semibold">
                          Md. Omar Faruk
                        </h3>
                        <small className="text-sm text-gray-400">
                          Company. Web Developer
                        </small>
                        <div>
                          <button className="mt-1 btn btn-sm btn-outline bg-gray-200 capitalize rounded-full hover:bg-green-800 hover:text-white">
                            + Connect
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
