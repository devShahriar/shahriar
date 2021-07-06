import React, { useContext, useEffect, useRef } from 'react';
import { RootContext } from "../../contexts";

export default function Section(props){
  const ref = useRef();
  const {setCurrentSection} = useContext(RootContext);

  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(!ref.current.classList.contains('animate-fade-in-right')){
            ref.current.classList.add('animate-fade-in-right')
            ref.current.classList.remove('opacity-0')
          }
          setCurrentSection(props.name)
        }
      });
    }, { threshold: 0.65 });
    observer.observe(ref.current);
  });
  const {header} = props;
  return <div ref={ref} className={`Section px-24 py-20 opacity-0 Section-${props.name} ${props.className}`}>
    {header && <div className="text-5xl border-b-4 border-primary-500 font-extrabold text-primary-500 py-2 my-10">{header}</div>}
    {props.children}
  </div>
}