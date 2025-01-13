import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { PiTelegramLogoFill } from "react-icons/pi";
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section className="flex justify-center items-center w-full mt-10">
      <div className="flex flex-col justify-center items-center w-[80%]">
        <div className="text-center text-4xl font-semibold">
          <span>
            Contact us
          </span>
        </div>

        <div className="leading-10 p-6 text-center w-[80%]">
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quaerat ea ut dolores similique est?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sunt fuga cupiditate corrupti fugiat quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit assumenda nobis laudantium? Vitae, magnam.
          </p>
        </div>

        <div className="flex items-start justify-center w-[60%]">
          <form action="" className="w-full flex flex-col justify-center items-center rounded-xl p-4 gap-4">
            <div className="xl:w-[70%] md:w-full border-2 border-gray-400 flex flex-row-reverse justify-center items-center bg-slate-200 rounded-xl shadow-lg p-2">
              <input type="email" placeholder='Enter Your Email' className='w-[90%] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'/>
              <AiOutlineMail className='w-[10%]'/>
            </div>
            <div className="xl:w-[70%] md:w-full border-2 border-gray-400 flex flex-row-reverse justify-center items-center bg-slate-200 rounded-xl shadow-lg p-2">
              <input type="text" placeholder='Enter Subject' className='w-[90%] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'/>
              <PiTelegramLogoFill className='w-[10%]'/>
            </div>
            <div className="xl:w-[70%] md:w-full border-2 border-gray-400 flex flex-row-reverse justify-center items-center bg-slate-200 rounded-xl shadow-lg p-2">
              <textarea name="" id="" placeholder='Enter Your Message' className='w-[100%] h-[15rem] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow resize-none'></textarea>
            </div>
            <div className="flex justify-center items-center">
              <Button>
                Contact us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact