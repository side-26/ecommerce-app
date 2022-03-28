import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import React from 'react';
import { Avatar, IconButton, Tooltip } from '@mui/material';

const TableImport = ({products,page,rowsPerPage,BASE_URL,style,pageArr}) => {
    return (
        <>
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
                        {/* {(
                            products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ).map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar src={`${BASE_URL}${item["thumbnail"]}`} />
                                </TableCell>
                                <TableCell align="right">{item["modelName"]}</TableCell>
                                <TableCell align="right">{item.SubCategory["name"]}/{item.brand}</TableCell>
                                <TableCell align="right"> <Tooltip title="ویرایش">
                                    <IconButton onClick={()=>handelChangeShowState(item)} sx={{ ml: 1, color: "#1565C0" }}><SettingsSharpIcon /></IconButton>
                                </Tooltip>
                                    <Tooltip title="حذف کالا"><IconButton onClick={() => handelDeleteProduct(item.id)} sx={{ color: "#ff1313e5" }}><DeleteForeverSharpIcon /></IconButton></Tooltip> </TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={pageArr}
                                colSpan={4}
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                // onPageChange={handleChangePage}
                                // onRowsPerPageChange={handleChangeRowsPerPage}

                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>   
        </>
    );
}

export default TableImport;
