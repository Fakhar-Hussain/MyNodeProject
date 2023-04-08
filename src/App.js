import './App.css';
import Private from './Components/Private'

import Nav from './Components/Nav';
// import Footer from './Components/Footer'

import SignUp from './Components/Signup'
import Login from './Components/Login'

import Products from './Components/Products'
import Profile from './Components/Profile'
import AddProduct from './Components/AddProduct'
import UpdateProduct from './Components/UpdateProduct'

import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<Private/>}>
              <Route path='/' element={<Products/>} />
              <Route path='/add' element={<AddProduct/>} />
              <Route path='/update/:id' element={<UpdateProduct/>} />
              <Route path='/logout' />
              <Route path='/profile' element={<Profile/>} />
            </Route>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
