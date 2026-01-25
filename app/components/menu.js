"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        <IoMenu className="text-3xl" />
      </button>

      {open && (
        <div className="absolute top-16 right-0 w-[45%] bg-[#221f1f] text-white">
          <ul className="flex flex-col gap-4 p-6">
            <Link href="/">
              <li className="hover:text-[#9a9a9a] duration-500">Home</li>
            </Link>
            <li className="hover:text-[#9a9a9a] duration-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#9a9a9a] duration-500">
              <a href="#knowledge">Knowledge</a>
            </li>
            <li className="hover:text-[#9a9a9a] duration-500">
              <a href="#contactme">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
