import React from "react";

const AboutCard = ({ item }) => {
  const { id, icon, title, description } = item;
  return (
    <div
      className="max-w-md p-6 flex flex-col space-y-3 bg-white shadow-lg rounded-3xl"
      key={id}
    >
      <div>
        <span className="text-3xl">{icon}</span>
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default AboutCard;
