import React, { useEffect } from "react";

const ScrollBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / maxScroll;

      const initialColor = [180, 215, 255]; // RGB values of light blue
      const finalColor = [0, 0, 51]; // RGB values of darker blue

      const currentColor = initialColor.map((value, index) => {
        const difference = finalColor[index] - value;
        const increment = difference * scrollProgress;
        return Math.round(value + increment);
      });

      const rgbColor = `rgb(${currentColor.join(",")})`;
      document.body.style.backgroundColor = rgbColor;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className='content'></div>;
};

export default ScrollBackground;
