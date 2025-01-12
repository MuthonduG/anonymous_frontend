import React, { ReactNode } from 'react'
import Card from '../ui/Card'
import { MdSupportAgent } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";

interface aboutFeatures {
  icon: ReactNode;
  title: string;
  description: string
}

const AboutFeatures: aboutFeatures[] = [
  {icon:<FaRegUserCircle />, title: 'User Anonimity', description: 'We offer prompt support to users through email and WhatsApp, guaranteeing a response within 4 hours of an issue being reported. Our team is always ready to provide timely and effective assistance.'},
  {icon:<MdSupportAgent />, title: 'Quick Response', description: 'We guarantee that every issue raised will be thoroughly addressed and resolved within a maximum of 30 days. Our team is committed to ensuring effective and lasting solutions for all concerns.'},
  {icon:<CgSandClock />, title: 'Realtime Tracking', description: 'We encourage users to follow up on any issues they raise and to reach out to us for progress updates. Open communication ensures transparency and keeps you informed throughout the resolution process.'},
  {icon:<MdSupportAgent />, title: '24/7 Support', description: 'We provide reliable support to users via email and WhatsApp, ensuring a prompt response within 4 hours of an issue being raised. Our team is dedicated to addressing your concerns efficiently and effectively.'},
]


const About = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 p-4 md:w-[90%] sm:w-full xl:w-[80%]">
      <div className="text-center text-4xl font-semibold">
        <span>
          About Anonymous
        </span>
      </div>
      
      <div className="leading-10 p-6">
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quaerat ea ut dolores similique est?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sunt fuga cupiditate corrupti fugiat quae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit assumenda nobis laudantium? Vitae, magnam.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-between gap-4 xl:w-full md:w-[90%] sm:w-full mt-">
        {
          AboutFeatures.map((item, index)=> {
            return(
              <div key={index} className="">
                <Card classname='bg-slate-200 flex-col'>
                  <div className="flex justify-between items-center w-full font-semibold p-3 leading-10 text-xl">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex justify-center items-center p-4 text-slate-600">
                    {item.description}
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default About