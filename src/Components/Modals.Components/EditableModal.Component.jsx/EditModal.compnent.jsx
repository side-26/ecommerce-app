import React, { useState } from 'react';
import Select from 'react-select';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {changeEditModalState} from '../../../Redux/Actions.Redux/Modals.Actions/Modals'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Input, TextField } from '@mui/material';
import axios from 'axios';
import style from './EditModal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
const EditmodalCompnent = () => {
     const dispatch = useDispatch();
    const subCategory= useSelector(state=>state.products.subCategory);
    const show= useSelector(state=>state.modalBool.infoModal);
    const [value, setValue] = useState("");
    const [p, setp] = useState("");
    const [imageVal, setImageval] = useState("")
    const [newvalue, setNewvalue] = useState(false);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handelChangeInput = (e) => {
        setValue(e);

    }
    const handel = (e, editor) => {
        const data = editor.getData()
        setp(data)
    }
    const handelchange = (e) => {
        setValue(e.target.value)
    }
    const handleShow=()=>{
            dispatch(changeEditModalState(true))
            console.log(show)
    }
    const handelclick = () => {
        setNewvalue(!newvalue);
        setValue("")
    }
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const handelUploadPhoto = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("image",e.target.image.files[0])
        axios.post("http://localhost:3002/upload", data).then(result => {
            console.log(result.data.filename) 
        })
    }
    console.log(show)
    const handelChangeupload = (e) => {
    }
    // console.log(imageVal);
    return (
        <section className={`${style["modal-container"]} ${!show&&style["hidden"]}`}>
                <CacheProvider value={cacheRtl}>
                <div className={style["modal-layer"]}>

                </div>
                <section className={style["modal-section"]}>
                    <div className={style["modal"]}>
                        <div className={style["modal-header"]}>
                            <span>ویرایش کالا</span>
                            <IconButton onClick={()=>handleShow(true)} sx={{ color: "var(--main-color)" }} size='large' aria-label="delete">
                                <CancelSharpIcon />
                            </IconButton>
                        </div>
                        <div className={style["modal-body"]}>
                            <div className={style["img-uplodaer-container"]}>
                                <form onSubmit={e => handelUploadPhoto(e)} id="hello">
                                    <input name='image' type="file" onChange={e => handelChangeupload(e)} />
                                    <button type='submit'>
                                        اپلود عکس
                                    </button>
                                </form>
                            </div>
                            <div className={style["product-name-container"]}>
                                <TextField size='small' sx={{ borderColor: "#191919", color: "red" }} fullWidth id="filled-basic" label="نام کالا را وارد کنید" variant="outlined" />
                            </div>
                            <div className={style["sub-category-container"]}>
                                <div className={style["sub-category-sect"]}>
                                    {newvalue ? <TextField size='small' value={value} onChange={handelchange} id="filled-basic" label="مقدار جدید وارد کنید" variant="outlined" /> : <Select
                                        options={options}
                                        onChange={handelChangeInput}
                                        value={value}
                                    />}
                                </div>
                                <Button onClick={handelclick} variant="contained">مقدار {newvalue ? "پیش فرض" : "جدید"}</Button>
                            </div>
                            <div className={style["discription"]}>
                                <CKEditor onChange={handel} editor={ClassicEditor} />
                            </div>
                            <div className={style["modal-submit"]}>
                                <Button size='large' sx={{ backgroundColor: "var(--main-color)", width: "60%", fontFamily: "IranSansBold" }} variant="contained">ثبت تغییرات</Button>
                            </div>
                        </div>
                    </div>
                </section>
        </CacheProvider>
            </section>
    );
}

export default EditmodalCompnent;
