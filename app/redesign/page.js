"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//add a dark mode toggle for fun! :D

export default function Home() {
  const allText = {
    headerText: "Hi, I'm Maximilian.",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer 💻",
    sectionOneHeader: "Experience",
    sectionOneText:
      "I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I have also completed a Web Development internship with HomeTownTickets.com. I am proficient in JavaScript and have experience with React, TailwindCSS, Node, Express, MongoDB, MySQL, Next.js & more.",
    sectionTwoHeader: "Projects",
    sectionTwoText:
      "Below you can find some of my personal projects that showcase my knowledge and skills.",
  };

  return (
    <>
    <body className="flex h-screen flex-col place-items-center bg-gradient-to-b from-orange-400 text-center">
      <header className="flex-col place-items-center justify-center">
        <h1 className='mt-10 text-center text-7xl font-bold text-white'>
          {allText.headerText}
        </h1>
        <h2 className='p-4 text-3xl font-semibold text-white'>
          {allText.headerDescription}
        </h2>
      </header>

      <section>
        <h1>About Me</h1>
      </section>

    </body>
    </>
  );
}
