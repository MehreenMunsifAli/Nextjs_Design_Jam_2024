"use client";
import Banner from "@/components/Banner";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";


export default function FAQPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const questions = [
        {
            question: 'How we serve food?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
        {
            question: 'How can we get in touch with you?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
        {
            question: 'How is our food quality?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
        {
            question: 'What will be delivered? And When?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
        {
            question: 'How do we give home delivery?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
        {
            question: 'Is this restaurant 24 hours open?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
        },
    ];

    const toggleAnswer = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    }

    return(
        <>
        <Banner Title="FAQ" Page="FAQ" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto py-20">
               <div className="flex flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-[#333333] lg:text-h3 text-h4 font-bold">
                        Questions Looks Here
                    </h1>
                    <p className="text-[#4F4F4F] text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    </p>
               </div>

               {/* Questions section */}
               <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
                    {questions.map((item, idx) => (
                        <div  key={idx} className="col-span-6 p-6 bg-[#FAF7F2] rounded-lg">
                            <div className="flex items-center justify-between text-[#333333] " >
                                <p className="font-bold" >{item.question}</p>
                                {expandedIndex === idx ? <RxDividerHorizontal className="cursor-pointer" onClick={() => toggleAnswer(idx)} /> : <FaPlus className="cursor-pointer" onClick={() => toggleAnswer(idx)} />}

                            </div>
                            {expandedIndex === idx && (
                                <p className="text-[#4F4F4F] mt-6">
                                    {item.answer}
                                </p>
                            )}  
                    </div>
                    ))}
               </div>
            </div>
        </div>
        </>
    )
}