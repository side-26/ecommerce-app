import React from 'react';
import src from '../../Asset/img/33134.jpg'
import Imgcontainer from './modules/imgContainer.Component';
import Productinfo from './modules/ProductInfo.Conponent';
import Polygon from './modules/polygon.Component';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './ProductCard.module.scss'
const Productcard = ({productId}) => {
    return (
        <section className={style["Card"]}>
               <div className={style["card-photo-container"]}>
               <Imgcontainer imgSrc={src} clss={style["card-photo"]}/>
               <div className={style['card-photo-container-layer']}>
                   <div className={style["buying-container"]}>
                   <ShoppingCartIcon sx={{color:"#fff",fontSize:"2rem"}}/>
                   <span>دیدن مشخصات</span>
                   </div>
               </div>
               </div>
               <div className={style["card-body"]}>
                   <div className={style["card-body-title"]}>
                       <h5>موستانگ</h5>
                       <h6>شلبی</h6>
                   </div>
               <div className={style["Card-price-container"]}>
               <Polygon clss={style["card-price"]} childern="1000"/>
               </div>

               </div>
               <Productinfo size={"سدان"} type={"کوپه"} clss={style["card-info"]}/>
        </section>
    );
}

export default Productcard;
