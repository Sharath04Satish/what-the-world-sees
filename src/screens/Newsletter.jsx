import React from "react";
import Tooltip from "@mui/material/Tooltip";

const Newsletter = (props) => {
  return (
    <div class="grid grid-cols-2" style={{ height: "calc(100vh - 50px)" }}>
      <div className="flex flex-col px-12 py-16">
        <h1 className="text-[3rem] title-1 font-bold text-left text-gray-600">
          Newsletter 🗞️
        </h1>
        <p className="text-[1rem] mt-8 font-normal text-left text-gray-400">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse potenti. Vestibulum sagittis eros
          dictum orci tempor, laoreet gravida nibh sodales.
        </p>

        <p className="text-[1rem] mt-4 font-normal text-left text-gray-400">
          Donec a sem ante. Suspendisse potenti. Proin diam ante, scelerisque ac
          dignissim vitae, laoreet sed nisi. Aliquam erat volutpat.
        </p>

        <input
          class="bg-gray-200 mt-8 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          id="inline-email-address"
          type="text"
          value=""
          placeholder="Enter your email address here..."
        ></input>
        <div className="font-semibold cursor-pointer mt-4 p-4 bg-gray-600 flex items-center justify-center text-stone-100 rounded">
          Submit
        </div>
      </div>
      {/* Create a state which stores whether a newsletter is opened or not.
      When it's true, render the newsletter in the left section with a scrollbar which
      contains the newsletter heading, a picture, date and the content */}
      <div class="text-justify bg-gray-100 flex py-16 px-20 flex-col overflow-y-scroll">
        <h1 className="text-[2rem] title-1 font-bold text-left text-gray-600">
          Previous Editions 🗞️
        </h1>

        <Tooltip title="Wed, Nov 30 2022" arrow>
          <div className="mt-8 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
        <Tooltip title="Sun, Oct 16 2022" arrow>
          <div className="mt-4 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
        <Tooltip title="Sat, Aug 20 2022" arrow>
          <div className="mt-4 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
        <Tooltip title="Fri, Jul 1 2022" arrow>
          <div className="mt-4 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
        <Tooltip title="Fri, Jul 1 2022" arrow>
          <div className="mt-4 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
        <Tooltip title="Fri, Jul 1 2022" arrow>
          <div className="mt-4 cursor-pointer edition-item">
            <h1 className="text-[1rem] title-1 font-semibold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
            <p className="text-[1rem] font-normal text-left text-gray-400 text-justify">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum
              sagittis eros dictum orci tempor, laoreet gravida nibh sodales.
              Donec a sem ante. Suspendisse potenti. Proin diam ante,
              scelerisque ac dignissim vitae, laoreet sed nisi. Aliquam erat
              volutpat...
            </p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Newsletter;
