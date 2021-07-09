import Head from "next/head";
import { useState } from "react";
import slugify from "slugify";
import { RootContext } from '../contexts';
import initData from "../data";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const coursesWithSlug = new Map();
  initData.courses.map(course=>{
    const courseSlug = slugify(course.title.toLowerCase());
    course.slug = courseSlug;
    coursesWithSlug.set(courseSlug, course);
  })
  const [data, setData] = useState(initData);
  
  const [currentSection, setCurrentSection] = useState('about');
  return <RootContext.Provider value={{ currentSection, setCurrentSection, data, setData }}>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700;800&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </RootContext.Provider>
}

export default MyApp
