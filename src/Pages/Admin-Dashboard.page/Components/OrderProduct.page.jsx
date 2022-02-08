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
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Avatar, IconButton } from '@mui/material';
import style from './Styles.Pages/OrderProduct.module.scss';
const OrderproductPage = () => {
    return (
        <>
            <Helmet>
                <title>
                    قسمت مدیریت |صفحه مدیریت سفارشات
                </title>
            </Helmet>
        <MainHeader clss={style["header"]} clss2={style["header-title"]} txt="ذخیره" txt2="مدیریت سفارش ها" bg="Default" fs="1.4rem" />
        </>
    );
}

export default OrderproductPage;
