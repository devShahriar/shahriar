import React, { useContext, useEffect, useRef } from 'react';
import { RootContext } from "../contexts";
import Typography from "./Typography";

export default function Section(props){
  const {name, header, children} = props;
  const ref = useRef();
  const {currentSection, setCurrentSection} = useContext(RootContext);
  const isCurrentlyActive = currentSection === name;
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(!ref.current.classList.contains('animate-fade-in-right')){
            ref.current.classList.add('animate-fade-in-right')
            ref.current.classList.remove('opacity-0');
            if(name === "Skills"){
              document.querySelector('.tech_stack').classList.remove('hidden')
            }
          }
          setCurrentSection(name)
        }
      });
    }, { threshold: 0.65 });
    observer.observe(ref.current);
  }, []);

  return <div ref={ref} className={`Section border-b-2 border-primary-500 py-20 my-10 opacity-0 Section-${props.name} ${props.className ?? ''}`}>
    {typeof children === "function" ? <>
      {header && <Typography.H1>{header}</Typography.H1>}
      {children({isCurrentlyActive})}
    </> : <>
      {header && <Typography.H1>{header}</Typography.H1>}
      {children}
    </>}
  </div>
}