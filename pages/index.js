import Head from 'next/head';
import ReactTyped from "react-typed";
import { Navbar, Section } from "../components";
import { landing, name } from '../data.json';

export default function Home() {
  return (
    <div className="h-screen bg-gray-700 font-mono">
      <Head>
        <title>{name}</title>
        <meta name="description" content="Portfolio for devShahriar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <main>
        <Section className="about">
          <div className="text-5xl text-gray-50">{name}</div>
          <ReactTyped
              strings={landing.subtitles}
              typeSpeed={50}
              backSpeed={100}
              className={`font-bold text-primary-500 text-3xl`}
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
