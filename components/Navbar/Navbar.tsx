import React, { ReactNode } from 'react';
import { FaUserSecret } from "react-icons/fa";
import Link from 'next/link';
import Button from '../ui/Button';
import { HiHome } from "react-icons/hi2";
import { LuFileCode2 } from "react-icons/lu";
import { FiPhoneIncoming } from "react-icons/fi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";

type landingPageLinks = {
  label: string;
  link: string;
  icon: ReactNode;
};

const landingPageHyperlinks: landingPageLinks[] = [
  { label: 'Home', link: "/landing", icon: <HiHome /> },
  { label: 'About', link: "#about", icon: <LuFileCode2 /> },
  { label: 'Contacts', link: "#contact", icon: <FiPhoneIncoming /> },
  { label: 'FAQs', link: "#faqs", icon: <LuMessageCircleQuestion /> },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-4 fixed w-screen z-50">
      <div className="flex xl:justify-around md:justify-between items-center xl:w-[80%] md:w-full sm:w-full sm:justify-between gap-4 shadow-2xl border rounded-xl p-3 bg-slate-200">
        {/* Icon */}
        <div className="text-3xl">
          <Link href={'/landing'} className='flex justify-center items-center gap-3'>
            <FaUserSecret />
            <p className="xl:block md:hidden sm:hidden">Anonymous</p>
          </Link>
        </div>

        {/* Hyper links */}
        <div className="grid-cols-4 gap-4 xl:grid md:hidden sm:hidden">
          {landingPageHyperlinks.map((itemLink, index) => {
            return (
              <Link
                href={itemLink.link}
                key={index}
                className="group flex justify-center items-center p-2 py-3 rounded-full hover:bg-zinc-500 hover:text-slate-100 hover:shadow-md transition-transform delay-150 ease-in-out hover:animate-bounce"
              >
                <span className="group-hover:hidden">{itemLink.label}</span>
                <span className="hidden group-hover:block">{itemLink.icon}</span>
              </Link>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center">
          <Button className="sm:hidden md:hidden xl:flex">Report Issue</Button>
          <button
            type="button"
            className="bg-transparent p-2 text-2xl text-slate-900 xl:hidden md:flex flex justify-center items-center"
          >
            <TiThMenuOutline />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
