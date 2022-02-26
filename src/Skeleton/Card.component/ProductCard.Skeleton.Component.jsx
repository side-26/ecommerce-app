import React from 'react';
import {Avatar,Pharagragh,Title} from '../General-Componet/SkeletonParts.Component';
import style from './ProductCard.Skeleton.module.scss'
const ProductcardSkeleton = () => {
    return (
        <section className={style["card-container"]}>
            <div className={style["Skeleton-card"]}>
                <div className={style["Skeleton-card-header"]}>
                    <Avatar/>
                </div>
                <div className={style["Skeleton-card-body"]}>
                    <section className={style["Skeleton-card-body-title"]}>
                    <Title size={1}/>
                    <Title size={3}/>
                    </section>
                    <Pharagragh/>
                </div>
                <div className={style["Skeleton-card-footer"]}>
                <Pharagragh/>
                <Pharagragh/>
                <Pharagragh/>
                </div>
            </div>
        </section>
    );
}

export default ProductcardSkeleton;
