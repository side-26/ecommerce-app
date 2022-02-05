import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Helmet from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import rtlPlugin from 'stylis-plugin-rtl';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import style from './UserForm.page.module.scss';


const Userform = () => {
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
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
                        <form className={`${style["form"]}`}>
                            <div className={`${style["input-container"]}`}>
                                <TextField
                                    size='large'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="نام"
                                    type="text"
                                    autoComplete="current-password"
                                /><TextField
                                    variant="filled"
                                    size='medium'
                                    required
                                    className={`${style["input"]}`}
                                    label="نام خانوادگی"
                                    type="text"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className={`${style["input-container"]}`}>
                                <TextareaAutosize

                                    placeholder='آدرس خود را وارد کنید'
                                    minRows={3}
                                    minLength={10}
                                    className={`${style["text-area-input"]}`}

                                />
                                <TextField
                                    size='medium'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    label="تلفن همراه"
                                    type="tel"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className={`${style["input-container"]}`}>

                                <TextField
                                    size='medium'
                                    variant="filled"
                                    required
                                    className={`${style["input"]}`}
                                    type="date"
                                    autoComplete="current-password"
                                    value="1400-11-12"
                                />
                            </div>
                            <div className={`${style["btn-container"]}`}>
                                <Button type='submit' variant="contained" className={`${style["btn"]}`}>
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
