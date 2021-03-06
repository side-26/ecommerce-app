import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../Config/Url.config';
// import { fetchProductRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action'
import { calculateCounter } from '../../Redux/Actions.Redux/ordersCount.Actions/Count.Actions'
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from '../../Api/Product.api'
import { Helmet } from 'react-helmet';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import { Button, IconButton } from '@mui/material';
import ReactHtmlParser from 'react-html-parser';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { NavLink, useSearchParams } from 'react-router-dom';
import ImageModal from './Components/ImageModal/imageModal.modal'
import { PATHS } from '../../Config/Route.config';
import loadingPictureSrc from '../../Asset/img/car-logo2.png';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import style from './ProductSsection.module.scss';

const ProductPage = ({ props }) => {
    // const product = useSelector(state => state.products.product);
    const [product, setProduct] = useState([])
    const[modalSrc,setModalSrc]=useState("");
    const[hidden,setHidden]=useState(true)
    // const counter = useSelector(state => state.customerCount.count)
    const [productId, setproductId] = useSearchParams();
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const [Show, setShow] = useState(0);
    const [OrderArr, setOrderArr] = useState()
    const [Val, setval] = useState(0);
    const [newval, setnewval] = useState([])
    const handelBuy = (value) => {
        console.log();
        const Order = localStorage.getItem("order")
        setval(value + Val)
        let arr = []
        if (Order === null) {
            arr = []
            // if (Val < product.count) {
            // }
        } else {
            arr = JSON.parse(Order);
        }
        if (localObj === undefined) {

            setOrderArr({ "id": product.id, "value": Val + value })
        }
        else {
            setOrderArr({ "id": product.id, "value": localObj.value + value })

        }
        dispatch(calculateCounter(value));
        // console.log(arr);
    }
    useEffect(() => {
        // dispatch(fetchProductRequest(BASE_URL, productId.get("product")));
        // let ordersStorage = localStorage.getItem("order");
        // if (ordersStorage!==undefined||ordersStorage.length!==0) {
        //     ordersStorage=JSON.parse(ordersStorage);
        //     ordersStorage = ordersStorage.filter(item => item !== undefined);
        //     setnewval(ordersStorage)
        //     // setnewval()
        // }
        // console.log(ordersStorage)
        Product.Get(BASE_URL, productId.get("product")).then(res => {
            setProduct(res)
        })

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
            arr = arr.filter(item => item.value > 0)
        }
        arr = arr.filter(item => item !== null);
        let newArr = arr.filter(item => item !== undefined)
        setnewval(newArr)
        console.log(arr);
        const sum = newArr.reduce(function (accumulateur, valeurCourante) {
            return accumulateur + valeurCourante.value;
        }, 0);
        // console.log(c)
        localStorage.setItem("order", JSON.stringify(newArr))


    }, [Val, OrderArr]);
    // const handelInput = (e) => {
    const localObj = (newval && newval.filter(item => item !== undefined)).find(obj => obj.id === product.id);
    // }
    const handleOpenImageModal = (e) => {
        setModalSrc(e.target.src);
        setHidden(false)
    }
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });

    try {
        return (
            <>
                <Helmet><title>{product.modelName} ???????? ???????????? ?? ???????? ?? ?????????? </title></Helmet>
                <Navbar />
                <section className={`${style["container"]}`}>
                    <main className={style["main"]}>
                        <div className={style["product-title-container"]}>
                            <h1>{product.brand} {product.modelName}</h1>
                            <div role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" href="/">
                                        ??????????
                                    </Link>
                                    <NavLink
                                        to={`${PATHS.PRODUCTS}?SubCategory=${product.SubCategory["name"] && product.SubCategory["name"]}`}
                                    >
                                        {product.SubCategory["name"] && product.SubCategory["name"]}
                                    </NavLink>
                                    <Typography color="text.primary">{product.modelName}</Typography>
                                </Breadcrumbs>
                            </div>
                            <div><CacheProvider value={cacheRtl}>
                                <Rating name="half-rating" defaultValue={0} precision={0.5} />
                            </CacheProvider>
                            </div>
                            <div className={style["price-container"]}>
                                <span>{product.price} ?????????? </span>
                            </div>
                            <div className={style["product-description"]}>
                                {ReactHtmlParser(product.description)}
                            </div>
                            {product.count === 0 && <div>
                                <span>?????????? ????????????</span>
                            </div>}
                            {product.count > 0 && <div className={style["product-price-container"]}>
                                {localObj && (localObj.value > 0 || Val > 0) && <div className={style["product-price"]}>
                                    <IconButton disabled={localObj.value >= product.count} sx={{ color: "var(--main-color)" }} onClick={() => handelBuy(1)}>
                                        <AddIcon />
                                    </IconButton>
                                    <span>{localObj.length === 0 ? Val : localObj.value}</span>
                                    <IconButton sx={{ color: "var(--main-color)" }} onClick={() => handelBuy(-1)}>
                                        <RemoveIcon />
                                    </IconButton>
                                </div>}
                                {
                                    (!localObj ? Val === 0 : localObj.value === 0) &&
                                    <Button onClick={() => handelBuy(1)} sx={{ backgroundColor: "var(--main-color)", fontFamily: "IranSansBold", height: "3rem" }} variant="contained">???????????? ???? ??????</Button>
                                }
                            </div>}
                        </div>
                        {/* {product["image"].map(img => (<div >
                                    <img src={`${BASE_URL}${img}`} alt={img} />
                                </div>))} */}
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
                                    <img onClick={(e) => handleOpenImageModal(e)} src={`${BASE_URL}${product["thumbnail"]}`} alt='hello' />
                                </SwiperSlide>
                                {product["image"].map(img => (<SwiperSlide >
                                    <img onClick={(e) => handleOpenImageModal(e)} src={`${BASE_URL}${img}`} alt={img} />
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
                <ImageModal hidden={hidden} setHidden={setHidden}  srcImage={modalSrc}/>
            </>
        );
    } catch (error) {
        console.log(error);
        return (
            <>
                <div className={style["loading-container"]}>
                    <figure>
                        <img src={loadingPictureSrc} alt="car-loading" />
                    </figure>
                </div>

            </>
        )
    }
}

export default ProductPage;
