import React from 'react';
import Imgcontainer from './modules/imgContainer.Component';
import {PATHS} from '../../Config/Route.config'
import Productinfo from './modules/ProductInfo.Conponent';
import Polygon from './modules/polygon.Component';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BASE_URL} from '../../Config/Url.config';
import style from './ProductCard.module.scss'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchProductRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
const ProductCard = ({productObj}) => {
    // const dispatch = useDispatch();
    const navigate=useNavigate()
    const handelProductPage=(id)=>{
        navigate(`${PATHS.PRODUCT}?product=${id}`)
    }
    const persian = require('persian');
    return (
        <section onClick={()=>handelProductPage(productObj.id)} key={productObj.id} className={style["Card"]}>
               <div className={style["card-photo-container"]}>
               <Imgcontainer imgSrc={`${BASE_URL}${productObj["thumbnail"]}`} clss={style["card-photo"]}/>
               <div className={style['card-photo-container-layer']}>
                   <div onClick={()=>handelProductPage(productObj.id)} className={style["buying-container"]}>
                   <ShoppingCartIcon  sx={{color:"#fff",fontSize:"2rem"}}/>
                   <span>دیدن مشخصات</span>
                   </div>
               </div>
               </div>
               <div className={style["card-body"]}>
                   <div className={style["card-body-title"]}>
                       <h5>{productObj.modelName}</h5>
                       <h6>{productObj.brand}</h6>
                   </div>
               <div onClick={()=>handelProductPage(productObj.id)} className={style["Card-price-container"]}>
               <Polygon clss={style["card-price"]} childern={`${persian.toPersian(productObj.price)} تومان`}/>
               </div>

               </div>
               <Productinfo size={productObj.SubCategory["name"]} country={productObj.country} type={productObj.Gearbox} clss={style["card-info"]}/>
        </section>
    );
}

export default ProductCard;
