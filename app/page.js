"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxScrollHeight = 1000; // Adjust this value as needed
    const minBlueValue = 100; // Adjust this value as needed

    const calculateBlueValue = () => {
      const percentScrolled = scrollPosition / maxScrollHeight;
      const blueValue = Math.round(
        percentScrolled * (255 - minBlueValue) + minBlueValue
      );
      return blueValue;
    };

    const blueValue = calculateBlueValue();
    const backgroundColor = `rgb(${blueValue}, ${blueValue}, 255)`;
    document.body.style.backgroundColor = backgroundColor;
  }, [scrollPosition]);

  return (
    <div>
      <main>
        <div className='flex flex-col items-center justify-center gap-2 p-10'>
          <h1 className='text-8xl'>Hi, I'm Max. 😄</h1>
          <h2 className='text-3xl'>This is placeholder text.</h2>
        </div>
      </main>
    </div>
  );
}
