"use client";
import { useRef, useEffect, useState } from "react";
import "aos/dist/aos.css";

export default function Redesign() {
  const aboutMeRef = useRef();
  const [isInView, setIsInView] = useState(false);

  const allText = {
    headerText: "Hi, I'm Maximilian.",
    headerName: "Maximilian",
    headerDescription: "Full Stack Web Developer.",
    sectionOneHeader: "Experience",
    sectionOneText:
      "Hi! I'm Maximilian Holzmann. I am a graduate of University of Minnesota's Full Stack Web Development Bootcamp. I have also completed a Web Development internship with HomeTownTickets.com. I am proficient in JavaScript, React, TailwindCSS & more.",
    sectionOneSecondText:
      "I am an active member in my community as well as an experienced business professional. I am a licensed real estate agent, real estate assistant & real estate transaction coordinator. I also serve on the Board of Directors for South Shore Chorale, and previously served on the Board of Directors for United Way Fond du Lac.",
    sectionOneThirdText:
      "I am seeking a full-time position as a Front End or Full Stack Web Developer. I believe my strong communication skills and professional experience would make a valuable asset to any team.",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="flex h-screen flex-col justify-center bg-[url('/pattern.svg')] bg-cover bg-center bg-no-repeat text-center">
        <div className="flex flex-col items-center justify-center  md:flex-row md:justify-around md:gap-10 md:pb-48 md:pt-0">
          <div>
            <h1 className="m-10 animate-jump-in bg-gradient-radial from-white to-blue-300 bg-clip-text text-7xl font-bold text-transparent md:m-5 md:text-7xl lg:text-8xl">
              Maximilian Holzmann
            </h1>
          </div>

          <div className="mx-10 max-w-sm animate-jump-in rounded-lg border border-gray-200 bg-white p-2 shadow md:mt-20">
            <a href="#">
              <img
                className="rounded-t-md"
                src="/profile-pic-white.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Full Stack Web Developer
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                {allText.sectionOneText}
              </p>
            </div>
          </div>
        </div>
      </header>
      <section
        ref={aboutMeRef}
        className="mt-10 flex flex-col items-center justify-center"
      >
        <h1
          className={`m-10 bg-gradient-radial from-blue-500 to-blue-700 bg-clip-text text-7xl font-bold text-transparent md:m-5 md:text-7xl lg:text-8xl ${
            isInView ? "animate-fade-right" : ""
          }`}
        >
          Experience
        </h1>
        <div className="flex">
          <div className="flex max-w-4xl flex-col justify-center">
            <p className="pb-4 text-xl font-normal">{allText.sectionOneText}</p>
            <p className="pb-4 text-xl font-normal">
              {allText.sectionOneSecondText}
            </p>
            <p className="text-xl font-normal">{allText.sectionOneThirdText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
