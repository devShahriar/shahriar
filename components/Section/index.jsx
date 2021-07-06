import React from 'react';

export default function Section(props){
  return <div className={`Section ${props.className ?? ''}`}>
    {props.children}
  </div>
}