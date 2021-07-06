import React from 'react';

export default function Section(props){
  return <div className={`Section h-screen ${props.className ?? ''}`}>
    {props.children}
  </div>
}