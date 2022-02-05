import React from 'react';
import Counterbtn from '../../../Components/counterBtn.Component/CounterBtn.Component';
import Avatar from '../../../Components/imageLogo.Component/Avatar';
import style from './ShoppingCard.module.scss';

export default function ShoppingCard({imgSrc}) {

  return <section className={`${style["shopping-card"]}`}>
      <div className={`${style["avatar-container"]}`}>
          <Avatar ImgSrc={imgSrc}/>
      </div>
      <div className={`${style["card-title"]}`}>
          <h3>
              فورد موستانگ شلبی
          </h3>
          <span>
              فورد ، امریکایی ، کوپه
          </span>
      </div>
      <div className={`${style["card-info"]}`}>
          <strong>آبی</strong>
      </div>
      <div className={`${style["card-product-count"]}`}>
            <Counterbtn plus={true}/>
        <span>2</span>
            <Counterbtn plus={false}/>
    
      </div>
      <div className={`${style["card-product-price"]}`}>
            <strong>۲۳۴,۳۵۰ تومان</strong>
      </div>
      <div>
          
      </div>
  </section>;
}
