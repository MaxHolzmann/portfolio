"use client";
import { useRef, useEffect, useState } from "react";
import Project from "../components/Project";
import ProjectC from "../components/ProjectC";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Redesign() {
  const aboutMeRef = useRef();
  const [isInView, setIsInView] = useState(false);
  //scale this with a function????

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

  const projectGameLog = {
    title: "Game-Log",
    description:
      'Game-Log is a web application for keeping track of your gaming backlog. Utilizing a kanban board style list, users can add games, remove games and categorize games between three lists, "Back Log", "Currently Playing" and "Completed". This project was built with ReactJS & TailwindCSS, utilizing MongoDB as a database solution and NextAuth as an authentication solution.',
    image: "/gamelog.png",
    deployment: "https://game-log.vercel.app/",
    github: "https://github.com/MaxHolzmann/game-log",
  };
  const projectMaxBlog = {
    title: "Max Blog",
    description:
      "A basic blog application built with Handlebars, BootstrapCSS and MySQL / Sequelize.",
    image: "/maxblog.png",
    deployment: "https://max-blog.herokuapp.com/",
    github: "https://github.com/MaxHolzmann/maxs-blog",
  };
  const projectBlueberries = {
    title: "Blueberries Music",
    description:
      "A landing page for a local barbershop quartet that I am apart of. This website utilizies primarily React and TailwindCSS, and is deployed via Vercel.",
    image: "/blueberries.jpg",
    deployment: "https://www.blueberriesmusic.com/",
    github: "https://github.com/MaxHolzmann/blueberriesmusic",
  };
  const projectHourLog = {
    title: "Hour Log",
    description:
      'A full stack web application created using React, TailwindCSS, Next.JS, MongoDB & NextAuth. This web application is a simple solution for tracking work hours for companies who have employees track their own hours. Utilizing the "react-to-print" library, users can select a range of dates & export their hours into a convienant file PDF for their employer.',
    image: "/hourlog.png",
    deployment: "https://hour-log-gamma.vercel.app/",
    github: "https://github.com/MaxHolzmann/hour-log",
  };
  const projectTimeline = {
    title: "Real Estate Timeline Generator",
    description:
      "A one page web app utiilizing React Form Hook, in coalition with React, TailwindCSS and NextJS. This web application asks the user to input information regarding the timelines in a Real Estate transaction and creates a branded PDF for the user to send to their client. I created this project for my own Real Estate practice & my Real Estate team, The Schiek Team.",
    image: "/timeline.png",
    deployment: "https://timeline-gen.vercel.app/",
    github: "https://github.com/MaxHolzmann/real-estate-timeline-gen",
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
        <div className="flex flex-col items-center justify-center  md:justify-around md:gap-10 md:pb-48 md:pt-0">
          <div>
            <h1 className="m-10 animate-jump-in bg-gradient-radial text-7xl font-bold text-transparent text-white lg:mb-10 lg:pt-32 lg:text-8xl">
              Maximilian Holzmann
            </h1>
          </div>

          <div className="mx-10 flex max-w-xl animate-jump-in flex-col items-center rounded-lg border border-gray-200 bg-white p-2 shadow lg:max-w-2xl">
            <a href="#">
              <img
                className="max-w-sm rounded-t-md"
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
      <section className="">
        <h1>3 Panel Section</h1>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <ProjectC
            title={projectGameLog.title}
            description={projectGameLog.description}
            image={projectGameLog.image}
            deployment={projectGameLog.deployment}
            github={projectGameLog.github}
          ></ProjectC>
          <ProjectC
            title={projectHourLog.title}
            description={projectHourLog.description}
            image={projectHourLog.image}
            deployment={projectHourLog.deployment}
            github={projectBlueberries.github}
          ></ProjectC>
          <ProjectC
            title={projectTimeline.title}
            description={projectTimeline.description}
            image={projectTimeline.image}
            deployment={projectTimeline.deployment}
            github={projectTimeline.github}
          ></ProjectC>
          <ProjectC
            title={projectBlueberries.title}
            description={projectBlueberries.description}
            image={projectBlueberries.image}
            deployment={projectBlueberries.deployment}
            github={projectBlueberries.github}
          ></ProjectC>
          <ProjectC
            title={projectMaxBlog.title}
            description={projectMaxBlog.description}
            image={projectMaxBlog.image}
            deployment={projectMaxBlog.deployment}
            github={projectMaxBlog.github}
          ></ProjectC>
        </Carousel>
      </section>

      {/* "bg-[#0055ff]" */}
      <section
        ref={aboutMeRef}
        className="mt-10 flex flex-col items-center justify-center"
      >
        <h1 className="m-10 bg-gradient-radial from-blue-500 to-blue-700 bg-clip-text p-10 text-7xl font-bold text-transparent md:m-5 md:text-7xl lg:text-8xl">
          Projects
        </h1>

        {/* replace with project carasol? ;o */}
        <div className="flex flex-col items-center justify-center">
          <Project
            title={projectGameLog.title}
            description={projectGameLog.description}
            image={projectGameLog.image}
            deployment={projectGameLog.deployment}
            github={projectGameLog.github}
          ></Project>
          <Project
            title={projectHourLog.title}
            description={projectHourLog.description}
            image={projectHourLog.image}
            deployment={projectHourLog.deployment}
            github={projectBlueberries.github}
          ></Project>
          <Project
            title={projectTimeline.title}
            description={projectTimeline.description}
            image={projectTimeline.image}
            deployment={projectTimeline.deployment}
            github={projectTimeline.github}
          ></Project>
          <Project
            title={projectBlueberries.title}
            description={projectBlueberries.description}
            image={projectBlueberries.image}
            deployment={projectBlueberries.deployment}
            github={projectBlueberries.github}
          ></Project>
          <Project
            title={projectMaxBlog.title}
            description={projectMaxBlog.description}
            image={projectMaxBlog.image}
            deployment={projectMaxBlog.deployment}
            github={projectMaxBlog.github}
          ></Project>

          {/* <Project
            title={projectGameLog.title}
            description={projectGameLog.description}
            image={projectGameLog.image}
            deployment={projectGameLog.deployment}
            github={projectGameLog.github}
          ></Project>
          <Project
            title={projectHourLog.title}
            description={projectHourLog.description}
            image={projectHourLog.image}
            deployment={projectHourLog.deployment}
            github={projectBlueberries.github}
          ></Project>
          <Project
            title={projectTimeline.title}
            description={projectTimeline.description}
            image={projectTimeline.image}
            deployment={projectTimeline.deployment}
            github={projectTimeline.github}
          ></Project>
          <Project
            title={projectBlueberries.title}
            description={projectBlueberries.description}
            image={projectBlueberries.image}
            deployment={projectBlueberries.deployment}
            github={projectBlueberries.github}
          ></Project>
          <Project
            title={projectMaxBlog.title}
            description={projectMaxBlog.description}
            image={projectMaxBlog.image}
            deployment={projectMaxBlog.deployment}
            github={projectMaxBlog.github}
          ></Project> */}
        </div>
      </section>
    </>
  );
}
