import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainHeader from '../../../Components/dashboardMain_Header.Component/Main_Header.Component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toggle from './modules/ToggleComponent';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

import { BASE_URL } from '../../../Config/Url.config';
import { fetchProductsRequest } from '../../../Redux/Actions.Redux/Products.Action/Products.Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './Styles.Pages/Inventory.module.scss';
import { Product } from '../../../Api/Product.api';
import { toast } from 'react-toastify';
const InventoryPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const products = useSelector(state => state.products.products);
    const persian = require('persian');
    const [Changed, setChanged] = useState(false);
    const [BtnAble, SetBtnAble] = useState(false);
    const [newCountArr, setNewCountArr] = useState([]);
    const [newPriceArr,setNewPriceArr]=useState([])
    const dispatch = useDispatch();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const sendData=(newArr,setNewArr,BASE_URL,property,lable)=>{
        if(newArr.length>0){
            newArr.forEach(item => {
                if (item[property] !== item.defaultCount) {
                    const data = { "id": item.id, [property]: item[property] }
                    Product.patch(BASE_URL, item.id, data).then(res => {
                        if (res.status >= 200 & res.status <= 299)
                            setChanged(!Changed)
                        toast.success(`${lable} محصول ${item.id} تغییر یافت`, {
                        });
                    })
                    
                    console.log(data)
                } else {
                    toast.info(`لطفا مقدار را تغییر دهید سپس اقدام به ذخیره کنید`, {
                    });
                    
                }
                
            })
            setNewArr([]);
        }
    }
    const handleChangeCountInput = (evt) => {

        if (evt.target.value.trim() !== "") {
            SetBtnAble(false)
        } else {
            SetBtnAble(true)
        }
    }
    const handleSendData = () => {
        sendData(newCountArr,setNewCountArr,BASE_URL,"count","موجودی");
        sendData(newPriceArr,setNewPriceArr,BASE_URL,"price","قیمت");
        SetBtnAble(false)
    }
    // const toPersian = require('persian');
    useEffect(() => {
        dispatch(fetchProductsRequest(BASE_URL));
    }, [Changed]);
    console.log(newCountArr,newPriceArr);
    // console.log(product);
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت | صفحه موجودی و قیمت محصولات
                </title>
            </Helmet>
            <MainHeader clickFu={handleSendData} btnActive={!BtnAble} bg="#ff1313e5" fs="1.3rem" clss={style["header"]} clss2={style["header-title"]} txt="ذخیره" txt2="مدیریت موجودی و قیمت ها" />
            <TableContainer component={Paper} className={style["table-container"]}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">نام کالا</TableCell>
                            <TableCell align="right">قیمت</TableCell>
                            <TableCell align="right"> موجودی</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(
                            products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ).map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" scope="row">
                                    {item["modelName"]}
                                </TableCell>
                                <TableCell align="right"> <Toggle value="price" SetBtnAble={SetBtnAble} newArr={newPriceArr} setnewArr={setNewPriceArr} defaultValue={item.price} id={item.id} /></TableCell>
                                <TableCell sx={{ cursor: "pointer" }} align="right">
                                    <Toggle value="count" SetBtnAble={SetBtnAble} newArr={newCountArr} setnewArr={setNewCountArr} defaultValue={item.count} id={item.id} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 20]}
                                colSpan={window.innerWidth <= 480 ? 3 : 2}
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}

                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    );
}

export default InventoryPage;




