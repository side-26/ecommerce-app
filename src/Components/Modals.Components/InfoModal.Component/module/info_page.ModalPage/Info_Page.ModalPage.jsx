import React from 'react';
import moment from 'jalali-moment'
import {toFarsiNumber} from '../../../../../Utilities/function/ConvertToPersianNumber'
import style from './Info_Page.module.scss'
const InfoPage = ({orderObj}) => {
    const persian = require('persian');
    console.log(orderObj)
    return (
        <div className={style["info-container"]}>
            <div className={style["info-box"]}>
                <span>نام مشتری:</span>
                <span>{orderObj.name} {orderObj.lastName}</span>
            </div>
            <div className={style["info-box"]}>
                <span>آدرس:</span>
                <span>{orderObj.address}</span>
            </div>
            <div className={style["info-box"]}>
                <span>تلفن:</span>
                <span>{toFarsiNumber(`${orderObj.tel}`)}</span>
            </div>
            <div className={style["info-box"]}>
                <span>زمان تحویل:</span>
                <span>{!orderObj.deliverd?"تحویل داده نشده": persian.toPersian(moment(orderObj.timeDeliverd, 'DD/MM/YYYY').locale('fa').format('YYYY/MM/DD'))}</span>
            </div>
            <div className={style["info-box"]}>
                <span>زمان سفارش:</span>
                <span>{ orderObj.orderTime&&persian.toPersian(moment(orderObj.orderTime, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))}</span>
            </div>
         
        </div>
    );
}

export default InfoPage;
