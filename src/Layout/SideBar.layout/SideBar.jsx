import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../Config/Url.config'
import { fetchCategoryRequest, fetchsubCategoryRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
import { PATHS } from '../../Config/Route.config';

import style from './SideBar.module.scss';
const Sidebar = ({ show }) => {
    const category = useSelector(state => state.products.category);
    const subCategory = useSelector(state => state.products.subCategory);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoryRequest(BASE_URL))
        dispatch(fetchsubCategoryRequest(BASE_URL))
    }, [])
    console.log(show);
    return (

        <aside className={`${style["menu-sidebar-container"]} ${!show&&style["hidden"]}`}>
            <div className={style["menu-sidebar"]}>
                <div className={style["menu-container"]}>
                    <ul className={style["menu"]}>
                        {category.map(item => (<li key={item.id}>
                            <h3><NavLink to={`${PATHS.PRODUCTS}?category=${item.name}`}>{item.name}</NavLink></h3>
                            <ul className={style["sub-menu"]}>
                                {subCategory.filter(el => el.category === item.id).map(itemlink => (<li className={style["link"]} key={itemlink.name}><figure><img src={`${BASE_URL}${itemlink.icon}`} alt="hello" /></figure><NavLink to={`${PATHS.PRODUCTS}?SubCategory=${itemlink.name}&category=${item.name}`}>{itemlink.name}</NavLink></li>))}
                            </ul>
                        </li>))}
                    </ul>
                </div>
            </div>
        </aside>

    );
}

export default Sidebar;
