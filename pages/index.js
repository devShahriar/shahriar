import Head from 'next/head';
import { useContext } from 'react';
import { About, Experiences, Links, Navbar, Skills } from "../components";
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
        <About />
        <Skills />
        <Experiences />
      </main>
    </div>
  )
}
