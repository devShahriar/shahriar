import React from 'react';

export default function Section(props){
  const {header} = props;
  return <div className={`Section px-24 ${props.className ?? ''}`}>
    {header && <div className="animate-fade-in-right text-5xl border-b-4 border-primary-500 text-bolder text-primary-500 py-2">{header}</div>}
    {props.children}
  </div>
}