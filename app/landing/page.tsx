import React from 'react'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Faqs from '@/components/FAQs/Faqs'
import Contact from '@/components/Contact/Contact'

const Landing = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className="mt-36 p-3 flex flex-col justify-center items-center xl:w-[70%] md:w-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <Hero
              direction="down"
              className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 gap-4"
              >
              <span className="text-xl text-center md:text-5xl sm:text-4xl font-bold tracking-tighter md:leading-[2rem]">
                  Make your organisation Safer,
              </span>
              <span className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-5xl md:leading-[2rem]">
                  Convinent, & Better 
              </span>
              <span className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-5xl md:leading-[2rem]">
                  For All
              </span>
              <div className="text-center md:p-6 text-wrap md:text-lg mx-auto dark:text-slate-700 xl:w-[60%] leading-10 mt-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio porro quibusdam, esse culpa illo.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem repellat obcaecati voluptatum tempora nesciunt.
              </div>
              <div className="flex justify-center items-center gap-8 mt-6">
                <button type='button' className='p-2 px-8 border-2 border-slate-800 rounded-3xl hover:shadow-lg hover:border hover:border-slate-300 font-semibold hover:bg-stone-900 hover:text-slate-300 transition-transform ease-in-out delay-150'>
                  Get Started
                </button>
                <button type='button' className='p-2 px-8 border-2 border-slate-800 rounded-3xl hover:shadow-lg hover:border hover:border-slate-300 font-semibold hover:bg-stone-900 hover:text-slate-300 transition-transform ease-in-out delay-150'>
                  Contact Us
                </button>
              </div>
          </Hero>
          <About/>
          <Faqs/>
          <Contact/>
        </div>
      </div>
    </section>
  )
}

export default Landing