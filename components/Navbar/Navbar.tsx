'use client'
import React, { ReactNode, useState } from 'react';
import { FaUserSecret } from "react-icons/fa";
import Link from 'next/link';
import Button from '../ui/Button';
import Alert from '../ui/alert';
import { HiHome } from "react-icons/hi2";
import { LuFileCode2 } from "react-icons/lu";
import { FiPhoneIncoming } from "react-icons/fi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from 'next/navigation';

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

// const dashboardLinks: landingPageLinks[] = []

const Navbar = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked ? "Checked" : "Not checked");
  };

  const checkboxState = () => {
    if (!isChecked) {
      setShowAlert(true);
    } else {
      setIsPopup(false);
      router.push("/dashboard/user/2");
    }
  };


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
          <Button onClick={handlePopup} className="sm:hidden md:hidden xl:flex">Report Issue</Button>
          <button
            type="button"
            className="bg-transparent p-2 text-2xl text-slate-900 xl:hidden md:flex flex justify-center items-center"
            onClick={handlePopup}
          >
            <TiThMenuOutline />
          </button>
        </div>

        {
          isPopup && 
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-[50%] bg-slate-100 text-slate-700 rounded-xl flex flex-col justify-center items-center p-4 transition-transform delay-200 ease-in-out gap-4">
                <div className="flex justify-between items-center w-full">
                  <div className="uppercase font-semibold text-xl">
                    <span>Create Your First Report</span>
                  </div>
                  <div className="">
                    <button type="button" onClick={handlePopup}><ImCancelCircle /></button>
                  </div>
                </div>
                
                <div className="leading-10">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum nesciunt at deserunt aperiam odit? Incidunt adipisci saepe excepturi fugit maiores eum deserunt, modi ad?
                  </p>
                </div>
                
                <div className="flex justify-between items-center gap-4 w-full p-4 xl:flex-row md:flex-col">
                  <div className="flex justify-center items-center gap-4">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      required
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span>I agree to the terms and conditions set by Anonymous</span>
                  </div>
                  <div className="flex xl:justify-center md:justify-items-start items-center">
                    <Button onClick={checkboxState} className='uppercase'>
                      Create a report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        }
          {showAlert && (
            <div className="fixed top-4 w-full flex justify-center items-center">
              <Alert
                type="warning"
                message="You need to accept the terms and conditions before proceeding."
                onClose={() => setShowAlert(false)}
                style='w-[50%]'
              />
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
