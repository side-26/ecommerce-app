import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './CounterBtn.module.scss'
const Counterbtn = ({plus,onClickFu,val}) => {
    return (
        <button onClick={()=>onClickFu(val)} className={`${style["Counterbtn"]}`}>
            {plus&&<AddIcon/>}
            {!plus&&<RemoveIcon/>}
        </button>
    );
}

export default Counterbtn;

