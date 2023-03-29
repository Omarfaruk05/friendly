import React, { useState } from "react";
import {
  HeartIcon,
  BellIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="py-2 mx-2 md:mx-4">
        {/* search area for movile  */}
        {showSearch && (
          <div className="absolute px-2 pb-2 w-full bg-base-100 mx-auto ">
            <form
              onClick={handleSearch}
              className="grid grid-cols-12 md:grid-cols-11"
            >
              <div className="col-span-10">
                <input
                  className="input w-full input-sm  rounded input-bordered"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div>
                <input
                  onClick={() => setShowSearch(!showSearch)}
                  className="btn w-1/10 text-green-700 btn-outline hover:bg-green-700 hover:text-white btn-sm ml-2 rounded"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
        )}
        {/* nav area  */}
        <div className="grid grid-cols-3 justify-between items-center">
          {/* logo  */}
          <div>
            <h2 className="text-lg uppercase font-bold text-green-700">
              Friendly
            </h2>
          </div>
          {/* search  */}
          <div className="text-center">
            <div>
              {/* search area for web  */}
              <div className="hidden lg:block">
                <form onClick={handleSearch}>
                  <input
                    className="input w-60 xl:w-72 input-sm rounded input-bordered"
                    type="text"
                    placeholder="Search"
                  />
                  <input
                    className="btn text-green-700 btn-outline hover:bg-green-700 hover:text-white btn-sm ml-2 rounded"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* others  */}
          <div className="flex gap-2 justify-end">
            <div
              onClick={() => setShowSearch(!showSearch)}
              className="block lg:hidden p-2 hover:bg-green-700 hover:text-white rounded"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <div className="p-2 hover:bg-red-600 hover:text-white rounded">
              <HeartIcon className="w-6 h-6 " />
            </div>
            <div className="p-2 hover:bg-green-700 hover:text-white rounded">
              <BellIcon className="w-6 h-6 " />
            </div>
            <div className="p-2 hover:bg-green-700 hover:text-white rounded">
              <EnvelopeIcon className="w-6 h-6 " />
            </div>
            <div className="p-2 hover:bg-green-700 hover:text-white rounded">
              <ChatBubbleLeftIcon className="w-6 h-6 " />
            </div>
            <div className="p-2 hover:bg-green-700 hover:text-white rounded">
              <Squares2X2Icon className="w-6 h-6 " />
            </div>
          </div>
        </div>
      </div>
      <hr className="shadow" />
    </div>
  );
};

export default Nav;
