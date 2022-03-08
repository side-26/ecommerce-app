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
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Tooltip from '@mui/material/Tooltip';
import { Avatar, IconButton, Typography } from '@mui/material';
import { fetchOrdersRequest } from '../../../Redux/Actions.Redux/Orders.Actions/Orders.Action';
// import { changeModalsState } from '../../../Redux/Actions.Redux/Modals.Actions/Modals';
import src from '../../../Asset/img/NODATA.png';
import { BASE_URL } from '../../../Config/Url.config';
import moment from 'jalali-moment'
import Infomodal from '../../../Components/Modals.Components/InfoModal.Component/InfoModal.component';
import style from './Styles.Pages/OrderProduct.module.scss';
const OrderproductPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [deliverd, setDeliverd] = useState(true);
    const [hidden, setHidden] = useState(true)
    // const [filterd, setFilterd] = useState([]);
    const [orderId, setorderId] = useState(0);
    const orders = useSelector(state => state.orders.orders);
    // const modalState = useSelector(state => state.modalBool.infoModal);
    const dispatch = useDispatch();
    // const [search,setSearch] = useSearchParams()
    const persian = require('persian');
    useEffect(() => {
        dispatch(fetchOrdersRequest(BASE_URL, `deliverd=${deliverd}&_sort=timeDeliverd&_order=desc`));
    }, [deliverd]);
    const handelShowModal = (id) => {
        setHidden(false)
        setorderId(id)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handelDeliverd = (val) => {
        setHidden(true)
        setDeliverd(!deliverd)
    }
    // console.log(search.get("deliverd"))
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
            {orders.length > 0 && <TableContainer component={Paper} className={style["table-container"]}>
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
                        {(
                            orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                        ).map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align='right'>{item.name}</TableCell>
                                <TableCell align='right'>{persian.toPersian(item.totalPrice)}</TableCell>
                                <TableCell align='right'>{persian.toPersian(moment(item.orderTime, 'DDD/MM/YYYY').locale('fa').format('YYYY/MM/DD'))}</TableCell>
                                <TableCell align='right'>
                                    {
                                        deliverd ? <Tooltip title="اطلاعات سفارش">
                                            <IconButton onClick={() => handelShowModal(item.id)} sx={{ ml: 1, color: "#1565C0" }}><InfoSharpIcon /></IconButton>
                                        </Tooltip> :
                                            <Tooltip title="بررسی سفارش">
                                                <IconButton onClick={() => handelShowModal(item.id)} sx={{ ml: 1, color: "#1565C0" }}><AssignmentTurnedInSharpIcon /></IconButton>
                                            </Tooltip>
                                    }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            colSpan={3}
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}

                        />
                    </TableFooter>
                </Table>
            </TableContainer>}
            {orders.length === 0 && <div className={style["empty-message"]}><figure><img src={src} alt='emptyTableImg' /></figure><Typography sx={{ color: "var(--main-color)", fontFamily: "IranSansBold", fontSize: "2.3rem" }}>گشتم نبود، نگرد نیست</Typography></div>}

            {!hidden && <Infomodal setDeliverd={setDeliverd} hidden={hidden} setHidden={setHidden} orderId={orderId} />}
        </>
    );
}

export default OrderproductPage;
