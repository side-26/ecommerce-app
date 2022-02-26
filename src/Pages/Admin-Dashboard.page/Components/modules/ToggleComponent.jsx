import React, { useState } from 'react';
import style from './ToggleComponent.module.scss'
const Togglecomponent = ({id,defaultValue,setnewArr,newArr,SetBtnAble}) => {
    const [Toggle, setToggle] = useState(false);
    const [count, setcount] = useState(defaultValue);
    const data={"id":id,"count":count,"defaultCount":defaultValue}
    const handleOnChange=(e)=>{
        if(e.target.value.trim()===""){
            e.target.value=0
        }
        setcount(+e.target.value)
        SetBtnAble(true)
    }
    const handleOpen=()=>{
        setToggle(!Toggle)
    }
    const handleSendObj=()=>{
        const dublicate=newArr.filter(item=>item.id!==id);
        setnewArr([...dublicate,data])
        // alert("blured")
    }
    // console.log(data);
    return (
        <div className={style["toggle-container"]} onClick={handleOpen}>
            <label className={style["toggle-body"]} onClick={(e=>e.stopPropagation())} htmlFor={`input${id}`} >
                <input oncl className={!Toggle&&style["hidden"]} onBlur={handleSendObj} onChange={handleOnChange} defaultValue={defaultValue} type="number" name={`input${id}`} />
                <span className={Toggle&&style["hidden"]}>
                    {count}
                </span>
            </label>
        </div>
    );
}

export default Togglecomponent;
