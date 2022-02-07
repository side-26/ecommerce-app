import React from 'react';
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
import style from './Styles.Pages/Products.module.scss';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Avatar, IconButton } from '@mui/material';
const ProductsPage = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
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
                            TableData.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ).map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar src='.' />
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.category}/{item.country}/{item.company}</TableCell>
                                <TableCell align="right"> <Tooltip  title="ویرایش">
                                    <IconButton sx={{ ml: 1, color: "#1565C0" }}><SettingsSharpIcon /></IconButton>
                                </Tooltip><Tooltip title="حذف کالا"><IconButton sx={{ color: "#ff1313e5" }}><DeleteForeverSharpIcon /></IconButton></Tooltip> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={style["table-footer"]}>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={TableData.products.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}

                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    );
}

export default ProductsPage;
