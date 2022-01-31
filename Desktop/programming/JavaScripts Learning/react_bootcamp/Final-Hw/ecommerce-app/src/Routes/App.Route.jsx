import React from 'react';
import {  Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home.page/Home.Page'
import LoginPage from '../Pages/Login.page/Login.page'
import PublicRoute from './Public.Route/Public.Route'
import PrivateRoute from './Private.Route/Private.Route'
import ErrorPage from '../Pages/404.page/404.page'
import ProtetedRoute from './Protected.Route/Protected.Route'
import DashboardPage from '../Pages/Admin-Dashboard.page/Dashboard.page'
import {PATHS} from '../Config/Route.config';
import ShoppingCart from '../Pages/ShppingCart.page/ShoppingCart.page';
;

export default function AppRoute() {
    return <Routes>
        <Route path='' element={<PublicRoute />}>
            <Route path={PATHS.HOME} element={<HomePage />} />{' '}
            <Route path={PATHS.SHOPPING_CART} element={<ShoppingCart/>}/>
        </Route>{' '}
        <Route path='' element={<PrivateRoute />}>
            <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />{' '}
        </Route>{' '}
        <Route path='' element={<ProtetedRoute />}>
            <Route path={PATHS.LOGIN} element={<LoginPage />} />{' '}
        </Route>{' '}
        <Route path={PATHS.NOTFOUND} element={<ErrorPage />} />
    </Routes>;
}
