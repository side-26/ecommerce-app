import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../../../../../Redux/Actions.Redux/Products.Action/Products.Action';
import { BASE_URL } from '../../../../../Config/Url.config'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import style from './Orders_section.module.scss'
import { TableFooter } from '@mui/material';
const OrdersSection = ({ orders }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    // const[Products,setProducts]=useState([])
    // const products = useSelector(state => state.products.products);

    // const handelProducts = useDispatch()
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    useEffect(() => {
        // const idArr=orders.map(item=>item.id);
        // idArr.toString();
        // const idString=`id=${idArr.toString().replace(/,/g, "&id=")}`;
        // handelProducts(fetchProductsRequest(BASE_URL,idString))

        // console.log(idString);
    }, []);
    // useEffect(() => {
    //     // const idArr=orders.map(item=>item.id);
    //     // let sum = [...orders,...products].reduce(function (previousValue, currentValue) {
    //     //     return previousValue + currentValue.x
    //     // }, initialValue)
    //     let x={};
    //      x=[...orders,...products].sort((a,b)=>a.id-b.id);
    //      x=x.map((item,index)=>{
    //             return {...x[index+1],...item}
    //    })
    // //    x=new setPage(x);
    // x = [...new Set(x)];
    //     console.log(x);
       
    // }, []);
    return (
        <div className={style["table-container"]}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align='right'>
                                    محصولات
                                </TableCell>
                                <TableCell align='right'>
                                    قیمت
                                </TableCell>
                                <TableCell align='right'>
                                    تعداد
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                                <TableRow key={item.id}>
                                    <TableCell align='right'>
                                        {item.modelName}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {item.price}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {item.value}
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TableFooter>
                <TablePagination
                    rowsPerPageOptions={[3, 6, 12]}
                    component="div"
                    count={orders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </TableFooter>
            </Paper>
        </div>
    );
}

export default OrdersSection;
