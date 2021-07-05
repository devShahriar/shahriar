import Head from 'next/head';
import { Navbar, Section } from "../components";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>devShahriar Portfolio</title>
        <meta name="description" content="Portfolio for devShahriar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Section>
          Section 1
        </Section>
        <Section>
          Section 2
        </Section>
        <Section>
          Section 3
        </Section>
      </main>
    </div>
  )
}
