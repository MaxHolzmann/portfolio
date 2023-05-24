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
    <>
      <main>
        <div className='flex items-center justify-center gap-2 p-12 xsm: flex-col sm:flex-col lg:flex-row'>
          <img
            data-aos='fade-right'
            className='h-48 w-96 object-scale-down'
            src='/profile-pic.png'
          ></img>

          <h1 data-aos='fade-left' className='text-8xl text-center'>
            Hi, Im Max.
          </h1>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 p-4'>
          <h2 data-aos='fade-up' className='p-5 text-4xl text-center'>
            I am a Full Stack Web Developer based out of Fond du Lac, Wisconsin.
          </h2>
        </div>
      </main>

      <div className='flex flex-col items-center justify-center gap-2 p-12'>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center'
        >
          This is test text.
        </h1>

        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center'
        >
          This is test text.
        </h1>

        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-8xl text-center'
        >
          This is test text.
        </h1>
      </div>
    </>
  );
}
