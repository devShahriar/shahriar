import Image from 'next/image';
import { useContext } from 'react';
import { HiDocumentText } from "react-icons/hi";
import ReactTyped from "react-typed";
import colors from "tailwindcss/colors";
import { RootContext } from '../../contexts';
import Section from "../Section";

export default function About(){
  const {data} = useContext(RootContext)

  return <Section name="About" className="">
    <div className="flex items-center justify-between flex-col-reverse md:flex-row">
      <div className="md:mb-0 mb-5">
        <div className="text-5xl text-secondary-50 my-5">{data.about.title}</div>
        <div>
          <ReactTyped
            strings={data.about.subtitles}
            typeSpeed={50}
            backSpeed={100}
            className={`font-bold text-primary-500 text-3xl`}
          />
        </div>
        <div className="text-secondary-300 text-lg my-3">{data.about.bio}</div>
        <button type="button" className="animate-wiggle hover:animate-none bg-primary-500 px-8 py-3 text-lg rounded font-extrabold my-5 duration-300 ease-in-out flex items-center">
          <HiDocumentText size={20} fill={colors.gray[900]} className="mr-2"/>
          <a target="_blank" rel="noreferrer" href={data.about.resume}>View resume</a>
        </button>
      </div>
      <div className="animate-fade-r-bounce">
        <Image
          src="/landing.svg"
          alt="Landing"
          width="400"
          height="400"
        />
      </div>
    </div>
    <div className="text-lg text-secondary-200 font-medium flex justify-end">
      <div className="md:w-1/2">
        {data.about.description}
      </div>
    </div>
  </Section>
}