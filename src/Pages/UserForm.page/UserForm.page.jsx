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
import { GATEWAY_URL } from '../../Config/Url.config';
import { UseForm } from '../../hook/useForm.hook';

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
    const [mobileNumber, setMobileNumber] = useState("");
    const dataObj = { name, family, address, date, mobileNumber };
    const navigate = useNavigate()
    const handleChange = (e, callback) => {
        callback(e.target.value)
    }
    const validate = (fieldValues = dataObj) => {
        const temp = {};
        if ("firstname" in fieldValues)
            temp.firstname = name.length > 2 ? "" : "بیشتر از دو حرف وارد کنید";
        if ("lastname" in fieldValues)
            temp.lastname = family.length > 2 ? "" : "بیشتر از دو حرف وارد کنید";
        temp.address = address.length > 15 && address.includes("-") ? "" : "ادرس باید شامل - باشد و حتما بیشتر از 15 حرف  وارد کنید";

        temp.date = date ? "" : "";
        if ("mobileNumber" in fieldValues)
            temp.mobileNumber = mobileNumber.length === 11 && mobileNumber[0] === "0" ? "" : "شماره تلفن باید با 0 شروع شود و حتما 11 عدد باشد.";

        setErrors({
            ...temp
        })
        console.log(temp);
        return Object.values(temp).every(item => item == "");
    }
    const { errors, setErrors, handleValidate } = UseForm(true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            const data = {
                "name": name,
                "lastName": family,
                "address": address,
                "orderTime": date,
                "tel": mobileNumber,
            }
            if (localStorage.getItem("order") !== null) {
                // data["orders"] = JSON.parse(localStorage.getItem("order"));
                let oldLocal = localStorage.getItem("orders")
                oldLocal = JSON.parse(oldLocal)
                localStorage.setItem("orders", JSON.stringify({ ...oldLocal, ...data }));
                window.location.href =GATEWAY_URL ;
            } else {
                navigate(PATHS.HOME, replace)
            }

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
    console.log(dataObj);
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
                                    focused={errors.firstname}
                                    size='large'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="نام"
                                    type="text"
                                    onChange={e => handleChange(e, setName)}
                                    onBlur={e => handleValidate(e)}
                                    name="firstname"
                                    autoComplete="current-password"
                                    {...(errors.firstname && { error: true, helperText: errors.firstname })}
                                /><TextField
                                    variant="filled"
                                    focused={errors.lastname}
                                    size='medium'
                                    required
                                    className={`${style["input"]}`}
                                    label="نام خانوادگی"
                                    type="text"
                                    autoComplete="current-password"
                                    value={family}
                                    onChange={e => handleChange(e, setFamily)}
                                    onBlur={e => handleValidate(e, "family")}
                                    name="lastname"
                                    {...(errors.lastname && { error: true, helperText: errors.lastname })}
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
                                    name="address"

                                    {...(errors.address && { error: true, helperText: errors.address })}
                                />
                                <TextField
                                    size='medium'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="تلفن همراه"
                                    type="number"
                                    value={mobileNumber}
                                    onChange={e => handleChange(e, setMobileNumber)}
                                    onBlur={e => handleValidate(e, "mobile")}
                                    name="mobileNumber"
                                    focused={!errors.mobileNumber}
                                    {...(errors.mobileNumber && { error: true, helperText: errors.mobileNumber })}
                                />
                            </div>
                            <div className={`${style["input-container"]}`}>
                                <LocalizationProvider dateAdapter={AdapterJalali}>
                                    <DatePicker
                                        mask="__/__/____"
                                        value={date}
                                        onChange={(newValue) => handleDate(newValue)}
                                        // onClose={()=>handleValidate(date,"orderTime")}
                                        renderInput={(params) => <TextField  {...params} />}
                                        name="Date"
                                        error
                                    />
                                </LocalizationProvider>
                                <span>بیا با پشمام بازی کن</span>
                            </div>
                            <div className={`${style["btn-container"]}`}>
                                <Button disabled={!Object.values(dataObj).every(item => item != "")} type='submit' variant="contained" className={`${style["btn"]}`}>
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
