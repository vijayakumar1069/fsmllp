import React from "react";
import HeadingComponent from "../HeadingComponent";
import PercentageComponent from "./PercentageComponent";
import { percentageValues } from "@/utils/constants";

const Hero_bottom = () => {
  return (
    <div>
      <div className="flex flex-col space-y-5 lg:flex-row lg:justify-between justify-start items-start">
        <div className="max-w-md">
          <HeadingComponent
            headingText="We Empower Businesses Through Financial Excellence"
            animationText="Tax Strategy"
            headTextClasses="text-xl max-w-2xl font-bold md:text-2xl   lg:leading-normal lg:text-3xl"
            starClasses=" text-xl max-w-2xl font-bold md:text-2xl   ml-2 mr-1 lg:text-3xl"
          />
        </div>
        <div className="">
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 grid-cols-1 gap-6">
            {percentageValues.map((item) => (
              <div key={item.id} className="">
                <PercentageComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_bottom;
