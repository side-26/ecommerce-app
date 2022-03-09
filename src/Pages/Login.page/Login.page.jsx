import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';
import style from './Login.page.module.scss';
import { PATHS } from '../../Config/Route.config';
import { toast } from 'react-toastify';
const LoginPage = () => {
    const [Usererror, setUserError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const [BtnDisabled, setBtnDisabled] = useState(true);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const handelBlurInputs = (e, type) => {
        if (type === "username") {
            if (e.target.value.trim() === "") {
                setUserError(true)
            } else {
                setUserError(false)
            }
        }
        else if (type === "password") {
            if (e.target.value.trim() === "") {
                setPasswordError(true)
            } else {
                setPasswordError(false)
            }
        }
        // setBtnDisabled();
        setBtnDisabled((PasswordError && Usererror))
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const data=new FormData(e.target);
        // const form=Object.fromEntries(data);
        if (password === "admin" && username === "admin") {
            toast.info("با موفقیت وارد شدید")
            localStorage.setItem("IsRegister", true);
            navigate(`${PATHS.DASHBOARD}/${PATHS.NestedRoute.PRODUCTS}`);
        } else {
            setPassword("")
            setUsername("")
            setUserError(true)
            setPasswordError(true)
        }
        // console.log(form);

    }
    const handleChange = (e, callback) => {
        callback(e.target.value)
    }
    return (<>
        <Helmet>
            <title>
                فروشگاه اینترنتی خودرو |صفحه ورود ادمین
            </title>
        </Helmet>
        <CacheProvider value={cacheRtl}>

            <section className={`${style["container"]}`}>
                <main className={`${style["main"]}`}>
                    <form className={`${style["form"]}`} onSubmit={e => { handleSubmitForm(e) }}>
                        <h3>ورود به حساب کاربری</h3>
                        <div className={`${style["input-container"]}`}>
                            <TextField
                                error={Usererror}
                                className={`${style["TextField"]}`}
                                variant="outlined"
                                required
                                id="outlined-error"
                                label="نام کاربری"
                                name='username'
                                onBlur={e => { handelBlurInputs(e, "username") }}
                                helperText={Usererror && "مقدار ورودی را بررسی کنید!!"}
                                value={username}
                                onChange={(e) => { handleChange(e, setUsername) }}
                            />

                        </div>
                        <div className={`${style["input-container"]}`}>
                            <TextField
                                error={PasswordError}
                                className={`${style["TextField"]}`}
                                required
                                variant="outlined"
                                type="password"
                                id="outlined-error"
                                label="رمز عبور "
                                value={password}
                                name='password'
                                onChange={(e) => { handleChange(e, setPassword) }}
                                onBlur={e => { handelBlurInputs(e, "password") }}
                                helperText={PasswordError && "مقدار ورودی را بررسی کنید!!"}
                            />
                        </div>
                        <div className={`${style["input-container"]}`}>
                            <Button type='submit' sx={{ backgroundColor: "var(--main-color)", fontFamily: "IranSansBold" }} fullWidth size='large' disabled={BtnDisabled} variant="contained">ورود</Button>

                        </div>
                        <NavLink className={`${style["link"]}`} to="/">برگشت به صفحه اصلی</NavLink>
                    </form>
                </main>
            </section>
        </CacheProvider>
    </>)

}
export default LoginPage;