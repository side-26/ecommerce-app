
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import style from './ShoppingCart.page.module.scss';


export default function ShoppingCart() {
  return <>
    <Helmet>
      <title>
        فروشگاه اینترنتی خودرو | سبد خرید
      </title>
    </Helmet>
    <Navbar />
    <div className={`${style["container"]}`}>
        <div className={`${style["container-header"]}`}>
          <span className={`${style["container-header-title"]}`}> سبد خرید <span className={`${style["container-header-title-countProduct"]}`}>3</span></span>
        </div>
      <section className={`${style["main_sidebar_container"]}`}>
      <main className={`${style["main"]}`}>
      </main>
      <aside className={`${style["sidebar"]}`}>
        <div className={`${style["price-container"]}`}>
            <span>قیمت کالاها (۶)</span>
            <strong>۲۳۴,۳۵۰ تومان</strong>
        </div> 
        <div className={`${style["dicount-container"]}`}>
            <span>تخفیف کالا ها</span>
            <strong>(۰٪) ۰ تومان</strong>
        </div>  
        <div className={`${style["total_price-container"]}`}>
          <strong>جمع سبد خرید</strong>
          <strong>۲۳۴,۳۵۰ تومان</strong>
        </div>
      </aside>
      </section>
    </div>

  </>;
}
