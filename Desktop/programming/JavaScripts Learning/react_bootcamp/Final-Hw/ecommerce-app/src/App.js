import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/App.Route'
import './Asset/style/General.scss';
import Navbar from './Layout/nabarMenu.layout/Navbar';





function App() {
  return (
    <>
      {' '}
      {
        <Router>
        <AppRoute/>
        </Router>
        // <Navbar/>
      }{' '}
    </>
  )
}

export default App
