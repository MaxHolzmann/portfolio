"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

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
    const maxScrollHeight = 2000; // Adjust this value as needed
    const minBlueValue = 120; // Adjust this value as needed

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
        <div className='flex flex-col items-center justify-center gap-2 p-12'>
          <h1 data-aos='fade-right' className='text-8xl'>
            Hi, I'm Max. 😄
          </h1>
          <h2 data-aos='fade-left' className='p-5 text-3xl'>
            I am a Full Stack Web Developer based out of Fond du Lac, Wisconsin.
          </h2>
        </div>
      </main>

      <div className='flex flex-col items-center justify-center gap-2 p-12'>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl'
        >
          This is test text.
        </h1>
      </div>
    </div>
  );
}
