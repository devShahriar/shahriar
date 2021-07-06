import React, { useEffect, useRef, useState } from 'react';

export default function Section(props){
  const ref = useRef();
  const [triggeredOnce, setTriggeredOnce] = useState(false)
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          !triggeredOnce && setTriggeredOnce(true)
        }
      });
    }, { threshold: 0 });
    observer.observe(ref.current);
  }, [triggeredOnce]);
  const {header} = props;
  return <div ref={ref} className={`Section px-24 ${props.className ?? ''}`}>
    {triggeredOnce ? <>
      {header && <div className="animate-fade-in-right text-5xl border-b-4 border-primary-500 font-extrabold text-primary-500 py-2">{header}</div>}
      {props.children}
    </> : null}
  </div>
}