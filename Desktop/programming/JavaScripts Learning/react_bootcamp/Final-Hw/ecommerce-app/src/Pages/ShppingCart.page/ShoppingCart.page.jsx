
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import Button from '@mui/material/Button';
import ShoppingCard from './Components/ShoppingCard.Component';
import src from '../../Asset/img/33134.jpg';
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
          <ShoppingCard imgSrc={src}/>
          <ShoppingCard imgSrc={src}/>
          <ShoppingCard imgSrc={src}/>
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
          <span className={`${style['description']}`}>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد</span>
          <Button size='large' className={`${style['buy-btn']}`} variant="contained">ادامه فرایند خرید</Button>
          <span className={`${style["warn-btn"]}`}>توجه :کالا ها بعد از 24 ساعت از سبد کالا حذف خواهند شد</span>
        </aside>
      </section>
    </div>

  </>;
}
