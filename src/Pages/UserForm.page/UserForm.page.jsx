import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import AdapterJalali from '@date-io/date-fns-jalali';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Config/Route.config';
import { replace } from 'stylis';
import style from './UserForm.page.module.scss';
import { orders } from '../../Api/Orders.api';
import { BASE_URL } from '../../Config/Url.config';


const Userform = () => {
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(new Date());
    const [disabled, setDisabled] = useState(true);
    const [mobilNumber, setMobileNumber] = useState("");
    const navigate = useNavigate()
    const handleActiveSubmit = ([...arr]) => {
        if (
            arr.every(item => item.trim() !== "")
        ) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }
    const handleChange = (e, callback) => {
        callback(e.target.value)
    }
    const handleValidate = (e, type) => {
        if (type === "name" || type === "family") {
            if (e.target.value.trim().length < 3) {
                alert("حاجی چشاتو واکن اینپوت رو نگاه کن😂😂")
                e.target.value = ""
            }

        }
        else if (type === "address") {
            if (e.target.value.length < 15 || !e.target.value.includes("-")) {
                alert("آدرس شما باید حداقل 15 حرف و شامل - باشد")
                e.target.value = ""
            }
        } else if (type === "mobile") {
            if (e.target.value.length !== 11 || e.target.value[0] !== "0") {
                alert("شماره باید 11 رقم و با صفر شروع شود.")
                setMobileNumber("")
            }
            // alert(e.target.value.length)
        } else if (type === "orderTime") {
            // alert("hello")
            const todayTime = Date.now();
            const inputTime = Date.parse(e);
            if (inputTime < todayTime) {
                alert("شما نمی توانید روز سفارش را قبل از امروز بزنید!!");
                setDate("")
                setDisabled(true)
            }
            // alert("hello")

        }
        handleActiveSubmit([name, family, address, mobilNumber, date])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "name": name,
            "lastName": family,
            "address": address,
            "orderTime": date,
            "tel": mobilNumber,
        }
        if (localStorage.getItem("order") !== null) {
            // data["orders"] = JSON.parse(localStorage.getItem("order"));
            let oldLocal=localStorage.getItem("orders")
            oldLocal=JSON.parse(oldLocal) 
            localStorage.setItem("orders", JSON.stringify({...oldLocal,...data}))
            orders.Post(BASE_URL,{...oldLocal,...data})
            window.location.href = "http://localhost:3001";
        } else {
            navigate(PATHS.HOME, replace)
        }
    }
    const handleDate = (value) => {
        // alert("hello")
        const todayTime = Date.now();
        const inputTime = Date.parse(value);
        if (inputTime <= todayTime) {
            alert("شما نمی توانید روز سفارش را قبل از امروز بزنید!!");
            setDate("")
            setDisabled(true)
        } else {
            setDate(value)
            setDisabled(false)
            // handleActiveSubmit([name, family, address, mobilNumber, date])
        }
    }
    console.log(date);
    return (
        <>

            <Helmet>
                <title>
                    فروشگاه اینترنتی خودرو |صفحه اطلاعات کاربر
                </title>
            </Helmet>
            <Navbar />
            <CacheProvider value={cacheRtl}>
                <div className={`${style["container"]}`}>
                    <main className={`${style["main"]}`}>
                        <form onSubmit={(e) => handleSubmit(e)} className={`${style["form"]}`}>
                            <div className={`${style["input-container"]}`}>
                                <TextField
                                    size='large'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="نام"
                                    type="text"
                                    onChange={e => handleChange(e, setName)}
                                    onBlur={e => handleValidate(e, "name")}

                                    autoComplete="current-password"
                                /><TextField
                                    variant="filled"
                                    size='medium'
                                    required
                                    className={`${style["input"]}`}
                                    label="نام خانوادگی"
                                    type="text"
                                    autoComplete="current-password"
                                    value={family}
                                    onChange={e => handleChange(e, setFamily)}
                                    onBlur={e => handleValidate(e, "family")}

                                />
                            </div>
                            <div className={`${style["input-container"]}`}>
                                <TextareaAutosize
                                    required
                                    placeholder='آدرس خود را وارد کنید'
                                    minRows={3}
                                    minLength={10}
                                    className={`${style["text-area-input"]}`}
                                    value={address}
                                    onChange={e => handleChange(e, setAddress)}
                                    onBlur={e => handleValidate(e, "address")}
                                />
                                <span></span>
                                <TextField
                                    size='medium'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="تلفن همراه"
                                    type="number"
                                    value={mobilNumber}
                                    onChange={e => handleChange(e, setMobileNumber)}
                                    onBlur={e => handleValidate(e, "mobile")}
                                />
                            </div>
                            <div className={`${style["input-container"]}`}>

                                {/* <TextField
                                    size='medium'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    type="date"
                                    autoComplete="current-password"
                                    value={date}
                                    onChange={e => handleChange(e, setDate)}
                                    onBlur={e => handleValidate(e, "orderTime")}

                                /> */}
                                <LocalizationProvider dateAdapter={AdapterJalali}>
                                    <DatePicker
                                        mask="__/__/____"
                                        value={date}
                                        onChange={(newValue) => handleDate(newValue)}
                                        // onClose={()=>handleValidate(date,"orderTime")}
                                        renderInput={(params) => <TextField  {...params} />}
                                    />
                                </LocalizationProvider>
                                {/* <DateTimeInput
                                    value={date}
                                    name={'myDateTime'}
                                    onChange={(e)=>handleChange(e,setDate)}
                                     onBlur={(e)=>handleValidate(e,"orderTime")}
                                     /> */}

                            </div>
                            <div className={`${style["btn-container"]}`}>
                                <Button disabled={disabled} type='submit' variant="contained" className={`${style["btn"]}`}>
                                    پرداخت
                                </Button>
                            </div>
                        </form>
                    </main>
                </div>
            </CacheProvider >
        </>
    );
}

export default Userform;
