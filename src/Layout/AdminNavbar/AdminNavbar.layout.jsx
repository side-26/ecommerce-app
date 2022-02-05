import React, { useState } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Avatar from '@mui/material/Avatar';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { CacheProvider, useTheme } from '@emotion/react';
import BallotIcon from '@mui/icons-material/Ballot';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import Badge from '@mui/material/Badge';
import style from './AdminNavbar.module.scss';
const AdminNavbar = () => {
    const theme = useTheme();
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [scale, Setscale] = useState(false);
    const settings = ['صفحه اصلی', 'خروج از حساب کاربری'];
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenAdminSidebar = () => {
        Setscale(!scale);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <CacheProvider value={cacheRtl}>

            <AppBar position="sticky" sx={{ backgroundColor: "#737373" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleOpenAdminSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'IranSansRegular' }}
                    >
                        فروشگاه اینترنتی خودرو
                    </Typography>
                    <Box sx={{ flexGrow: 0, marginRight: "auto" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>

            </AppBar>
            <aside className={`${style["navbar-sidebar"]} ${scale && style["scale"]}`}>
                <ul className={`${style["navbar-sidebar-menu"]}`}>
                    <IconButton size='large' sx={{ color: "#fff" }}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary">
                            <HomeSharpIcon sx={{ fontSize: "2rem" }} />
                        </Badge>
                        {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>خانه</span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} badgeContent={scale ? 0 : 10}  anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary"><ProductionQuantityLimitsIcon sx={{ fontSize: "2rem" }} /></Badge> {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>محصولات<span className={`${style["count-container"]}`}>10</span></span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }}>
                        <Badge sx={{ mr: 2, fontSize: "2rem" }} badgeContent={scale ? 0 : 10} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }} color="primary">
                            <BallotIcon sx={{ fontSize: "2rem" }} />
                        </Badge>
                        {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>سفارشات<span className={`${style["count-container"]}`}>10</span></span>}
                    </IconButton>
                    <IconButton size='large' sx={{ color: "#fff" }}>
                        <InventorySharpIcon sx={{ mr: 2, fontSize: "2rem" }} /> {scale && <span className={`${style["navbar-sidebar-menu-item"]}`}>موجودی و قیمت</span>}
                    </IconButton>
                </ul>
            </aside>
        </CacheProvider>
    );
}

export default AdminNavbar;
