import React from 'react';
import {  Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home.page/Home.Page'
import LoginPage from '../Pages/Login.page/Login.page'
import PublicRoute from './Public.Route/Public.Route'
import PrivateRoute from './Private.Route/Private.Route'
import {ErrorPage} from '../Pages/404.page/404.page'
import ProtetedRoute from './Protected.Route/Protected.Route'
import DashboardPage from '../Pages/Admin-Dashboard.page/Dashboard.page'
import {PATHS} from '../Config/Route.config';
import ShoppingCart from '../Pages/ShppingCart.page/ShoppingCart.page';
import Userform from '../Pages/UserForm.page/UserForm.page';
import ProductPage from '../Pages/Product.page/Product.page';
import ProductGroupPage from '../Pages/ProductsGroup.page/Product.Group.page';
import ResultPage from '../Pages/Result.page/Result.page';
import OrderproductPage from '../Pages/Admin-Dashboard.page/Components/OrderProduct.page';
import InventoryPage from '../Pages/Admin-Dashboard.page/Components/Inventory.page';
import ProductsPage from '../Pages/Admin-Dashboard.page/Components/Products.page';


export default function AppRoute() {
    return <Routes>
        <Route path='' element={<PublicRoute />}>
            <Route path={PATHS.HOME} element={<HomePage />} />{' '}
            <Route path={PATHS.PRODUCT} element={<ProductPage/>}/>
            <Route path={PATHS.PRODUCTS} element={<ProductGroupPage/>}/>
        </Route>{' '}
        <Route path='' element={<PrivateRoute />}>
            <Route path={PATHS.DASHBOARD} element={<DashboardPage />} >
                <Route path={PATHS.NestedRoute.INVENTORY} element={<InventoryPage/>}/>
                <Route path={PATHS.NestedRoute.ORDERS} element={<OrderproductPage/>}/>
                <Route path={PATHS.NestedRoute.PRODUCTS} element={<ProductsPage/>}/>
            </Route>
            
        </Route>{' '}
        <Route path='' element={<ProtetedRoute />}>
            <Route path={PATHS.LOGIN} element={<LoginPage />} />{' '}
            <Route path={PATHS.USERFORM} element={<Userform/>}/>
            <Route path={PATHS.PAYRESULT} element={<ResultPage/>}/>
            <Route path={PATHS.SHOPPING_CART} element={<ShoppingCart/>}/>
        </Route>{' '}
        <Route path={PATHS.NOTFOUND} element={< ErrorPage/>} />
        
    </Routes>;
}
