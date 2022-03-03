
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
import { toFarsiNumber } from '../../Utilities/function/ConvertToPersianNumber';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Config/Route.config'
import { IconButton } from '@mui/material';
import style from './ShoppingCart.page.module.scss';
// ?id=1&id=2&id=5
export default function ShoppingCart() {
  let product = useSelector(state => state.products.products);
  const [totalPrice,setTotalPrice]=useState(0)
  const dispatch = useDispatch();
  const counter = useSelector(state => state.customerCount.count);
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false)
  const [data, setdata] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const [changed,setChanged]=useState(false)
  const handleBuy = () => {
    navigate(PATHS.USERFORM)
  }
  useEffect(() => {
    const purchasedProducts = localStorage.getItem("order");
    if (purchasedProducts !== null) {
      console.log(purchasedProducts);
      let dataArr = JSON.parse(purchasedProducts);
      const dataCount = [...dataArr];
      setdata(dataCount)
      dataArr = dataArr.map(item => item.id);
      let dataUrl = dataArr.toString();
      dataUrl = dataUrl.replace(/,/g, "&id=");
      dataUrl = `id=${dataUrl}`;
      // console.log(dataCount);
      dispatch(fetchProductsRequest(BASE_URL, dataUrl));
      // console.log("hello");
    }
    else {
      dispatch(fetchProductsRequest(BASE_URL, "id=-2"));

    }

  }, [changed])
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteAll = () => {
    localStorage.removeItem("order");
    dispatch(calculateCounter(-counter))
    // alert("hello")
    dispatch(fetchProductsRequest(BASE_URL, "?id=-1"))
    setDeleted(true)
    handleClose();
  }

  // const mergeArrayObjects=(arr1, arr2)=> {
  //   return arr1.map((item, i) => {
  //       if (item.id === arr2[i].id&&arr1 !== undefined && arr2 !== undefined) {
  //         //merging two objects
  //         return Object.assign({}, item, arr2[i])

  //       }

  //   })
  // }
  // console.log(product);
  useEffect(() => {
    const concatedArr = data && product && [...data, ...product];
    let newArr = [];
    for (let i = 0; i < concatedArr.length / 2; i++) {
      for (let j = 0; j < concatedArr.length; j++) {
        if (concatedArr[i].id === concatedArr[j].id) {
          newArr.push({ ...concatedArr[i], ...concatedArr[j] })
        }
      }
    }
    newArr = newArr.filter(item => item.price !== undefined && item.value !== undefined)
    // concatedArr=concatedArr.splice(0,concatedArr.length/2)
    // const make
    
    setTotalPrice(newArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value * currentValue.price
      , 0
    ))
    // setChanged(!changed)
    // console.log(concatedArr);
  }, [data,product]);
  useEffect(() => {
    const LocalStorage=localStorage.getItem("order");
    if(LocalStorage!==null){
      let localArr=JSON.parse(LocalStorage);
      if(localArr.find(item=>item.value===0)){
        localArr=localArr.filter(item=>item.value!==0); 
        console.log(localArr);
        setdata(localArr)
        localStorage.setItem("order",JSON.stringify(localArr))
        setChanged(!changed)
      }
    }
      
  }, [counter]);
  console.log(totalPrice);
  return <>
    <Helmet>
      <title>
        فروشگاه اینترنتی خودرو | سبد خرید
      </title>
    </Helmet>
    <Navbar />
    <div className={`${style["container"]}`}>
      <div className={`${style["container-header"]}`}>
        <span className={`${style["container-header-title"]}`}> سبد خرید <span className={`${style["container-header-title-countProduct"]}`}>{toFarsiNumber(counter)}</span></span>
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
                onClick={handleClick} sx={{ color: "var(--main-color)" }}
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

          {(product && !deleted) && product.map(item => (<ShoppingCard setData={setdata} key={item.id} count={data.find(quntity => quntity.id === item.id)} productobj={item} />))}
          {(product.length === 0 || deleted) && <p>سبد خرید شما خالی هست.</p>}
        </main>
        {!deleted && <aside className={`${style["sidebar"]}`}>
          <div className={`${style["price-container"]}`}>
            <span>{`قیمت کالاها (${counter})`}</span>
            <strong>{toFarsiNumber((totalPrice / 1000).toFixed(3))} تومان</strong>
          </div>
          <div className={`${style["dicount-container"]}`}>
            <span>تخفیف کالا ها</span>
            <strong>(۰٪) ۰ تومان</strong>
          </div>
          <div className={`${style["total_price-container"]}`}>
            <strong>جمع سبد خرید</strong>
            <strong>{toFarsiNumber((totalPrice / 1000).toFixed(3))} تومان</strong>
          </div>
          <span className={`${style['description']}`}>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد</span>
          <Button onClick={handleBuy} disabled={localStorage.getItem("order") === null} size='large' className={`${style['buy-btn']}`} variant="contained">ادامه فرایند خرید</Button>
          <span className={`${style["warn-btn"]}`}>توجه :کالا ها بعد از 24 ساعت از سبد کالا حذف خواهند شد</span>
        </aside>}
      </section>
    </div>

  </>;
}
