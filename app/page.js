import Link from "next/link";
import profilePic from "@/app/assets/IMG-20251023-WA0004.jpg";
import NotesApp from "@/app/assets/NotesAppWhite.png";
import TodosApp from "@/app/assets/TodoApp.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Menu from "./components/menu";
import { PiArrowCircleRightFill } from "react-icons/pi";
export default function Home() {
  return (
    <>
      <div className="main bg-[#221f1f] w-full Poppins text-white">
        <div
          className="navbar flex justify-center items-center w-full text-
        xl bg-[#292626]"
        >
          <nav className=" flex justify-between items-center md:w-9/10 w-19/20 md:px-4 md:py-4 p-1">
            <div className="logo flex justify-center items-center">
              <p className="font-bold text-3xl cursor-pointer flex justify-center items-center ">
                <Link href="/">Abubakr</Link>
                <span className="text-red-500 font-bold text-5xl pb-3 pl-0.5">
                  .
                </span>
              </p>
            </div>
            <div className="resume cursor-pointer  hover:text-[#9a9a9a] duration-500 md:hidden flex">
              <Link
                href="/resume"
                className="flex gap-1 justify-center items-center"
              >
                {" "}
                Resume{" "}
                <PiArrowCircleRightFill className="text-2xl rotate-315 active:rotate-0 duration-300" />
              </Link>{" "}
            </div>
            <div className="menu md:hidden flex  hover:text-[#9a9a9a] duration-500">
              <Menu />
            </div>
            <ul className="md:flex w-1/4 justify-between items-center cursor-pointer hidden gap-3  ">
              <li className="hover:text-[#9a9a9a] duration-500">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#9a9a9a] duration-500">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[#9a9a9a] duration-500">
                <a href="#knowledge">Knowledge</a>
              </li>
            </ul>
            <div className="resume cursor-pointer  hover:text-[#9a9a9a] duration-500 hidden md:flex">
              <Link
                href="/resume"
                className="flex gap-1 justify-center items-center"
              >
                {" "}
                Resume{" "}
                <PiArrowCircleRightFill className="text-2xl rotate-315 hover:rotate-0 duration-1000" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="main w-full flex md:flex-row flex-col justify-around items-center md:mt-6 mt-3">
          <div className="section1 lg:w-1/2 md:w-1/3 w-full flex justify-center items-center">
            <div className="w-full flex justify-center items-center h-full">
              <div className=" lg:w-2/3 w-[90%] flex flex-col justify-center h-full">
                <p className="text-xl font-bold">Hello, I’m Abubakr,</p>
                <h1 className="text-[#a6bbcc] font-extrabold text-6xl">
                  Front-End Developer Intern
                </h1>
                <div className="contactme my-5 underline text-xl cursor-pointer hover:text-[#9a9a9a] active:scale-105 duration-500 ">
                  <a
                    href="#contactme"
                    className="flex gap-1 justify-center md:justify-start items-center"
                  >
                    Contact Me{" "}
                    <PiArrowCircleRightFill className="text-2xl rotate-315 hover:rotate-0 duration-1000" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section2 lg:w-1/2 w-full">
            <div className="img w-full flex justify-center items-center">
              <a
                href="https://pk.linkedin.com/in/abubakr381"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center"
              >
                <Image
                  src={profilePic}
                  alt="Abubakr - Front-End Developer"
                  className="rounded-2xl md:w-2/3 w-[90%] m-4 hover:scale-105 cursor-pointer duration-500"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="AboutMe w-full flex justify-center items-center"
        >
          <div className="content w-4/5">
            <div className="heading flex justify-center md:gap-4 sm:gap-2 gap-1 items-center w-full text-[#a6bbcc]">
              <p className="font-extrabold md:text-4xl sm:text-3xl text-2xl ">
                About
              </p>
              <p className="h-1 w-4/5">
                <hr className="flex-1 sm:h-1 h-0.5 bg-[#a6bbcc] border-0 " />
              </p>
            </div>
            <div className="mainContent w-full flex justify-center items-center tracking-wide">
              <p className="lg:w-3/5 md:4/5 w-full sm:text-base text-sm leading-7 py-5">
                I’m Abubakr, a passionate Web Developer who began his
                programming journey with C++, where I built a strong foundation
                in core programming concepts such as loops, functions,
                variables, and object-oriented programming (OOP). This solid
                base helped me transition smoothly into web development. I then
                explored HTML to understand semantic structure, followed by CSS
                to master responsive layouts and modern styling techniques.
                After that, I strengthened my skills by mastering JavaScript,
                focusing on logic building, interactivity, and dynamic user
                experiences. Building on this knowledge, I moved into React,
                where I developed reusable components, managed state
                efficiently, and implemented real-world projects. Currently, I
                am exploring and implementing Next.js, focusing on performance,
                modern routing, and scalable web applications. I continuously
                strive to improve my skills by learning new technologies and
                applying them in practical projects to build clean, efficient,
                and user-friendly digital solutions.
              </p>
            </div>
            <div className="cards  flex justify-around items-center py-20">
              <div className="card1 flex flex-col justify-center items-center hover:scale-105 cursor-pointer duration-500">
                <h3 className="sm:text-xl text-base sm:font-bold font-semibold">
                  React
                </h3>
                <p className="underline text-gray-300 sm:text-base text-[10px]">
                  Advanced
                </p>
              </div>
              <div className="card2 flex flex-col justify-center items-center hover:scale-105 cursor-pointer duration-500">
                <h3 className="sm:text-xl text-base sm:font-bold font-semibold">
                  Next
                </h3>
                <p className="underline text-gray-300 sm:text-base text-[10px]">
                  Intermediate
                </p>
              </div>
              <div className="card3 flex flex-col justify-center items-center hover:scale-105 cursor-pointer duration-500">
                <h3 className="sm:text-xl text-base sm:font-bold font-semibold">
                  JavaScript
                </h3>
                <p className="underline text-gray-300 sm:text-base text-[10px]">
                  Native
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="knowledge"
          className="Work w-full flex justify-center items-center"
        >
          <div className="content w-4/5">
            <div className="heading flex justify-center md:gap-4 sm:gap-2 gap-1 items-center w-full text-[#a6bbcc]">
              <p className="font-extrabold md:text-4xl sm:text-3xl text-2xl">
                Work
              </p>
              <p className="h-1 w-4/5">
                <hr className="flex-1 sm:h-1 h-0.5 bg-[#a6bbcc] border-0 " />
              </p>
            </div>
            <div className="mainContent w-full flex justify-center items-center tracking-wide">
              <p className="lg:w-3/5 md:4/5 w-full sm:text-base text-sm leading-7 py-5">
                As part of my web development journey, I have gained hands-on
                experience by building multiple practice and real-world–inspired
                projects commonly developed by developers at the start of their
                careers. These projects helped me strengthen my understanding of
                core programming principles, front-end architecture, and best
                coding practices. My work includes developing applications such
                as To-Do apps, Notes apps, portfolio websites, and interactive
                UI components, focusing on responsive design, clean layouts, and
                user-friendly experiences. I have implemented features like
                state management, localStorage integration, reusable components,
                and dynamic rendering using JavaScript and React. Through these
                projects, I learned how to break down requirements, write clean
                and maintainable code, debug issues efficiently, and optimize UI
                performance. This hands-on experience has prepared me to
                contribute effectively to professional development environments
                while continuing to grow as a developer.
              </p>
            </div>
            <div className="samplecards lg:h-120 sm:h-300 h-180 py-5 flex lg:flex-row flex-col justify-around items-center">
              <div className="Card1 lg:w-2/5 flex flex-col justify-center items-center hover:scale-95 cursor-pointer duration-500">
                <a
                  href="https://todo-project-kohl-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={TodosApp}
                    alt="React Todo App Project"
                    className="rounded-2xl my-4"
                  />
                  <h3 className="sm:text-xl text-base font-semibold sm:font-bold ">
                    Todos App
                  </h3>
                  <p className="sm:text-base text-[10px]">
                    A responsive To-Do application built with React as a
                    practice project, featuring localStorage integration to
                    persist tasks across sessions. The app allows users to
                    efficiently add, update, and manage daily tasks with a clean
                    and user-friendly interface, demonstrating core React
                    concepts and state management.
                  </p>
                </a>
              </div>
              <div className="Card2 lg:w-2/5 flex flex-col justify-center items-center hover:scale-95 cursor-pointer duration-500">
                <a
                  href="https://notes-app-one-navy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={NotesApp}
                    alt="React Notes App Project"
                    className="rounded-2xl my-4 "
                  />
                  <h3 className="sm:text-xl text-base font-semibold sm:font-bold ">
                    Notes App
                  </h3>
                  <p className="sm:text-base text-[10px]">
                    A responsive Notes application built with React as a
                    practice project, allowing users to create, save, and manage
                    notes efficiently. The app focuses on a clean and
                    user-friendly interface while demonstrating core React
                    concepts and effective state management.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="contactme"
          className="ContactMe w-full flex justify-center items-center"
        >
          <div className="content w-4/5">
            <div className="heading flex justify-center md:gap-4 sm:gap-2 gap-1 items-center w-full text-[#a6bbcc]">
              <p className="font-extrabold md:text-4xl sm:text-3xl text-2xl text-nowrap">
                Contact Me
              </p>
              <p className="h-1 w-4/5">
                <hr className="flex-1 sm:h-1 h-0.5 bg-[#a6bbcc] border-0 " />
              </p>
            </div>
            <div className="mainContent w-full flex justify-center items-center tracking-wide">
              <p className="lg:w-3/5 md:4/5 w-full sm:text-base text-sm  leading-7 py-5">
                I’d be happy to hear about your project and explore how I can
                support your goals. Feel free to click any of the links below to
                contact me, and I’ll get back to you at the earliest.
              </p>
            </div>
            <div className="icons w-full flex flex-col justify-around items-center h-200">
              <div className="heading">
                <h4 className="text-3xl font-bold">Click to Contact Me</h4>
              </div>
              <div className="iconss xl:w-3/5 lg:w-[70%] md:w-4/5 w-[90%] flex flex-col  justify-between h-2/3 md:gap-0 gap-2 ">
                <div className="icon1 border rounded-xl md:p-4 p-2">
                  <a
                    href="https://wa.me/923401368381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <IoLogoWhatsapp className="lg:text-6xl md:text-3xl text-2xl shrink-0 " />
                    <p className="sm:text-base text-[10px]">
                      Click the WhatsApp icon to contact me on WhatsApp at{" "}
                      <span className="text-[#a6bbcc] font-bold italic">
                        +923401368381
                      </span>
                      .
                    </p>
                  </a>
                </div>
                <div className="icon2  border rounded-xl md:p-4 p-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=abubakrdev00@gmail.com&su=Portfolio%20Contact&body=Hello%20Abubakr,%20I%20visited%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <FaGoogle className="lg:text-6xl md:text-3xl text-2xl shrink-0" />
                    <p className="sm:text-base text-[10px]">
                      Click the Gmail icon to send me an email at{" "}
                      <span className="text-[#a6bbcc] font-bold italic">
                        abubakrdev00@gmail.com
                      </span>{" "}
                      .
                    </p>
                  </a>
                </div>
                <div className="icon3  border rounded-xl md:p-4 p-2">
                  <a
                    href="https://pk.linkedin.com/in/abubakr381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <FaLinkedin className="lg:text-6xl md:text-3xl text-2xl shrink-0" />
                    <p className="sm:text-base text-[10px]">
                      Click the LinkedIn icon to connect with me on LinkedIn at{" "}
                      <span className="text-[#a6bbcc] font-bold italic">
                        abubakr381
                      </span>
                      .
                    </p>
                  </a>
                </div>
                <div className="icon4 border rounded-xl md:p-4 p-2">
                  <a
                    href="https://www.instagram.com/abubakr.ext/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <IoLogoInstagram className="lg:text-6xl md:text-3xl text-2xl shrink-0" />
                    <p className="sm:text-base text-[10px]">
                      Click the Instagram icon to follow or message me on
                      Instagram at{" "}
                      <span className="text-[#a6bbcc] font-bold italic">
                        abubakr.ext
                      </span>{" "}
                      .
                    </p>
                  </a>
                </div>
                <div className="icon5 border rounded-xl md:p-4 p-2">
                  <a
                    href="https://mailto:hassansaab472@icloud.com?subject=Portfolio%20Contact&body=Hello%20Abubakr,%20I%20visited%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <IoIosMail className="lg:text-6xl md:text-3xl text-2xl shrink-0 " />
                    <p className="sm:text-base text-[10px]">
                      Click the Mail icon to send me an email at{" "}
                      <span className="text-[#a6bbcc] font-bold italic">
                        hassansaab472@icloud.com
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer flex justify-center items-center w-full text-xl bg-[#292626]">
          <nav className=" flex justify-between items-center w-9/10 px-4 py-4">
            <div className="logo">
              <p className="font-bold text-3xl cursor-pointer ">
                <Link href="/">Abubakr</Link>
                <span className="text-red-500 font-bold text-5xl">.</span>
              </p>
            </div>

            <div className="Icons cursor-pointer  flex md:gap-4 sm:gap-2 gap-0.5 justify-center items-center">
              <div className="icon1 ">
                <a
                  href="https://wa.me/923401368381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp className="lg:text-6xl sm:text-3xl text-xl " />
                </a>
              </div>
              <div className="icon3  ">
                <a
                  href="https://pk.linkedin.com/in/abubakr381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="lg:text-6xl sm:text-3xl text-xl" />
                </a>
              </div>
              <div className="icon4">
                <a
                  href="https://www.instagram.com/abubakr.ext/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="lg:text-6xl sm:text-3xl text-xl" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
