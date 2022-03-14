import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counterbtn from '../../../Components/counterBtn.Component/CounterBtn.Component';
import Avatar from '../../../Components/imageLogo.Component/Avatar';
import { BASE_URL } from '../../../Config/Url.config';
import { calculateCounter } from '../../../Redux/Actions.Redux/ordersCount.Actions/Count.Actions';
import {toFarsiNumber} from '../../../Utilities/function/ConvertToPersianNumber'
import { handleSprateNumber } from '../../../Utilities/function/seprateNumbers';
import style from './ShoppingCard.module.scss';

export default function ShoppingCard({ productobj,setData }) {
        // const counter=count&&count.find(item=>item.id===productobj.id);
        // console.log(count)
        const [count,setCount]=useState(0)
        const counter=useSelector(state=>state.customerCount.count);
        const dispatch=useDispatch();
        const handleCounter=(Val)=>{
            const LocalStorage=localStorage.getItem("order")
            if(LocalStorage!==null){
                let LocalStorageArr=JSON.parse(LocalStorage);
                let selectedObj=LocalStorageArr.find(item=>item.id===productobj.id)
                selectedObj.value+=Val;
                LocalStorageArr=LocalStorageArr.filter(item=>item.id!==productobj.id)
                LocalStorageArr=[...LocalStorageArr,selectedObj];
                setData(LocalStorageArr)
                localStorage.setItem("order",JSON.stringify(LocalStorageArr))
                console.log(LocalStorageArr);
                dispatch(calculateCounter(Val))
                setCount(selectedObj)
            }
        }
        useEffect(() => {
            const LocalStorage=localStorage.getItem("order")
            if(LocalStorage!==null){
                const selectedObj=JSON.parse(LocalStorage).find(item=>item.id===productobj.id)
                setCount(selectedObj)
            }
           
        }, []);
        // useEffect(() => {
        //     const LocalStorage=localStorage.getItem("order")
        //     const selectedObj=JSON.parse(LocalStorage).find(item=>item.id===productobj.id)
        //     // if(selectedObj.value>0){
        //     //     console.log(counter);
        //     // }
        //     // 
            
            
        // }, [count]);
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
            {count&&<Counterbtn disabled={count.value>=productobj.count}  onClickFu={handleCounter} val={1}  plus={true} />}
            {count&&<span>{toFarsiNumber(count.value)}</span>}
            <Counterbtn  disabled={false} onClickFu={handleCounter} val={-1} plus={false} />

        </div>
        <div className={`${style["card-product-price"]}`}>
            <strong>{toFarsiNumber(handleSprateNumber(productobj.price))} تومان</strong>
        </div>
        <div>
        </div>
    </section>;
}
