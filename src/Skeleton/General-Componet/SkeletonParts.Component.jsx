import React from 'react';
import style from './SkeletonParts.module.scss'
 export const Title = ({size}) => {
    return (
        <div className={`${style[`title`]} ${style[`title-${size}`]}`}>
            
        </div> 
    );
}
export const Pharagragh=()=>{
    return( 
        <div className={`${style[`Pharagragh`]}`}>

        </div>
    );

}
export const Avatar=()=>{
    return(
        <div className={`${style[`Avatar`]}`}>

        </div>
    );
}
export const Polygeon=()=>{

}

