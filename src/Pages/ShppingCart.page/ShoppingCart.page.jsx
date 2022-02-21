
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import Button from '@mui/material/Button';
import ShoppingCard from './Components/ShoppingCard.Component';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import { calculateCounter } from '../../Redux/Actions.Redux/ordersCount.Actions/Count.Actions';
import { fetchProductsRequest } from '../../Redux/Actions.Redux/Products.Action/Products.Action';
import { BASE_URL } from '../../Config/Url.config'
import style from './ShoppingCart.page.module.scss';
import { IconButton } from '@mui/material';
// ?id=1&id=2&id=5
export default function ShoppingCart() {
  const product = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.customerCount.count);
  const [pro,setpro] = useState([])
  const [data, setdata] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    console.log(counter);
    const purchasedProducts = localStorage.getItem("order");
    if (purchasedProducts !== null) {
      let dataArr = JSON.parse(purchasedProducts);
      const dataCount = [...dataArr];
      setdata(dataCount)
      dataArr = dataArr.map(item => item.id);
      let dataUrl = dataArr.toString();
      dataUrl = dataUrl.replace(/,/g, "&id=");
      dataUrl = `id=${dataUrl}`;
      console.log(dataCount);
      dispatch(fetchProductsRequest(BASE_URL, dataUrl));
      console.log(purchasedProducts);
      setpro(product)
    }
    else {
      dispatch(calculateCounter(0));
    }
  }, [pro])
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteAll=()=>{
    localStorage.removeItem("order");
    // dispatch(calculateCounter(0))
    setpro(["empty"]);
    // alert("hello")
    handleClose();
  }
  console.log(product, data);
  return <>
    <Helmet>
      <title>
        فروشگاه اینترنتی خودرو | سبد خرید
      </title>
    </Helmet>
    <Navbar />
    <div className={`${style["container"]}`}>
      <div className={`${style["container-header"]}`}>
        <span className={`${style["container-header-title"]}`}> سبد خرید <span className={`${style["container-header-title-countProduct"]}`}>{counter}</span></span>
      </div>
      <section className={`${style["main_sidebar_container"]}`}>
        <main className={`${style["main"]}`}>
          <div className={style["header-of-cart"]}>
            <h4>سبد خرید شما</h4>
            <div>
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} sx={{color:"var(--main-color)"}}
              >
                <MoreHorizSharpIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleDeleteAll}>حذف همه</MenuItem>
              </Menu>
            </div>
          </div>

          {product && product.map(item => (<ShoppingCard key={item.id} count={data.find(quntity => quntity.id === item.id)} productobj={item} />))}
          {product.length===0 && "سبد خرید شما خالی هست."}
        </main>
        <aside className={`${style["sidebar"]}`}>
          <div className={`${style["price-container"]}`}>
            <span>قیمت کالاها (۶)</span>
            <strong>۲۳۴,۳۵۰ تومان</strong>
          </div>
          <div className={`${style["dicount-container"]}`}>
            <span>تخفیف کالا ها</span>
            <strong>(۰٪) ۰ تومان</strong>
          </div>
          <div className={`${style["total_price-container"]}`}>
            <strong>جمع سبد خرید</strong>
            <strong>۲۳۴,۳۵۰ تومان</strong>
          </div>
          <span className={`${style['description']}`}>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد</span>
          <Button size='large' className={`${style['buy-btn']}`} variant="contained">ادامه فرایند خرید</Button>
          <span className={`${style["warn-btn"]}`}>توجه :کالا ها بعد از 24 ساعت از سبد کالا حذف خواهند شد</span>
        </aside>
      </section>
    </div>

  </>;
}
