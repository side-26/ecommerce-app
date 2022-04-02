import React from 'react';
import BallotIcon from '@mui/icons-material/Ballot';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import Badge from '@mui/material/Badge';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import rtlPlugin from 'stylis-plugin-rtl';
// import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import createCache from '@emotion/cache';
import { IconButton } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { PATHS } from '../../Config/Route.config';
import { useSelector } from 'react-redux';
import style from './AdminNavbar.module.scss';
const SidebarnavbarLayout = ({ scale }) => {
    const products = useSelector(state => state.products.products);
    const Orders = useSelector(state => state.orders.orders);
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const navigate = useNavigate();
    return (
        <CacheProvider value={cacheRtl}>
            <aside className={`${style["navbar-sidebar"]} ${scale && style["scale"]}`}>
                <ul className={`${style["navbar-sidebar-menu"]}`}>
                    <IconButton size='large' sx={{ color: "#fff" }} onClick={() => navigate(PATHS.HOME)}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary">
                            <HomeSharpIcon sx={{ fontSize: "2rem" }} />
                        </Badge>
                        {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>خانه</span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }} onClick={() => navigate(PATHS.NestedRoute.PRODUCTS)}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} badgeContent={scale ? 0 : products.length} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary"><ProductionQuantityLimitsIcon sx={{ fontSize: "2rem" }} /></Badge> {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>محصولات<span className={`${style["count-container"]}`}>{products.length}</span></span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }} onClick={() => navigate(PATHS.NestedRoute.ORDERS)}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} badgeContent={scale ? 0 : Orders.length} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary">
                            <BallotIcon sx={{ fontSize: "2rem" }} />
                        </Badge>
                        {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>سفارشات<span className={`${style["count-container"]}`}>{Orders.length}</span></span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }} onClick={() => navigate(PATHS.NestedRoute.INVENTORY)}>
                        <InventorySharpIcon sx={{ mr: 2, fontSize: "2rem" }} /> {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>موجودی و قیمت</span>}
                    </IconButton>
                    {/* <IconButton size='large' sx={{ color: "#fff" }} onClick={() => navigate(PATHS.NestedRoute.SUBCATEGORY)}>
                        <CategorySharpIcon sx={{ mr: 2, fontSize: "2rem" }} /> {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>گروه ها</span>}
                    </IconButton> */}
                </ul>
            </aside>
        </CacheProvider>
    );
}

export default SidebarnavbarLayout;
