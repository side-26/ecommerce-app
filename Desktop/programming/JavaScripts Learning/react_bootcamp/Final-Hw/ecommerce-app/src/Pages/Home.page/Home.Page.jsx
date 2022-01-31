
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Layout/nabarMenu.layout/Navbar';
import style from './Home.Page.module.scss';
;

export default class HomePage extends Component {
  render() {
    return <>
    <Helmet>
      <title>
        فروشگاه اینترنتی خودرو |صفحه اصلی
      </title>
    </Helmet>
    {/* header */}
          <Navbar/>

    </>;
  }
}
