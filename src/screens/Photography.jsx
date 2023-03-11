import React from "react";
import ImagePreviewer from "../components/ImagePreviewer";
import newsletterBackground from "../assets/images/newsletterBackground.jpg";
import newsletterBackgroundCompressed from "../assets/images/newsletterBackgroundCompressed.jpg";
import cover from "../assets/images/cover.jpg";

const Photography = (props) => {
  return (
    <div
      className="px-20 py-12 flex flex-col"
      style={{ minHeight: "calc(100vh - 50px)" }}
    >
      <h1 className="text-[3rem] title-1 font-bold text-left text-gray-600">
        Photography 📸
      </h1>
      <div class="gap-12 my-8 overflow-y-scoll">
        <div className="mb-8 flex items-left justify-left bg-gray-100 rounded-md album-tile cursor-pointer">
          <div>
            <div>
              <img src={cover} style={{ height: "auto", width: "100%" }} />
            </div>
            <div className="px-8 py-4">
              <h1 className="text-[1.25rem]  font-semibold text-left text-gray-600">
                Nunc volutpat scelerisque
              </h1>
              <h1 className="text-[0.95rem] mt-2 font-normal text-left text-gray-600">
                📌 Sikkim, India
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-left justify-left bg-gray-100 rounded-md album-tile  cursor-pointer">
          <div>
            <div>
              <ImagePreviewer
                imageSrc={newsletterBackground}
                placeholderSrc={newsletterBackgroundCompressed}
                alt="newsletter-background"
                width="100%"
                givenClass="rounded-md"
                placement="bottom"
                toolTipTitle=""
              />
            </div>
            <div className="px-8 py-4">
              <h1 className="text-[1.25rem] font-semibold text-left text-gray-600">
                Nunc volutpat scelerisque
              </h1>
              <h1 className="text-[0.95rem] mt-2 font-normal text-left text-gray-600">
                📌 Bengaluru, India
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="gap-12 my-8 overflow-y-scoll">
        <div className="flex items-left justify-left bg-gray-100 rounded-md album-tile cursor-pointer">
          <div>
            <div>
              <ImagePreviewer
                imageSrc={newsletterBackground}
                placeholderSrc={newsletterBackgroundCompressed}
                alt="newsletter-background"
                width="100%"
                givenClass="rounded-md"
                placement="bottom"
                toolTipTitle=""
              />
            </div>
            <div className="px-8 py-4">
              <h1 className="text-[1.25rem]  font-semibold text-left text-gray-600">
                Nunc volutpat scelerisque
              </h1>
              <h1 className="text-[0.95rem] mt-2 font-normal text-left text-gray-600">
                📌 Sikkim, India
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-left justify-left bg-gray-100 rounded-md album-tile  cursor-pointer">
          <div>
            <div>
              <ImagePreviewer
                imageSrc={newsletterBackground}
                placeholderSrc={newsletterBackgroundCompressed}
                alt="newsletter-background"
                width="100%"
                givenClass="rounded-md"
                placement="bottom"
                toolTipTitle=""
              />
            </div>
            <div className="px-8 py-4">
              <h1 className="text-[1.25rem] font-semibold text-left text-gray-600">
                Nunc volutpat scelerisque
              </h1>
              <h1 className="text-[0.95rem] mt-2 font-normal text-left text-gray-600">
                📌 Bengaluru, India
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
