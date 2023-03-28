import React from "react";
import profilePic from "../assects/profile.png";
import coverPic from "../assects/cover.png";
import CreatePost from "../components/CreatePost";

const Home = () => {
  const num = [1, 2, 3, 4];
  return (
    <div className=" max-w-7xl mx-auto pt-6 px-2">
      <div className="">
        <section className="grid grid-cols-10 gap-6">
          {/* my profile section  */}
          <div className="col-span-2">
            <div className="rounded-md bg-white">
              {/* photo  */}
              <div>
                <div>
                  <img className="rounded-t-md" src={coverPic} alt="" />
                </div>
                <div className="rounded-full w-16 p-[2px] bg-white relative -top-9  mx-auto text-center">
                  <img
                    className="bg-gray-500 rounded-full"
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              {/* Bio section  */}
              <div className="-mt-4 text-center mx-1">
                <h2 className="text-xl font-semibold">Md. Omar Faruk</h2>
                <p className=" font-mono text-sm">
                  Web Developer || MERN Stack Developer
                </p>
                <hr />
                <div className="flex justify-between p-2 m-1 rounded-sm hover:bg-gray-200">
                  <p className="text-gray-400 font-semibold">Connections</p>
                  <p className="font-semibold">7</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <CreatePost></CreatePost>
          </div>
          <div className="col-span-3">
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
              <div className=" bg-white rounded-md mb-4">
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
