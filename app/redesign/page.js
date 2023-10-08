"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//add a dark mode toggle for fun! :D

export default function Home() {
  //Initiates AOS for Scrolling animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const allText = {
    headerText: "Hi, I'm Maximilian.",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer",
    sectionOneHeader: "Experience",
    sectionOneText:
      "I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I have also completed a Web Development internship with HomeTownTickets.com. I am proficient in JavaScript and have experience with React, TailwindCSS, Node, Express, MongoDB, MySQL, Next.js & more.",
    sectionTwoHeader: "Projects",
    sectionTwoText:
      "Below you can find some of my personal projects that showcase my knowledge and skills.",
  };

  return (
    <>
      <header>
        <h1
          data-aos='fade-down'
          className='m-10 text-center text-7xl font-semibold'
        >
          {allText.headerText}
        </h1>
        <h2
          data-aos='fade-up'
          class='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-6xl font-semibold text-transparent'
        >
          {allText.headerDescription}
        </h2>
      </header>

      <section className='flex flex-col items-center justify-center'>
        <h1
          data-aos='fade-right'
          className='mt-14 text-5xl font-bold text-gray-700'
        >
          {allText.sectionOneHeader}
        </h1>
        <p
          data-aos='fade-left'
          className='mt-5 px-20 text-center text-2xl font-semibold'
        >
          {allText.sectionOneText}
        </p>
        <img
          data-aos='fade-up'
          className='mt-10 rounded-2xl shadow-lg '
          src='/certificate.png'
        ></img>
      </section>

      <section className='flex flex-col items-center justify-center'>
        <h1
          data-aos='fade-right'
          className='mt-14 text-5xl font-bold text-gray-700'
        >
          {allText.sectionTwoHeader}
        </h1>
        <p
          data-aos='fade-left'
          className='mt-5 px-20 text-center text-2xl font-semibold'
        >
          {allText.sectionTwoText}
        </p>
      </section>
    </>
  );
}
