import Image from "next/image";
import React from "react";

const LeftSideImage = ({ item }) => {
  const { id, img, title, colorTitle, serviceContent } = item;
  return (
    <div>
      <div className="  flex lg:flex-row lg:gap-x-6 flex-col space-y-6">
        <div className="relative aspect-video basis-1/2  ">
          <Image
            src={img}
            alt="title"
            fill="cover"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="basis-1/2 flex flex-col space-y-4 ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl max-w-3xl font-bold md:text-3xl    lg:text-4xl">
              {title}
            </h1>
            <h2 className="text-xl max-w-3xl font-bold md:text-2xl    lg:text-3xl bg-gradient-to-r flex  from-star_color_2 to-star_color_1 bg-clip-text text-transparent">
              {colorTitle}
            </h2>
          </div>
          <div className="flex flex-col space-y-6">
            {serviceContent.map((service, index) => (
              <div className="flex gap-x-10 " key={`${index}+${title}`}>
                <div className="">{service.icon}</div>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl font-medium ">
                    {service.serviceContentTitle}
                  </h2>
                  <p className="text-para_color">
                    {service.serviceContentText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideImage;
