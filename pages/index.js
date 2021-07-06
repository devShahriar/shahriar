import Head from 'next/head';
import Image from 'next/image';
import ReactTyped from "react-typed";
import { Links, Navbar, Section } from "../components";
import { landing, name } from '../data.json';

export default function Home() {
  return (
    <div className="h-screen bg-gray-800 p-20 font-mono">
      <Head>
        <title>{name}</title>
        <meta name="description" content="Portfolio for devShahriar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Links />
      <main>
        <Section className="about flex items-center justify-between px-10">
          <div>
            <div className="text-5xl text-gray-50 my-5">{name}</div>
            <ReactTyped
                strings={landing.subtitles}
                typeSpeed={50}
                backSpeed={100}
                className={`font-bold text-primary-500 text-3xl`}
            />
          </div>
          <Image
              src="/landing.svg"
              alt="Landing"
              width="500"
              height="500"
          />
        </Section>
        <Section className="skills">
          Section 2
        </Section>
        <Section className="experience">
          Section 3
        </Section>
      </main>
    </div>
  )
}
