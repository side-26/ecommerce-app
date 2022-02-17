import React from 'react';
import ProductCard from '../../Components/ProductCard.Component/ProductCard.Component';
import style from './ProductSection.module.scss';
const ProductSsection = ({obj}) => {
    console.log(obj)
    return (
        <section className={style["category-section"]}>
            <div className={style["category-row"]}>
                    {obj.map(item=>(<ProductCard key={item.id} productObj={item}/>))}
            </div>
        </section>
    );
}

export default ProductSsection;
