import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import MainHeader from '../../../Components/dashboardMain_Header.Component/Main_Header.Component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { fetchOrdersRequest } from '../../../Redux/Actions.Redux/Orders.Actions/Orders.Action';
import { changeModalsState } from '../../../Redux/Actions.Redux/Modals.Actions/Modals';
import { BASE_URL } from '../../../Config/Url.config';
import style from './Styles.Pages/OrderProduct.module.scss';
import {  useSearchParams } from 'react-router-dom';
import Infomodal from '../../../Components/Modals.Components/InfoModal.Component/InfoModal.component';
const OrderproductPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [deliverd, setDeliverd] = useState(true)
    const [filterd, setFilterd] = useState([]);
    const [orderId, setorderId] = useState(0);
    const orders = useSelector(state => state.orders.orders);
    const modalState = useSelector(state => state.modalBool.infoModal);
    const dispatch = useDispatch();
    const [search] = useSearchParams()
    const persian = require('persian');
    useEffect(() => {
        dispatch(fetchOrdersRequest(BASE_URL));
        setFilterd(orders);

    }, []);
    const handelShowModal = (id) => {
        dispatch(changeModalsState(true))
        setorderId(id)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handelDeliverd = (val) => {
        setDeliverd(!deliverd)
    }
    console.log(search.get("deliverd"))
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت |صفحه مدیریت سفارشات
                </title>
            </Helmet>
            <MainHeader deliverdFu={handelDeliverd} deliverd={deliverd} Isorder={true} clss={style["header"]} clss2={style["header-title"]} txt="ذخیره" txt2="مدیریت سفارش ها" bg="Default" fs="1.4rem" />
            <TableContainer component={Paper} className={style["table-container"]}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">خریدار</TableCell>
                            <TableCell align="right">مجموع خرید</TableCell>
                            <TableCell align="right">زمان ثبت سفارش</TableCell>
                            <TableCell align="right">عملیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) 
          ) */}
                        {(
                            orders.filter(item => item.deliverd === deliverd).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                        ).map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align='right'>{item.name}</TableCell>
                                <TableCell align='right'>{persian.toPersian(item.totalPrice)}</TableCell>
                                <TableCell align='right'>{item.orderTime}</TableCell>
                                <TableCell align='right'><Tooltip title="بررسی سفارشات">
                                    <IconButton onClick={() => handelShowModal(item.id)} sx={{ ml: 1, color: "#1565C0" }}><AssignmentTurnedInSharpIcon /></IconButton>
                                </Tooltip></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            colSpan={3}
                            count={orders.filter(item => item.deliverd === deliverd).length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}

                        />
                    </TableFooter>
                </Table>
            </TableContainer>
            {modalState && <Infomodal orderId={orderId} />}
        </>
    );
}

export default OrderproductPage;
