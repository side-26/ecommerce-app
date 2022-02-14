import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/App.Route'
import './Asset/style/General.scss';
import Productcard from './Components/ProductCard.Component/ProductCard.Component';
import Sidebar from './Layout/SideBar.layout/SideBar';
function App() {
  return (
    <>
      {/* <Sidebar/> */}
      <Router>
        <AppRoute />
      </Router>
      {/* <Productcard/> */}

    </>
  )
}

export default App
