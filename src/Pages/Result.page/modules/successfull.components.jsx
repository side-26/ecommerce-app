import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATHS} from '../../../Config/Route.config'
import SuccesssrcImg from '../../../Asset/img/successfull-img.png';
import FailedsrcImg from '../../../Asset/img/failed-icons_prev_ui.png';

const Successfull = ({clss,linktxt,condition}) => {
    return (
        <div className={clss}>
            <figure>
            <img src={condition?SuccesssrcImg:FailedsrcImg} alt={`${condition?"successfull":"failed"}`} />
            </figure>
            <h2>{condition?"با موفقیت پرداخت شد":"پرداخت شما انجام نشد"}</h2>
            <NavLink to={condition?PATHS.HOME:PATHS.SHOPPING_CART}>
            {condition?"برگشت به صفحه اصلی سایت":"برگشت به صفحه خرید"}  
            </NavLink>
        </div>
    );
}

export default Successfull;
