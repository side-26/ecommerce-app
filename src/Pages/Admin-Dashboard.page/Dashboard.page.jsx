import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar.layout';
import SidebarnavbarLayout from '../../Layout/AdminNavbar/SideBarNavbar.layout';
import style from './Dashboard.module.scss';
export default class DashboardPage extends Component {
  state = { scale: false }
  handelOpenSideBar = () => {
    this.setState({ scale: !this.state.scale });
  }
  render() {
    return <>
      <Helmet>
        <title>
          فروشگاه اینترنتی خودرو | صفحه ادمین
        </title>
      </Helmet>
      <AdminNavbar onclickFu={this.handelOpenSideBar}  />
      <div className={`${style["container"]}`}>
        <SidebarnavbarLayout scale={this.state.scale} />
        <main className={`${style["main"]}`}>
        <Outlet />
        </main>
      </div>
    </>;
  }
}
