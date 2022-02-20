import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../../Config/Url.config';
import { fetchProductRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action'
import { calculateCounter } from '../../Redux/Actions.Redux/ordersCount.Actions/Count.Actions'
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
import { Button, IconButton, valueToPercent } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import style from './ProductSsection.module.scss';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductPage = ({ props }) => {
    const product = useSelector(state => state.products.product);
    const counter = useSelector(state => state.customerCount.count)
    const [productId, setproductId] = useSearchParams();
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [Show, setShow] = useState(false);
    const [OrderArr, setOrderArr] = useState()
    const [Val, setval] = useState(0);
    const [newval, setnewval] = useState([])
    const handelBuy = (value) => {
        console.log(our);
        const Order = localStorage.getItem("order")
        setval(value + Val)
        let arr = []
        if (Order === null) {
            arr = []
            // if (Val < product.count) {
            // }
        } else {
            arr = JSON.parse(Order)
        }
        if (our === undefined) {
            
            setOrderArr({ "id": product.id, "value": Val + value })
        }
        else {
            
            setOrderArr({ "id": product.id, "value": our.value + value })
        }
        dispatch(calculateCounter(value))
        // getUniqueListBy(arr, "id")
        console.log(arr);
        // dispatch(calculateCounter(value))

        // if (Val < product.count) {
        //     dispatch(calculateCounter(value))

        //     // localStorage.setItem("order",JSON.stringify(or));
        //     if (Val > 0) {
        //         setShow(true)


        //     }
        //     else {
        //         setShow(false)
        //     }
        // }
    }
    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("order"))
        x = x.filter(item => item !== undefined);
        if (x[x.length - 1] !== null) {
            setnewval(x)
            // setnewval()
        }
        dispatch(fetchProductRequest(BASE_URL, productId.get("product")));
    }, []);
    useEffect(() => {
        const Order = localStorage.getItem("order");
        let arr = []
        if (Order === null) {
            arr = []
            // if (Val < product.count) {
            // }
        } else {
            arr = JSON.parse(Order)
            arr = arr.filter(item => item !== null);
        }
        arr = [...arr, OrderArr]
        if (arr[0] !== undefined && OrderArr !== undefined) {
            arr = arr.filter(item => item.id !== product.id)
            arr = [...arr, OrderArr]
            arr.find(item => item.id === product.id)
        }
        arr = arr.filter(item => item !== null);
        let newArr=arr.filter(item=>item!==undefined)
        setnewval(newArr)
        const sum = newArr.reduce(function (accumulateur, valeurCourante) {
            return accumulateur + valeurCourante.value;
        }, 0);
        // console.log(c)
        localStorage.setItem("order", JSON.stringify(newArr))
    }, [Val, OrderArr,dispatch]);
    // const handelInput = (e) => {
    const our = (newval && newval.filter(item => item !== undefined)).find(obj => obj.id === product.id);
    console.log(our);
    // }
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    try {
        return (
            <>
                <Helmet><title>{product.modelName} صفحه مشخصات و خرید و خودرو </title></Helmet>
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
                                        {product.SubCategory["name"] && product.SubCategory["name"]}
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
                                {our && (our.value > 0 || Val > 0) && <div className={style["product-price"]}>
                                    <IconButton disabled={our.value >= product.id} sx={{ color: "var(--main-color)" }} onClick={() => handelBuy(1)}>
                                        <AddIcon />
                                    </IconButton>
                                    <span>{our.length === 0 ? Val : our.value}</span>
                                    <IconButton sx={{ color: "var(--main-color)" }} onClick={() => handelBuy(-1)}>
                                        <RemoveIcon />
                                    </IconButton>
                                </div>}
                                {
                                    (!our ? Val === 0 : our.value === 0) &&
                                    <Button onClick={() => handelBuy(1)} sx={{ backgroundColor: "var(--main-color)", fontFamily: "IranSansBold", height: "3rem" }} variant="contained">افزودن به سبد</Button>
                                }
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
                                {product["image"].map(img => (<SwiperSlide >
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
                                {product.image && product.image.map(img => (<SwiperSlide>
                                    <img src={`${BASE_URL}${img}`} alt={img} />
                                </SwiperSlide>))}
                            </Swiper>
                        </div>
                    </main>
                </section>
            </>
        );
    } catch (error) {
        console.log(error);
        return (
            <>

                <h1>ارور داریم</h1>

            </>
        )
    }
}

export default ProductPage;
