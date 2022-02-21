import React from 'react';
import style from './Avatar.module.scss';
export default function Avatar({ImgSrc}) {
  return <figure className={`${style["img-container"]}`}>
      <img src={ImgSrc} alt="logoImg" />
  </figure>
}
