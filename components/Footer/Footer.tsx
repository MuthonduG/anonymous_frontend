import React from 'react'
import Link from 'next/link';
import Button from '../ui/Button';

type FooterLinks = {
  label: string;
  link: string;
};

const footerHyperlinks: FooterLinks[] = [
  { label: 'Support', link: "#" },
  { label: 'Email', link: "#"},
  { label: 'LinkedIn', link: "#" },
  { label: 'Facebook', link: "#" },
];

const Footer = () => {
  return (
    <footer className="flex xl:justify-center md:justify-between items-center p-4 ">
      <div className="flex xl:justify-around md:justify-between items-center xl:w-[80%] md:w-full sm:w-full sm:justify-between gap-4 shadow-2xl border rounded-xl p-3 bg-zinc-900 text-slate-200">
        {/* Icon */}
        <div className="text-3xl">
          
            <p className="">Anonymous</p>
          
        </div>

        {/* Hyper links */}
        <div className="grid-cols-4 gap-4 xl:grid md:hidden sm:hidden">
          {footerHyperlinks.map((itemLink, index) => {
            return (
              <Link
                href={itemLink.link}
                key={index}
                className="flex justify-center items-center p-2 py-3 rounded-full transition-transform delay-150 ease-in-out hover:text-zinc-400"
              >
                <span className="">{itemLink.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center">
          <form action="" className="flex justify-center items-center gap-3">
            <div className="border-2 border-gray-400 flex flex-row-reverse justify-center items-center bg-slate-200 rounded-xl shadow-lg">
              <input type="email" placeholder='Enter Your Email' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'/>
            </div>
            <div className="">
              <Button>
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer