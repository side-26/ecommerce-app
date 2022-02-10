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
// import { TableData } from '../../../Config/Product.config';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Avatar, IconButton } from '@mui/material';
import style from './Styles.Pages/Inventory.module.scss';
import { BASE_URL } from '../../../Config/Url.config';
import { fetchProductsRequest, fetchProductRequest } from '../../../Redux/Actions.Redux/Products.Action/Products.Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const InventoryPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const products = useSelector(state => state.products);
    const product = useSelector(state => state.product);
    const [BtnAble, SetBtnAble] = useState(true);
    const [hiddenInput, SethiddenInput] = useState(true);
    const dispatch = useDispatch();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChangeCountInput = (evt) => {

        if (evt.target.value !== evt.target.defaultValue && evt.target.value.trim() !== "") {
            SetBtnAble(false)
        } else {
            SetBtnAble(true)
        }
    }
    const handelChangeVisibility = () => {
        SethiddenInput(!hiddenInput);
    }

    // const toPersian = require('persian');
    useEffect(() => {
        dispatch(fetchProductsRequest(BASE_URL));
    }, []);
    console.log(BtnAble);
    // console.log(product);
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت | صفحه موجودی و قیمت محصولات
                </title>
            </Helmet>
            <MainHeader btnActive={BtnAble} bg="#ff1313e5" fs="1.3rem" clss={style["header"]} clss2={style["header-title"]} txt="ذخیره" txt2="مدیریت موجودی و قیمت ها" />
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
                        {/* rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) 
          ) */}
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
                                <TableCell align="right">{item["price"]}</TableCell>
                                <TableCell sx={{ cursor: "pointer" }}  align="right">
                                    {hiddenInput&&<span onClick={() => handelChangeVisibility()}>{item.count}</span>}
                                <input type="number" className={`${style["changable-input"]} ${!hiddenInput && style["hidden"]}`} defaultValue={item.count} onChange={e => handleChangeCountInput(e)} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 20]}
                                colSpan={window.innerWidth<=480?3:2}
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




