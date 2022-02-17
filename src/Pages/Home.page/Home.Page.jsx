
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import { fetchProductsRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import ProductSection from '../../Layout/Products-Section.layout/ProductSection';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { PATHS } from '../../Config/Route.config'
import Polygon from '../../Components/ProductCard.Component/modules/polygon.Component';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BASE_URL } from '../../Config/Url.config'
import style from './Home.Page.module.scss';
// ?SubCategory.name=کوپه&_limit=6

const HomePage = () => {
  const [currentSubCategory, setcurrentSubCategory] = useState("کراس اوور");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  useEffect(() => {
    dispatch(fetchProductsRequest(BASE_URL, `SubCategory.name=${currentSubCategory}&_page=1&_limit=6`))
  }, [currentSubCategory]);
  const handelSubCategory = (e) => {
    setcurrentSubCategory(e.target.textContent);
  }
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
              <Button proId={1} onClick={(e) => handelSubCategory(e)} sx={{ borderColor: "#212121", color: "#212121", fontFamily: "IranSansBold", fontSize: "1.1rem" }} variant="outlined">کراس اوور</Button>
              <Button proId={2} onClick={(e) => handelSubCategory(e)} sx={{ borderColor: "#212121", color: "#212121", fontFamily: "IranSansBold", fontSize: "1.1rem" }} variant="outlined">سدان</Button>
              <Button proId={3} onClick={(e) => handelSubCategory(e)} sx={{ borderColor: "#212121", color: "#212121", fontFamily: "IranSansBold", fontSize: "1.1rem" }} variant="outlined">کوپه</Button>
            </div>
          </div>
          <section className={style["product-part-container"]}>
            <ProductSection obj={products} />
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


