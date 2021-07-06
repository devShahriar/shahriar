import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import ReactTyped from "react-typed";
import { Experiences, Links, Navbar, Section, Skills } from "../components";
import { RootContext } from '../contexts';

export default function Home() {
  const {data} = useContext(RootContext)
  return (
    <div className="font-mono bg-secondary-900 h-screen overflow-auto scrollbar scrollbar-thumb-green-500 scrollbar-track-gray-100">
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Portfolio for devShahriar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Links />
      <main>
        <Section name="About" className="flex items-center justify-between px-10">
          <div>
            <div className="text-5xl text-secondary-50 my-5">{data.landing.title}</div>
            <ReactTyped
                strings={data.landing.subtitles}
                typeSpeed={50}
                backSpeed={100}
                className={`font-bold text-primary-500 text-3xl`}
            />
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
        <Skills />
        <Experiences />
      </main>
    </div>
  )
}
