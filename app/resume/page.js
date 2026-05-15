import Link from "next/link";
import Image from "next/image";
import cv from "@/public/Resume-15-05-26.pdf";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { PiArrowCircleRightFill } from "react-icons/pi";
import MobileMenu from "../components/mobileMenu";
export default function ResumePage() {
  return (
    <div className="bg-[#221f1f] w-full min-h-full Poppins text-white">
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
              <PiArrowCircleRightFill className="text-2xl rotate-315 hover:rotate-0 duration-1000" />
            </Link>{" "}
          </div>
          <div className="menu md:hidden flex  hover:text-[#9a9a9a] duration-500">
            <MobileMenu />
          </div>
          <ul className="md:flex w-1/4 justify-between items-center cursor-pointer hidden gap-3  ">
            <li className="hover:text-[#9a9a9a] duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#9a9a9a] duration-500">
              <a href="/#about">About</a>
            </li>
            <li className="hover:text-[#9a9a9a] duration-500">
              <a href="/#knowledge">Knowledge</a>
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
      <div className="w-full h-auto flex justify-center items-center my-3 px-4">
        <Image
          src={cv}
          alt="CV Preview"
          className="
      w-full
      sm:w-4/5
      md:w-1/2
      lg:w-[29%]
      rounded-lg
      hover:scale-105
      cursor-pointer
      duration-500
    "
        />
      </div>
      <div className="Footer flex justify-center items-center w-full text-xl bg-[#292626]">
        <nav className=" flex justify-between items-center w-9/10 px-4 py-4">
          <div className="logo">
            <p className="font-bold text-3xl cursor-pointer ">
              <Link href="/">Abubakr</Link>
              <span className="text-red-500 font-bold text-5xl">.</span>
            </p>
          </div>

          <div className="Icons cursor-pointer  flex gap-4">
            <div className="icon1 ">
              <a
                href="https://wa.me/923401368381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="lg:text-6xl text-3xl " />
              </a>
            </div>
            <div className="icon3  ">
              <a
                href="https://pk.linkedin.com/in/abubakr381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="lg:text-6xl text-3xl" />
              </a>
            </div>
            <div className="icon4">
              <a
                href="https://www.instagram.com/abubakrr_dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram className="lg:text-6xl text-3xl" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
