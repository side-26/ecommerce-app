import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/App.Route'
import './Asset/style/General.scss';
import Navbar from './Layout/nabarMenu.layout/Navbar';

import Avatar from './Components/imageLogo.Component/Avatar';
import Counterbtn from './Components/counterBtn.Component/CounterBtn.Component';
function App() {
  return (
    <>
      {' '}
      {
        <Router>
        <AppRoute/>
        </Router>
        // <Navbar/>
        // <Avatar ImgSrc={src}/>
        
      }{' '}
    </>
  )
}

export default App
