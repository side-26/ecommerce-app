import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ppi from '../../Services/http.service';
import {PATHS} from '../../Config/Route.config'
import style from './404.page.module.scss'
import { Helmet } from 'react-helmet';
export const ErrorPage=()=> {
   useEffect(() => {
    //    api.get("/products").then(res=>{
    //        console.log(res)
    //    })
      
   }, []);
        return (
            <>
            <Helmet>
                <title>خطا 404 !!!</title>
            </Helmet>
            <main className={style["page-container"]}>
            <div className={style["page"]}>
            <h1>محتوای مورد نظر یافت نشد... </h1>
            <h5>خطای 404</h5>
            <NavLink replace to={PATHS.HOME}>بازگشت به صفحه اصلی</NavLink>
            {/* <Modal orderId={3}/> */}
        </div>
            </main>
            </>
        );
}
