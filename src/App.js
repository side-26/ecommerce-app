import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/App.Route'
import './Asset/style/General.scss';
function App() {
  return (
    <>

      <Router>
        <AppRoute />
      </Router>


    </>
  )
}

export default App
