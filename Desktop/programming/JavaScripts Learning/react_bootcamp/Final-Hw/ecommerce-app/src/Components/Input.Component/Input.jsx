import React from 'react';
import style from './input.module.scss';
;

export default function Input({palceHolder,Type,Clss,iconClss}) {
  return <div className={`${style["input"]} ${Clss}`}>
      <span><i></i></span>
      <input type={Type} placeholder={palceHolder} />
  </div>;
}
