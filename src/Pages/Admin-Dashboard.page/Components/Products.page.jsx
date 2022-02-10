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
import style from './Styles.Pages/Products.module.scss';
import { BASE_URL } from '../../../Config/Url.config';
import {fetchProductsRequest,fetchProductRequest} from '../../../Redux/Actions.Redux/Products.Action/Products.Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const ProductsPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const products=useSelector(state=>state.products);
    const product=useSelector(state=>state.product);
    const dispatch=useDispatch();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect( () => {
        
        // SetData)
        // (async function(){
        //     const products= await(Get(BASE_URL));
        //     SetData(products);
        // })()
        dispatch(fetchProductsRequest(BASE_URL));
        dispatch(fetchProductRequest(BASE_URL,1));
        // Get(BASE_URL).then(res=>SetData(res));
    },[]);
    const persian = require('persian');
    console.log(persian.toPersian("4569"));
    console.log(product);
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت | صفحه مدیریت کالاها
                </title>
            </Helmet>
            <MainHeader bg="#ff1313e5" fs="1.3rem" clss={style["header"]} clss2={style["header-title"]} txt="افزودن کالا" txt2="مدیریت کالاها" />
            <TableContainer component={Paper} className={style["table-container"]}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">تصویر</TableCell>
                            <TableCell align="right">نام کالا</TableCell>
                            <TableCell align="right">دسته بندی</TableCell>
                            <TableCell align="right">عملیات</TableCell>
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
                                <TableCell component="th" scope="row">
                                    <Avatar src={item["thumbnail"]} />
                                </TableCell>
                                <TableCell align="right">{item["modelName"]}</TableCell>
                                <TableCell align="right">{item.SubCategory["name"]}/{item.brand}</TableCell>
                                <TableCell align="right"> <Tooltip title="ویرایش">
                                    <IconButton sx={{ ml: 1, color: "#1565C0" }}><SettingsSharpIcon /></IconButton>
                                </Tooltip><Tooltip title="حذف کالا"><IconButton sx={{ color: "#ff1313e5" }}><DeleteForeverSharpIcon /></IconButton></Tooltip> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            colSpan={4}
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

export default ProductsPage;
