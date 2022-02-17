import React, { useState,useEffect } from 'react';
import moment from 'jalali-moment'
import {toPersian} from '../../../../../../node_modules/persian/dist/persian'
import style from './Info_Page.module.scss'
const InfoPage = ({orderObj}) => {
    const persian = require('persian');
    function toFarsiNumber(n) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    
        return n
          .toString()
          .split('')
          .map(x => farsiDigits[x])
          .join('');
      }
    return (
        <div className={style["info-container"]}>
            <div className={style["info-box"]}>
                <span>نام مشتری:</span>
                <span>{orderObj.name}</span>
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
                <span>{!orderObj.deliverd?"تحویل داده نشده": persian.toPersian(moment(orderObj.timeDeliverd, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))}</span>
            </div>
            <div className={style["info-box"]}>
                <span>زمان سفارش:</span>
                <span>{ !orderObj.deliverd?"تحویل داده نشده":persian.toPersian(moment(orderObj.orderTime, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))}</span>
            </div>
         
        </div>
    );
}

export default InfoPage;
