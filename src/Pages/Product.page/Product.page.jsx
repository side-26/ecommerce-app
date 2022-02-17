import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../../Config/Url.config';
import { fetchProductRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action'
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from 'react-helmet';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import first from '../../Asset/img/16527.jpg';
import second from '../../Asset/img/33134.jpg';
import shird from '../../Asset/img/53507.jpg';
import fourth from '../../Asset/img/257008.jpg';
import "./styles.css";
import style from './ProductSsection.module.scss';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ProductPage = ({ props }) => {
    let product = useSelector(state => state.products.product);
    const [productId, setproductId] = useSearchParams();
    const dispatch = useDispatch();
    const [pro, setpro] = useState({})
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [Count, setCount] = useState(1);
    const [Show, setShow] = useState(false);
    const handelBuy = (e, val) => {
        setCount(Count + val)
    }
    useEffect(() => {
        dispatch(fetchProductRequest(BASE_URL, productId.get("product")))
    }, []);
    const handelInput = (e) => {

    }
    console.log(product)
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    try {
        return (
            <>
            <Helmet><title>صفحه مشخصات و خرید و محصول </title></Helmet>
                <Navbar />
                <section className={`${style["container"]}`}>
                    <main className={style["main"]}>
                        <div className={style["product-title-container"]}>
                            <h1>{product.brand} {product.modelName}</h1>
                            <div role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" href="/">
                                        خودرو
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/getting-started/installation/"
                                    >
                                        {product.SubCategory["name"]&&product.SubCategory["name"]}
                                    </Link>
                                    <Typography color="text.primary">{product.modelName}</Typography>
                                </Breadcrumbs>
                            </div>
                            <div><CacheProvider value={cacheRtl}>
                                <Rating name="half-rating" defaultValue={0} precision={0.5} />
                            </CacheProvider>
                            </div>
                            <div className={style["price-container"]}>
                                <span>{product.price} تومان </span>
                            </div>
                            <div className={style["product-description"]}>
                                <p>{product.description}</p>
                            </div>
                            <div className={style["product-price-container"]}>
                                <div className={Show && style["product-price"]}>

                                    <Button sx={{ backgroundColor: "var(--main-color)", fontFamily: "IranSansBold", height: "3rem" }} variant="contained">افزودن به سبد</Button>
                                </div>
                            </div>
                        </div>
                        <div className={style["slidebar-container"]}>
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src={`${BASE_URL}${product["thumbnail"]}`} alt='hello' />
                                </SwiperSlide>
                                {product["image"].map(img => (<SwiperSlide>
                                    <img src={`${BASE_URL}${img}`} alt={img} />
                                </SwiperSlide>))}

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={`${BASE_URL}${product["thumbnail"]}`} alt='hello' />
                                </SwiperSlide>
                                {product.image&&product.image.map(img => (<SwiperSlide>
                                    <img src={`${BASE_URL}${img}`} alt={img} />
                                </SwiperSlide>))}
                            </Swiper>
                        </div>
                    </main>
                </section>
            </>
        );
    } catch (error) {
        return (
            <>
                
                <h1>ارور داریم</h1>
                
            </>
        )
    }
}

export default ProductPage;
