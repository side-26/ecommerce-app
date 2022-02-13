import React from 'react';
import style from './SideBar.module.scss';
const Sidebar = () => {
    return (
       
            
            <section className={style["menu-sidebar-container"]}>
                    <div className={style["menu-sidebar"]}>
                        <div className={style["menu-container"]}>
                        <ul className={style["menu-container"]}>
                            <li>
                                <h3>خودرو</h3>
                                <ul className={style["sub-menu"]}>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                </ul>
                            </li>
                            <li>
                                مهدی
                                <ul>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                    <li>دشیدی</li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
            </section>
        
    );
}

export default Sidebar;
