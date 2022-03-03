import React, { useState } from 'react';
import Select from 'react-select';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { Product } from '../../../Api/Product.api'
import createCache from '@emotion/cache';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { TextField } from '@mui/material';
import { Image } from '../../../Api/Upload.api'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchsubCategoryRequest } from '../../../Redux/Actions.Redux/Products.Action/Products.Action';
import { BASE_URL } from '../../../Config/Url.config';
import { toast } from 'react-toastify';
import style from './EditModal.module.scss'

const EditmodalCompnent = ({ setShow, show, productobj, setEdited, edit }) => {
    const dispatch = useDispatch();
    const subCategory = useSelector(state => state.products.subCategory);
    const [value, setValue] = useState("");
    const [newvalue, setNewvalue] = useState(false);
    const [Data, setData] = useState({
        "modelName": "",
        "brand": "مشخص نیست",
        "country": "مشخص نیست",
        "Gearbox": "اتوماتیک",
        "category": 1,
        "image": [

        ],
        "thumbnail": "/files/b5c269de1c7e9cf5678048cf8fb0e1bc",
        "price": 2000,
        "count": 10,
        "SubCategory": {
            "id": 0,
            "name": ""
        },
        "description": ""
    })
    useEffect(() => {
        dispatch(fetchsubCategoryRequest(BASE_URL));


    }, [])
    const options = subCategory && subCategory.map(item => ({ "value": item.name, "label": item.name, "id": item.id }))

    const handelChangeInput = (e) => {
        setData({ ...Data, "SubCategory": { "id": e.id, "name": e.value } })
        setValue(e)
    }
    const handel = (e, editor) => {
        const data = editor.getData();
        // htmlparser2()
        setData({ ...Data, "description": (data) })
    }
    console.log(value);
    // alert(ReactHtmlParser(Data.description));
    const handelchange = (e) => {
        setData({ ...Data, "SubCategory": { "id": subCategory.length + 1, "name": e.target.value } })

    }
    
    const handleShow = () => {
        setShow(false)
    }
    const handelclick = () => {
        setNewvalue(!newvalue);
        if (productobj)
            setValue(productobj.SubCategory["name"])
        else {
            setValue("")
        }
    }

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const handelUploadPhoto = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let data = new FormData();
        data.append("image", e.target.image.files[0])
        Image.uploadImage(BASE_URL, data).then(res => {
            if (res.status >= 200 && res.status <= 299) {
                setData({ ...Data, "thumbnail": `/files/${res.data.filename}` })
                toast.success("با موفقیت ارسال شد", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error("خطا در ارسال اطلاعات", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    }
    const handlePostData = (e) => {
        e.preventDefault()
        if (length === 0) {
            Product.post(BASE_URL, Data).then(result => {
                if (result.status >= 200 && result.status <= 299) {
                    toast.success("با موفقیت اضافه شد", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        } else {
            Product.patch(BASE_URL, productobj.id, Data).then(result => {
                if (result.status >= 200 && result.status <= 299) {
                    toast.success("با موفقیت ویرایش شد", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

            })

        }
        setEdited(!edit)
        setShow(false)
    }
    const Input = styled('input')({
        display: 'none',
    });
    const length = Object.keys(productobj).length;
    console.log(length === 0);
    const handleChangeName = (e, type) => {
        setData({ ...Data, [type]: `${e.target.value}` })
        // console.log(type);
    }
    return (
        <section className={`${style["modal-container"]} ${!show && style["hidden"]}`}>
            <CacheProvider value={cacheRtl}>
                <div className={style["modal-layer"]}>

                </div>
                <section className={style["modal-section"]}>
                    <div className={style["modal"]}>
                        <div className={style["modal-header"]}>
                            <span>{length > 0 ? "ویرایش" : "افزودن"} کالا</span>
                            <IconButton onClick={(e) => handleShow(e)} sx={{ color: "const(--main-color)" }} size='large' aria-label="delete">
                                <CancelSharpIcon />
                            </IconButton>
                        </div>
                        <div className={style["modal-body"]}>
                            <div className={style["img-uplodaer-container"]}>
                                <form onSubmit={e => handelUploadPhoto(e)} id="hello">
                                    <Stack direction="row" alignItems="center" spacing={2}>

                                        <label htmlFor="icon-button-file">
                                            <Input accept="image/*" name='image' id="icon-button-file" type="file" />
                                            <IconButton sx={{ color: "const(--main-color)" }} aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                            <span className={style["choosen-file-name"]}>فایل انتخاب شده {length > 0 && productobj.thumbnail}</span>
                                        </label>
                                    </Stack>

                                    <Button type='submit' sx={{ backgroundColor: "const(--main-color)", fontFamily: "IranSansBold" }} variant="contained">ارسال عکس</Button>
                                </form>
                            </div>
                            <form onSubmit={(e) => { handlePostData(e) }} >
                                <div className={style["product-name-container"]}>
                                    <TextField onChange={(e) => handleChangeName(e, "modelName")} defaultValue={length > 0 ? productobj.modelName : ""} size='small' sx={{ borderColor: "#191919", color: "red" }} fullWidth id="filled-basic" label="نام کالا را وارد کنید" variant="outlined" />
                                </div>
                                <div className={style["sub-category-container"]}>
                                    <div className={style["sub-category-sect"]}>
                                        {newvalue ? <TextField size='small' onChange={e => handelchange(e)} id="filled-basic" label="مقدار جدید وارد کنید" variant="outlined" /> : <Select
                                            options={options}
                                            onChange={handelChangeInput}
                                            value={value}
                                        />}
                                    </div>
                                    <Button onClick={handelclick} sx={{ backgroundColor: "const(--main-color)", fontFamily: "IranSansRegular" }} variant="contained">مقدار {newvalue ? "پیش فرض" : "جدید"}</Button>
                                </div>
                                <div className={style["discription"]}>
                                    <CKEditor onChange={handel} editor={ClassicEditor} />
                                </div>
                                <div className={style["modal-submit"]}>
                                    <Button type="submit" size='large' sx={{ backgroundColor: "const(--main-color)", width: "60%", fontFamily: "IranSansBold" }} variant="contained">{length > 0 ? "ثبت تغییرات" : "افزودن کالا"}</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </CacheProvider>
        </section>
    );
}

export default EditmodalCompnent;
