import React from 'react';
import style from './Avatar.module.scss';
export default function Avatar({ImgSrc}) {
    console.log(ImgSrc);
  return <figure className={`${style["img-container"]}`}>
      <img src={ImgSrc} alt="logoImg" />
  </figure>
}
