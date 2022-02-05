import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar.layout';

export default class DashboardPage extends Component {
  render() {
    return <>
    <Helmet>
      <title>
        فروشگاه اینترنتی خودرو | صفحه ادمین
      </title>
    </Helmet>
    <AdminNavbar/>
    <main>
      <Outlet/>
    </main>
    </>;
  }
}
