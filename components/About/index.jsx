import Image from 'next/image';
import { useContext } from 'react';
import ReactTyped from "react-typed";
import { RootContext } from '../../contexts';
import Section from "../Section";

export default function About(){
  const {data} = useContext(RootContext)

  return <Section name="About" className="flex items-center justify-between px-10">
    <div>
      <div className="text-5xl text-secondary-50 my-5">{data.landing.title}</div>
      <div>
        <ReactTyped
          strings={data.landing.subtitles}
          typeSpeed={50}
          backSpeed={100}
          className={`font-bold text-primary-500 text-3xl`}
        />
      </div>
      <button type="button" className="bg-primary-500 px-6 py-2 rounded font-extrabold my-5 hover:scale-110 transform transition duration-300 ease-in-out">Get in touch</button>
    </div>
    <div className="animate-fade-r-bounce">
      <Image
        src="/landing.svg"
        alt="Landing"
        width="500"
        height="500"
      />
    </div>
  </Section>
}