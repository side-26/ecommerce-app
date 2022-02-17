import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './Routes/App.Route'
import './Asset/style/General.scss';
// import Productcard from './Components/ProductCard.Component/ProductCard.Component';
// import Sidebar from './Layout/SideBar.layout/SideBar';
import EditableModal from './Components/Modals.Components/EditableModal.Component.jsx/EditModal.compnent'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function App() {
  return (
    <>
      <Router>
        <AppRoute />
      </Router>
      {/* <EditableModal/> */}
    </>
  )
}

export default App
