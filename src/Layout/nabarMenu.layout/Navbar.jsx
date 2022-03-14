import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import AppBar from '@mui/material/AppBar';
import { NavLink, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {calculateCounter} from '../../Redux/Actions.Redux/ordersCount.Actions/Count.Actions';
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoSrc from '../../Asset/img/car-logo.png';
import { PATHS } from '../../Config/Route.config';
import { useSelector,useDispatch } from 'react-redux';
import style from './Navbar.module.scss';


export default function Navbar() {
    const counter = useSelector(state => state.customerCount.count);
    const dispatch=useDispatch();
    const [counterState,setcounterState]=useState(0)
    const Navigate = () => {
        const path = JSON.parse(localStorage.getItem("IsRegister")) ? `${PATHS.DASHBOARD}/${PATHS.NestedRoute.PRODUCTS}` : PATHS.LOGIN;
        navigate(path);
    }
    
    useEffect(() => {
        // console.log("hello");
        // if()
        // dispatch(calculateCounter(counterState));

    }, [counter]);

    const navigate = useNavigate()
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    // const orderCount=
    return (<CacheProvider value={cacheRtl}>
        <AppBar position="sticky" className={`${style["header"]}`}>
            <Toolbar className={`${style["top-nav"]}`}>
                <div className={`${style["right-sect"]}`}>
                    <figure >
                        <NavLink to={`${PATHS.HOME}`}><img src={logoSrc} alt="logo" /></NavLink>
                    </figure>
                    <Search className={`${style["search-bar"]}`}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            size='large'
                            placeholder="جستجو..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div className={`${style["left-sect"]}`}>
                    <IconButton onClick={() => { Navigate() }} size="small"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 3 }}>
                        <AccountCircleIcon sx={{ mr: 1 }} />
                        <span>مدیریت</span>
                    </IconButton>
                    <IconButton onClick={() => {
                        navigate(PATHS.SHOPPING_CART)
                    }} size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 0 }}>
                        <Badge color="error" badgeContent={counter} max={100}>
                            <ShoppingCartIcon />

                        </Badge>
                    </IconButton>
                </div>
            </Toolbar >
            {!JSON.parse(localStorage.getItem("IsRegister")) && <Toolbar className={`${style["bottom-nav"]}`}>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 5 }}
                >
                    <MenuIcon sx={{ mr: 1 }} />
                    <span>محصولات</span>
                </IconButton><IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 5 }}
                >
                    <FeedSharpIcon sx={{ mr: 1 }} />
                    <span>اخبار</span>
                </IconButton><IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 5 }}
                >
                    <DirectionsCarFilledSharpIcon sx={{ mr: 1 }} />
                    <span>محصولات پرفروش</span>
                </IconButton><IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="DirectionsCarFilledSharpIcon"
                    sx={{ mr: 5 }}
                >
                    <SettingsSuggestSharpIcon sx={{ mr: 1 }} />
                    <span>تیونینگ خودرو </span>
                </IconButton>
                <a href="/" className={`${style["location-link"]}`}>لطفا شهر و استان خود را انتخاب کنید <AddLocationIcon /></a>
            </Toolbar>}
        </AppBar>
    </CacheProvider>)

}
