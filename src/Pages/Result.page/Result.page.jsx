import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Successfull from './modules/successfull.components';
import style from './Result.page.module.scss'
const ResultPage = () => {
    const [result, setResult] = useSearchParams();
    useEffect(() => {
        if(result.get("result")==="successfull")
            localStorage.removeItem("order")
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
