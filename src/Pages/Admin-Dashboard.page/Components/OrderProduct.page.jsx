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
import { TableData } from '../../../Config/Product.config';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Avatar, IconButton } from '@mui/material';
import style from './Styles.Pages/OrderProduct.module.scss';
const OrderproductPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [deliverd, setDeliverd] = useState(true)
    const [filterd, setFilterd] = useState([]);
    useEffect(() => {
        setFilterd(TableData.orders.filter(order => order.deliverd == deliverd))

    }, [deliverd]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handelDeliverd = (val) => {
        setDeliverd(val);
    }
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
                            filterd
                        ).map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align='right'>{item.person}</TableCell>
                                <TableCell align='right'>{item.totalPrice}</TableCell>
                                <TableCell align='right'>{item.name}</TableCell>
                                <TableCell align='right'><Tooltip title="بررسی سفارشات">
                                    <IconButton sx={{ ml: 1, color: "#1565C0" }}><AssignmentTurnedInSharpIcon /></IconButton>
                                </Tooltip></TableCell>
                            </TableRow>
                            // <TableRow
                            //     key={item.id}
                            //     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            // >
                            //     <TableCell align="right">{item.person}</TableCell>
                            //     <TableCell align="right"  scope="row">
                            //         {item.totalPrice}
                            //     </TableCell>
                            //     <TableCell align="right">{item.name}</TableCell>
                            //     <TableCell align="right"> <Tooltip title="بررسی سفارشات">
                            //         <IconButton sx={{ ml: 1, color: "#1565C0" }}><AssignmentTurnedInSharpIcon /></IconButton>
                            //     </Tooltip> </TableCell>
                            // </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter className={style["table-footer"]}>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={TableData.products.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}

                        />
                    </TableFooter> */}
                </Table>
            </TableContainer>
        </>
    );
}

export default OrderproductPage;
