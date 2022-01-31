import React, { } from 'react';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { NavLink } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import style from './Login.page.module.scss';
const LoginPage = () => {
    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });

    return (<>
            <Helmet>
                <title>
                    فروشگاه اینترنتی خودرو |صفحه ورود ادمین
                </title>
            </Helmet>
        <CacheProvider value={cacheRtl}>

            <section className={`${style["container"]}`}>
                <main className={`${style["main"]}`}>
                    <form className={`${style["form"]}`}>
                        <h3>ورود به حساب کاربری</h3>
                        <div className={`${style["input-container"]}`}>
                            <TextField
                                className={`${style["TextField"]}`}
                                variant="outlined"
                                required
                                id="outlined-error"
                                label="نام کاربری"
                            />

                        </div>
                        <div className={`${style["input-container"]}`}>
                            <TextField
                                className={`${style["TextField"]}`}
                                required
                                variant="outlined"
                                type="password"
                                id="outlined-error"
                                label="رمز عبور "
                            />
                        </div><div className={`${style["input-container"]}`}>
                            <TextField
                                size='small'
                                onClick={e => {
                                    e.preventDefault()
                                    alert("hello")
                                }}

                                className={`${style["submit"]}`}
                                type="submit"
                                id="outlined-error"
                                value="ورود"

                            />
                        </div>
                        <NavLink className={`${style["link"]}`} to="/">برگشت به صفحه اصلی</NavLink>
                    </form>
                </main>
            </section>
        </CacheProvider>
    </>)

}
export default LoginPage;