import React from 'react';

export default function Section(props){
  return <div className={`Section px-40 ${props.className ?? ''}`}>
    {props.children}
  </div>
}