import { keyword } from "@/utils/constants";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const ServiceKeywordBox = () => {
  return (
    <div className="bg-gradient-to-br from-star_color_4 via-star_color_2 to-star_color3 p-5 rounded-xl flex flex-col space-y-6 ">
      <h1 className="text-3xl text-center font-bold text-white max-w-md mx-auto">
        Your Gateway to Financial Excellence
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
        {keyword.map((word, index) => (
          <div key={index} className="m-2 text-white   max-w-md">
            <div className="flex space-x-3 items-center border-b-[0.1px] p-1 ">
              <span>
                <PiStarFourFill />
              </span>
              <span className="font-medium">{word.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceKeywordBox;
