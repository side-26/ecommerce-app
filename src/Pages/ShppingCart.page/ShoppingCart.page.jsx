
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
import { handleSprateNumber } from '../../Utilities/function/seprateNumbers';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Config/Route.config'
import { IconButton } from '@mui/material';
import style from './ShoppingCart.page.module.scss';
// ?id=1&id=2&id=5
export default function ShoppingCart() {
  let product = useSelector(state => state.products.products);
  const [totalPrice, setTotalPrice] = useState(0)
  const dispatch = useDispatch();
  const counter = useSelector(state => state.customerCount.count);
  const [orderArr, setOrderArr] = useState([])
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false)
  const [data, setdata] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const [changed, setChanged] = useState(false)
  const handleBuy = () => {
    localStorage.setItem("orders", JSON.stringify({
      "totalPrice": totalPrice,
      "deliverd": false,
      "timeDeliverd": "",
      "orders": orderArr
    }))
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
      dispatch(calculateCounter(-counter))
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
    setChanged(!changed)
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
    setOrderArr(newArr)
    // concatedArr=concatedArr.splice(0,concatedArr.length/2)
    // const make

    setTotalPrice(newArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value * currentValue.price
      , 0
    ))
    // setChanged(!changed)
    // console.log(concatedArr);
  }, [data, product]);
  useEffect(() => {
    const LocalStorage = localStorage.getItem("order");
    if (LocalStorage !== null) {
      let localArr = JSON.parse(LocalStorage);
      if (localArr.find(item => item.value === 0)) {
        localArr = localArr.filter(item => item.value !== 0);
        console.log(localArr);
        setdata(localArr)
        localStorage.setItem("order", JSON.stringify(localArr))
        setChanged(!changed)
      }
    }

  }, [counter]);
  console.log(toFarsiNumber(handleSprateNumber("25000000000")));
  return <>
    <Helmet>
      <title>
        ?????????????? ???????????????? ?????????? | ?????? ????????
      </title>
    </Helmet>
    <Navbar />
    <div className={`${style["container"]}`}>
      <div className={`${style["container-header"]}`}>
        <span className={`${style["container-header-title"]}`}> ?????? ???????? <span className={`${style["container-header-title-countProduct"]}`}>{toFarsiNumber(product.length)}</span></span>
      </div>
      <section className={`${style["main_sidebar_container"]}`}>
        <main className={`${style["main"]}`}>
          <div className={style["header-of-cart"]}>
            <h4>?????? ???????? ??????</h4>
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
                <MenuItem onClick={handleDeleteAll}>?????? ??????</MenuItem>
              </Menu>
            </div>
          </div>

          {(product && !deleted) && product.map(item => (<ShoppingCard setData={setdata} key={item.id} count={data.find(quntity => quntity.id === item.id)} productobj={item} />))}
          {(product.length === 0 || deleted) && <p>?????? ???????? ?????? ???????? ??????.</p>}
        </main>
        {!deleted && <aside className={`${style["sidebar"]}`}>
          <div className={`${style["price-container"]}`}>
            <span>{`???????? ???????????? (${counter})`}</span>
            <strong>{toFarsiNumber(handleSprateNumber(totalPrice))} ??????????</strong>
          </div>
          <div className={`${style["dicount-container"]}`}>
            <span>?????????? ???????? ????</span>
            <strong>(????) ?? ??????????</strong>
          </div>
          <div className={`${style["total_price-container"]}`}>
            <strong>?????? ?????? ????????</strong>
            <strong>{toFarsiNumber(handleSprateNumber(totalPrice))} ??????????</strong>
          </div>
          <span className={`${style['description']}`}>??????????????? ?????????? ???? ?????????? ???? ???????? ?????????? ???????? ?? ????????????? ?????????? ?????????????? ????????? ???????????? ?? ???? ?????? ???????? ?????????? ?????????? ????</span>
          <Button onClick={handleBuy} disabled={localStorage.getItem("order") === null || JSON.parse(localStorage.getItem("order")).length === 0} size='large' className={`${style['buy-btn']}`} variant="contained">?????????? ???????????? ????????</Button>
          <span className={`${style["warn-btn"]}`}>???????? :???????? ???? ?????? ???? 24 ???????? ???? ?????? ???????? ?????? ???????????? ????</span>
        </aside>}
      </section>
    </div>

  </>;
}
