import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ImagePreviewer from "../components/ImagePreviewer";
import newsletterBackground from "../assets/images/newsletterBackground.jpg";
import newsletterBackgroundCompressed from "../assets/images/newsletterBackgroundCompressed.jpg";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Schedule from "@mui/icons-material/Schedule";

const Newsletter = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onClickOfNewsletter = (id) => {
    setSelectedItem(id);
  };

  return (
    <div class="grid grid-cols-2" style={{ height: "calc(100vh - 50px)" }}>
      {selectedItem ? (
        <div className="flex py-12 px-20 flex-col overflow-y-scroll">
          <div className="flex items-center">
            <ArrowBackIos
              className="mb-3 mr-4 cursor-pointer"
              onClick={() => onClickOfNewsletter(null)}
            />
            <h1 className="text-[2rem] mb-4 title-1 font-bold text-left text-gray-600">
              Nunc volutpat scelerisque
            </h1>
          </div>

          <ImagePreviewer
            imageSrc={newsletterBackground}
            placeholderSrc={newsletterBackgroundCompressed}
            alt="newsletter-background"
            width="100%"
            givenClass="rounded-md"
            placement="bottom"
            toolTipTitle=""
          />
          <div className="mt-4 flex">
            <Schedule />
            <span className="ml-4 text-gray-400">Wed, Nov 30 2022</span>
          </div>

          <div className="mt-6 text-justify">
            <p className="mb-4">
              Nunc ac velit vitae lectus condimentum posuere sed a quam. In
              aliquam auctor risus. Fusce pharetra, dolor nec ullamcorper
              varius, elit massa porta magna, a dictum tellus ex id ipsum. Etiam
              erat arcu, gravida ac condimentum vel, tincidunt ut dui. Ut
              condimentum auctor vulputate. Nulla id tempor justo. Duis
              elementum sagittis dui at maximus. Nulla ut sodales leo. Quisque
              risus nulla, volutpat ut libero ac, varius efficitur felis.
              Integer lectus magna, cursus id tempus a, ultrices a magna. Mauris
              vel nisl sed libero posuere facilisis et quis justo. Nullam quis
              metus maximus, facilisis enim id, pellentesque eros.
            </p>
            <p className="mb-4">
              Nunc ac velit vitae lectus condimentum posuere sed a quam. In
              aliquam auctor risus. Fusce pharetra, dolor nec ullamcorper
              varius, elit massa porta magna, a dictum tellus ex id ipsum. Etiam
              erat arcu, gravida ac condimentum vel, tincidunt ut dui. Ut
              condimentum auctor vulputate. Nulla id tempor justo. Duis
              elementum sagittis dui at maximus. Nulla ut sodales leo. Quisque
              risus nulla, volutpat ut libero ac, varius efficitur felis.
              Integer lectus magna, cursus id tempus a, ultrices a magna. Mauris
              vel nisl sed libero posuere facilisis et quis justo. Nullam quis
              metus maximus, facilisis enim id, pellentesque eros.
            </p>
            <p className="mb-4">
              Nunc ac velit vitae lectus condimentum posuere sed a quam. In
              aliquam auctor risus. Fusce pharetra, dolor nec ullamcorper
              varius, elit massa porta magna, a dictum tellus ex id ipsum. Etiam
              erat arcu, gravida ac condimentum vel, tincidunt ut dui. Ut
              condimentum auctor vulputate. Nulla id tempor justo. Duis
              elementum sagittis dui at maximus. Nulla ut sodales leo. Quisque
              risus nulla, volutpat ut libero ac, varius efficitur felis.
              Integer lectus magna, cursus id tempus a, ultrices a magna. Mauris
              vel nisl sed libero posuere facilisis et quis justo. Nullam quis
              metus maximus, facilisis enim id, pellentesque eros.
            </p>
            <p>
              Nunc ac velit vitae lectus condimentum posuere sed a quam. In
              aliquam auctor risus. Fusce pharetra, dolor nec ullamcorper
              varius, elit massa porta magna, a dictum tellus ex id ipsum. Etiam
              erat arcu, gravida ac condimentum vel, tincidunt ut dui. Ut
              condimentum auctor vulputate. Nulla id tempor justo. Duis
              elementum sagittis dui at maximus. Nulla ut sodales leo. Quisque
              risus nulla, volutpat ut libero ac, varius efficitur felis.
              Integer lectus magna, cursus id tempus a, ultrices a magna. Mauris
              vel nisl sed libero posuere facilisis et quis justo. Nullam quis
              metus maximus, facilisis enim id, pellentesque eros.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-12 py-12">
          <h1 className="text-[3rem] title-1 font-bold text-left text-gray-600">
            Newsletter 🗞️
          </h1>
          <p className="text-[1rem] mt-8 font-normal text-left text-gray-400">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Suspendisse potenti. Vestibulum sagittis
            eros dictum orci tempor, laoreet gravida nibh sodales.
          </p>

          <p className="text-[1rem] mt-4 font-normal text-left text-gray-400">
            Donec a sem ante. Suspendisse potenti. Proin diam ante, scelerisque
            ac dignissim vitae, laoreet sed nisi. Aliquam erat volutpat.
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
      )}

      <div class="text-justify bg-gray-100 flex py-12 px-20 flex-col overflow-y-scroll">
        <h1 className="text-[2rem] title-1 font-bold text-left text-gray-600">
          Previous Editions 🗞️
        </h1>

        <Tooltip title="Wed, Nov 30 2022" arrow>
          <div
            onClick={() => onClickOfNewsletter(1)}
            className="mt-8 cursor-pointer edition-item"
          >
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
          <div
            onClick={() => onClickOfNewsletter(1)}
            className="mt-4 cursor-pointer edition-item"
          >
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
          <div
            onClick={() => onClickOfNewsletter(1)}
            className="mt-4 cursor-pointer edition-item"
          >
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
          <div
            onClick={() => onClickOfNewsletter(1)}
            className="mt-4 cursor-pointer edition-item"
          >
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
          <div
            onClick={() => onClickOfNewsletter(1)}
            className="mt-4 cursor-pointer edition-item"
          >
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
