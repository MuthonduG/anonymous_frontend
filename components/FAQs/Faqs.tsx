"use client"
import React, { ReactNode, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Card from '../ui/Card';

interface faqsProps {
  query: string;
  icon: ReactNode;
  answer: string;
}

const faqsList: faqsProps[] = [
  {
    query: 'Is my identity concealed',
    icon: <FaPlus />,
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia?'
  },
  {
    query: 'How do I track an issue I reported',
    icon: <FaPlus />,
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia?'
  },
  {
    query: 'How do I know if my evidence is viable',
    icon: <FaPlus />,
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia?'
  },
  {
    query: 'What situations will require me to ',
    icon: <FaPlus />,
    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem ipsam excepturi harum blanditiis iusto error delectus laboriosam voluptas mollitia?'
  }
]

const Faqs = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const handleClickVisibilityEvent = (index: number) => {
    setVisibleIndexes((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="flex flex-col justify-center items-center w-[70%] mt-5">
      <div className="flex justify-center flex-col items-center p-4">
        <div className="font-semibold text-3xl">
          <span>Frequently Asked Questions</span>
        </div>
        <div className="leading-10 text-center w-[90%] mt-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident veritatis ullam doloremque voluptatum similique fuga in enim necessitatibus harum corporis. Ex suscipit ipsum molestias quaerat omnis! Iure cum praesentium delectus.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-4">
        {faqsList.map((item, index) => (
          <Card key={index} classname="w-full flex-col bg-slate-200 transition delay-150 ease-out">
            <div className="font-semibold text-xl flex justify-between items-center w-full p-4">
              <span>{item.query}</span>
              <button type="button" onClick={() => handleClickVisibilityEvent(index)}>
                {item.icon}
              </button>
            </div>
            <div className={`text-slate-700 leading-10 p-4 ${visibleIndexes.includes(index) ? '' : 'hidden'}`}>
              <p>{item.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
