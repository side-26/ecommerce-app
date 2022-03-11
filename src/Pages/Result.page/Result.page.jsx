import React, { useEffect } from 'react';
import {orders} from '../../Api/Orders.api'
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Successfull from './modules/successfull.components';
import style from './Result.page.module.scss'
import { BASE_URL } from '../../Config/Url.config';
const ResultPage = () => {
    const [result, setResult] = useSearchParams();
    useEffect(() => {
        if (result.get("result") === "successfull"){
            const data=localStorage.getItem("orders");
            orders.Post(BASE_URL,JSON.parse(data))
            localStorage.removeItem("order")
        }
        localStorage.removeItem("orders")
    }, [result]);
    return (
        <>
            <Helmet>
                <title>
                    صفحه نتیجه خرید
                </title>
            </Helmet>
            <div className={style["container"]}>
                <main className={style["main"]}>
                    <Successfull condition={result.get("result") === "failed" ? false : true} clss={style["success-section"]} />
                </main>
            </div>

        </>
    );
}

export default ResultPage;
