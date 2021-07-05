import { useState } from "react";
import { RootContext } from '../contexts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [currentSection, setCurrentSection] = useState('about');
  return <RootContext.Provider value={{currentSection, setCurrentSection}}>
    <Component {...pageProps} />
  </RootContext.Provider>
}

export default MyApp
