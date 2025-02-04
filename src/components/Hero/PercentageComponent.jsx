"use client";
import React, { useState, useEffect } from "react";

const PercentageComponent = ({ item }) => {
  const [count, setCount] = useState(0);
  const isInteger = item.percentage % 1 === 0;

  useEffect(() => {
    let animationFrameId;
    const duration = 2000; // 2 seconds animation
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = progress * item.percentage;

      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [item.percentage]);

  return (
    <div className="flex flex-col space-y-3 w-48">
      <h1 className="font-extrabold text-black text-4xl xs:text-3xl sm:text-5xl lg:text-6xl">
        {isInteger ? Math.floor(count) : count.toFixed(1)}
        {item.symbol}
      </h1>
      <p className="text-[#353535] font-medium text-sm xs:text-base sm:text-lg lg:text-xl">
        {item.description}
      </p>
    </div>
  );
};

export default PercentageComponent;
