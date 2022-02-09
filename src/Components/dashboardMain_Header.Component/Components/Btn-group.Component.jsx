import React from 'react';
import style from './style.module/Btn-Group.module.scss';
;

const BtnGroup = props => {
    return (
        <div className={style["btn-group"]}>
            {props.children}
        </div>
    );
}

export default BtnGroup;
