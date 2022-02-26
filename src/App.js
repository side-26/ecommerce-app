import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import AppRoute from './Routes/App.Route'
import SkeletonCard from './Skeleton/Card.component/ProductCard.Skeleton.Component'
// import Productcard from './Components/ProductCard.Component/ProductCard.Component';
// import Sidebar from './Layout/SideBar.layout/SideBar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {calculateCounter} from './Redux/Actions.Redux/ordersCount.Actions/Count.Actions'
import './Asset/style/General.scss';
function App() {
  const counter = useSelector(state => state.customerCount.count);
    const dispatch=useDispatch();
  useEffect(() => {
    const ordersCount = localStorage.getItem("order");
    if (ordersCount !== null) {
        let Arr = JSON.parse(ordersCount).filter(item => item !== null);
        const sum = Arr.reduce(function (accumulateur, valeurCourante) {
            return accumulateur + valeurCourante.value;
        }, 0);
        dispatch(calculateCounter(sum))
    }
}, [])
  return (
    <>
      {/* <Router>
        <AppRoute />
      </Router> */}
      {/* <EditableModal/> */}
      <ToastContainer
        rtl
      />
      <SkeletonCard/>
    </>
  )
}

export default App
