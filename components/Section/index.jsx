import React, { useEffect, useRef } from 'react';

export default function Section(props){
  const ref = useRef();
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !ref.current.classList.contains('animate-fade-in-right')) {
          ref.current.classList.add('animate-fade-in-right')
          ref.current.classList.remove('opacity-0')
        }

      });
    }, { threshold: 0.65 });
    observer.observe(ref.current);
  });
  const {header} = props;
  return <div ref={ref} className={`Section px-24 opacity-0 Section-${props.name}`}>
    {header && <div className="text-5xl border-b-4 border-primary-500 font-extrabold text-primary-500 py-2">{header}</div>}
    {props.children}
  </div>
}