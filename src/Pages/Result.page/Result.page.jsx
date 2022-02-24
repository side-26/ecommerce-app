import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Successfull from './modules/successfull.components';
import style from './Result.page.module.scss'
const ResultPage = () => {
    return (

        <>
            <Helmet>
                <title>
                    صفحه نتیجه خرید
                </title>
            </Helmet>
                <div className={style["container"]}>
                <main className={style["main"]}>
                    <Successfull condition={false} clss={style["success-section"]}/>
                </main>
                </div>

        </>
    );
}

export default ResultPage;
