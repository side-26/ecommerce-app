import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import MainHeader from '../../../Components/dashboardMain_Header.Component/Main_Header.Component';
import style from './Styles.Pages/SubCategory.module.scss'
const SubcategoryPage = () => {
    const [state, setstate] = useState(0);
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت | صفحه مدیریت  گروه ها
                </title>
            </Helmet>
            <MainHeader  bg="#ff1313e5" fs="1.3rem" clss={style["header"]} clss2={style["header-title"]} txt="افزودن زیر گروه" txt2="مدیریت زیر گروه" />
            
        </>
    );
}

export default SubcategoryPage;
