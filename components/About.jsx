import Image from 'next/image';
import { useContext } from 'react';
import { HiDocumentText } from "react-icons/hi";
import ReactTyped from "react-typed";
import colors from "tailwindcss/colors";
import { RootContext } from '../contexts';
import Button from "./Button";
import Section from "./Section";
import Typography from "./Typography";

export default function About(){
  const {data} = useContext(RootContext)

  return <Section name="About" className="">
    <div className="flex items-center justify-between flex-col-reverse md:flex-row">
      <div className="md:mb-0 mb-5">
        <Typography.H1 secondary>{data.about.title}</Typography.H1>
        <Typography.H2>
          <ReactTyped
            strings={data.about.subtitles}
            typeSpeed={50}
            backSpeed={100}
          />
        </Typography.H2>
        <div className="text-secondary-300 text-lg my-3">{data.about.bio}</div>
        <Button className="animate-wiggle hover:animate-none duration-300 ease-in-out ml-0">
          <HiDocumentText size={20} fill={colors.gray[900]} className="mr-2"/>
          <a target="_blank" rel="noreferrer" href={data.about.resume}>View resume</a>
        </Button>
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
    
    <Typography.Body1 className={"flex justify-end"}>
      <div className="md:w-1/2 font-medium">
        {data.about.description}
      </div>
    </Typography.Body1>
  </Section>
}