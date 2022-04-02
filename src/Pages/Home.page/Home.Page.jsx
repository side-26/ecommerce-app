
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import { fetchProductsRequest, fetchsubCategoryRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import SkeletonCard from '../../Skeleton/Card.component/ProductCard.Skeleton.Component'
import ProductSection from '../../Layout/Products-Section.layout/ProductSection';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { PATHS } from '../../Config/Route.config'
import Polygon from '../../Components/ProductCard.Component/modules/polygon.Component';
import Button from '@mui/material/Button';
import { BASE_URL } from '../../Config/Url.config';
import http from '../../Services/http.service'
import style from './Home.Page.module.scss';

// ?SubCategory.name=کوپه&_limit=6

const HomePage = () => {
  const [currentSubCategory, setcurrentSubCategory] = useState("کراس اوور");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const SubCategory = useSelector(state => state.products.subCategory)
  useEffect(() => {
    dispatch(fetchProductsRequest( BASE_URL,`SubCategory.name=${currentSubCategory}&_page=1&_limit=6`));
    dispatch(fetchsubCategoryRequest(BASE_URL));
    
  }, [currentSubCategory]);
  const handelSubCategory = (e) => {
    setcurrentSubCategory(e.target.textContent);
  }
  console.log();
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  return (
    <>
      <Helmet>
        <title>
          فروشگاه اینترنتی خودرو |صفحه اصلی
        </title>
      </Helmet>
      <Navbar />
      <section className={style["first-section"]}>
        <div className={style["section-bg"]}>
          <div className={style["first-section-title"]}>
            <h3>اتو گالری  خودرو</h3>
            <h1>با ما بهتر برانید</h1>
            <span>نمایش محصولات<IconButton onClick={() => navigate(PATHS.PRODUCTS)} size='large' aria-label="delete" sx={{ color: "var(--main-color)", transform: "rotate(180deg)" }}><SendIcon /></IconButton></span>
          </div>
        </div>
      </section>
      <main className={style["main-section"]}>
        <div className={style["second-section"]}>
          <div className={style["second-section-title"]}>
            <h3>محصولات گروه <Polygon clss={style["second-section-title-polygon"]} childern={currentSubCategory} /></h3>
          </div>
          <div className={style["btn-group-container"]}>
            <div className={style["btn-group"]}>
              {SubCategory.filter(item => item.category === 1).map(sub => (
                <Button key={sub.id} onClick={(e) => handelSubCategory(e)} sx={{ borderColor: "#212121", color: `${currentSubCategory === sub.name ? "#fff" : "#212121"}`, fontFamily: "IranSansBold", fontSize: "1.1rem", backgroundColor: `${currentSubCategory === sub.name ? "#212121" : "#f2f2f2f"}` }} variant="outlined">{sub.name}</Button>
              ))
              }
            </div>
            <NavLink to={PATHS.PRODUCTS}>
              محصولات بیشتر
            </NavLink>
          </div>
          <section className={style["product-part-container"]}>
            {products.length > 0 && <ProductSection obj={products} />}
            {products.length <= 0 && <SkeletonCard />}
          </section>
        </div>
        <div className={style["third-section"]}>
          <CacheProvider value={cacheRtl}>
            <form className={style["form-sect"]}>
              <input type="email" placeholder='ایمیل خود را وارد کنید' />
              <Button size='large' sx={{ borderColor: "#aaa", color: "#aaa", width: "100%", mt: "2rem", fontFamily: "IranSans", }} variant="outlined" type={'submit'}>
                ثبت ایمیل
              </Button>
            </form>
          </CacheProvider>
        </div>
      </main>
      <footer className={style["footer-section"]}>
        <p>توسعه داده شده توسط <a href="https://github.com/side-26">side-26</a> با ❤ </p>
      </footer>
    </>
  );
}
export default HomePage;