import React, { useEffect } from 'react';
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
const OrdersSection = ({ OrderData }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    const products = useSelector(state => state.products.products);
    const handelProducts = useDispatch()
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        handelProducts(fetchProductsRequest(BASE_URL))
    }, []);
    console.log(products);
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
                            {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                                <TableRow >
                                    <TableCell align='right'>
                                        {item.modelName}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {item.price}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {item.count}
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
                    count={products.length}
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
