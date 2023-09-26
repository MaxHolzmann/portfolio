"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//add a dark mode toggle for fun! :D

export default function Home() {
  //Initiates AOS for Scrolling animations
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
    }, 100);
  }, []);

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const allText = {
    headerText: "Hi, I'm Maximilian",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer",
    sectionOneHeader: "Passion",
    sectionOneText:
      "I pour my passion into every aspect of developing websites. From the initial concept to the final launch, I infuse my work with enthusiasm and dedication. With meticulous attention to detail, I craft visually captivating designs and seamless functionalities that engage and delight users.",
    sectionTwoHeader: "Experience",
    sectionTwoText:
      "I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I also have completed a Web Development internship with HomeTownTickets.com.",
    sectionThreeHeader: "Projects",
    sectionThreeText:
      "Below you can find some of my personal projects that showcase my knowledge and skills.",
  };
  /* 
  TODO: 
  Add divs for each text block to handle padding / margin between each instead of applying margin to each text item
  Change profile image

  Potential snap idea where each section takes up full view of screen, changing color backgrounds etc.
  Incorporate more images versus the wall of text.
  redo some of the text.

  */

  return (
    <div>
      <main className='flex flex-col items-center'>
        <div
          data-aos='fade-down'
          className='xsm: my-5 flex w-3/4 flex-col items-center justify-center gap-2 rounded-xl bg-gray-600 p-16 shadow-xl sm:flex-col lg:flex-row'
        >
          <img
            data-aos='fade-right'
            className='h-64'
            src='/profile-pic.png'
          ></img>

          <h1
            data-aos='fade-left'
            className='text-center text-6xl text-white sm:mt-10 lg:mt-0 lg:text-8xl'
          >
            {allText.headerText}
          </h1>
        </div>

        <div
          className='mx-40 my-2 flex flex-col items-center justify-center gap-2  p-10'
          data-aos='fade-up'
        >
          <h2 class='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-7xl font-semibold text-transparent'>
            {allText.headerDescription}
          </h2>
        </div>
      </main>

      <div className='my-5 flex flex-col items-center justify-center gap-2 bg-white p-12'>
        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-center text-8xl'
        >
          {allText.sectionOneHeader}
        </h1>

        <h2
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='py-10 text-center text-4xl text-gray-600'
        >
          {allText.sectionOneText}
        </h2>

        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='py-20 text-center text-8xl'
        >
          {allText.sectionTwoHeader}
        </h1>

        <h2
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-center text-4xl'
        >
          {allText.sectionTwoText}
        </h2>

        <h1
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='py-20 text-center text-8xl'
        >
          {allText.sectionThreeHeader}
        </h1>

        <h2
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className='text-center text-4xl'
        >
          {allText.sectionThreeText}
        </h2>
      </div>
    </div>
  );
}
