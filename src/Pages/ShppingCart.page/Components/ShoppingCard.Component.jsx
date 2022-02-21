import React from 'react';
import { Product } from '../../../Api/Product.api';
import Counterbtn from '../../../Components/counterBtn.Component/CounterBtn.Component';
import Avatar from '../../../Components/imageLogo.Component/Avatar';
import { BASE_URL } from '../../../Config/Url.config'
import style from './ShoppingCard.module.scss';

export default function ShoppingCard({ productobj,count }) {
        // const counter=count&&count.find(item=>item.id===productobj.id);
        // console.log(count)
    return <section className={`${style["shopping-card"]}`}>
        <div className={`${style["avatar-container"]}`}>
            <Avatar ImgSrc={`${BASE_URL}${productobj.thumbnail}`} />
        </div>
        <div className={`${style["card-title"]}`}>
            <h3>
                {productobj.brand}{productobj.modelName}
            </h3>
            <span>
                {productobj.SubCategory["name"]},{productobj.country}
            </span>
        </div>
        <div className={`${style["card-info"]}`}>
            <strong>{productobj.Gearbox}</strong>
        </div>
        <div className={`${style["card-product-count"]}`}>
            <Counterbtn plus={true} />
            {count&&<span>{count.value}</span>}
            <Counterbtn plus={false} />

        </div>
        <div className={`${style["card-product-price"]}`}>
            <strong>{productobj.price} تومان</strong>
        </div>
        <div>
        </div>
    </section>;
}
