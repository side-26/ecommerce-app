import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import Sidebar from '../../Layout/SideBar.layout/SideBar';
import IconButton from '@mui/material/IconButton';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import ProductSsection from '../../Layout/Products-Section.layout/ProductSection';
import { fetchCategoryRequest, fetchProductsRequest, fetchProductsLengthRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
import { BASE_URL } from '../../Config/Url.config';
import Polygon from '../../Components/ProductCard.Component/modules/polygon.Component'
import style from './Categories.page.module.scss';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';


const CategoriesPage = () => {
    const [Show, setShow] = useState(true);
    const [currentPage, setCurrnetPage] = useSearchParams({});
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products);
    const productsLength = useSelector(state => state.products.length);
    const [categoryParams, setCategoryParams] = useSearchParams({});
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    // ?SubCategory.name=کراس%20اوور&_page=1&_limit=20
    useEffect(() => {
        dispatch(fetchProductsLengthRequest(BASE_URL, `SubCategory.name=${categoryParams.get("SubCategory") ? categoryParams.get("SubCategory") : "کراس اوور"}&_page=${currentPage.get("page")}&_limit=6`));
        dispatch(fetchProductsRequest(BASE_URL, `SubCategory.name=${categoryParams.get("SubCategory") ? categoryParams.get("SubCategory") : "کراس اوور"}&_page=${currentPage.get("page")}&_limit=6`));
    }, [currentPage, categoryParams])
    console.log(categoryParams.get("SubCategory"));
    const handelShowSideBar = () => {
        setShow(!Show);
    }
    const handlePageClick = (event) => {
        setCurrnetPage({ SubCategory: `${categoryParams.get("SubCategory")}`, page: `${event.selected + 1}` });

    };
    console.log(currentPage.get("page"))
    return (
        <>
            <Helmet>
                <title>
                    فروشگاه اینترنتی خودرو | صفحه محصولات
                </title>
            </Helmet>
            <Navbar />
            <div className={style["container"]}>
                <Sidebar show={Show} />
                <IconButton onClick={handelShowSideBar} size='large' sx={{ transition: "all .35s ease", transform: `${Show ? "rotate(0deg)" : "rotate(180deg)"}`, position: "fixed", right: `${Show ? "210px" : "20px"}`, top: "55%", fontSize: "3rem", backgroundColor: "var(--bg-color)", zIndex: "20" }}>
                    <DoubleArrowSharpIcon />
                </IconButton>
                <main className={style["main"]}>
                    <div className={style["header-main"]}>
                        <h3>کالاهای گروه <span className={style["hidden-title"]}>{categoryParams.get("SubCategory")}</span> <Polygon clss={style["title"]} childern={categoryParams.get("SubCategory") ? categoryParams.get("SubCategory") : "کراس اوور"} /></h3>
                    </div>
                    <ProductSsection obj={products} />
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="بعد >"
                        onPageChange={handlePageClick}
                        containerClassName={style["pages-container"]}
                        activeClassName={style["active-page-btn"]}
                        disabledClassName={style["disabled-page-btn"]}
                        nextLinkClassName={style["next-page-btn"]}
                        previousLinkClassName={style["pre-page-btn"]}
                        pageRangeDisplayed={5}
                        pageCount={+productsLength / 6}
                        previousLabel="< قبل"
                        renderOnZeroPageCount={null}

                    />
                </main>
            </div>
        </>
    );
}

export default CategoriesPage;



