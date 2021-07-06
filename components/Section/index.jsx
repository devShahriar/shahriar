import React from 'react';
import { observe } from 'react-intersection-observer';

export default function Section(props){
  const ref = React.useRef(null);
  observe(ref.current, ()=>{
    console.log(props.className)
  }, {
    threshold: 1,
    triggerOnce: true
  })
  return <div ref={ref} className={`Section h-screen ${props.className ?? ''}`}>
    {props.children}
  </div>
}