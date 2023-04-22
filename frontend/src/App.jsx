import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Home from './pages/Home'
import 'react-quill/dist/quill.snow.css';
// import Home from './pages/Home'
import Products from './pages/Addproduct'
import Addproduct from './pages/Addproduct'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Account from './pages/Account'

export default function App() {
  return<>
  <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route path={"/"} element={<Dashboard/>}></Route>
    <Route path={"/details/:productId"} element={<Details/>}></Route>
    <Route path={"/products"} element={<Products/>}></Route>
    <Route path={"/home"} element={<Home/>}></Route>
    <Route path={"/addproduct"} element={<Addproduct/>}></Route>
    <Route path={"/register"} element={<Register/>}></Route>
    <Route path={"/login"} element={<Login/>}></Route>
    <Route path={"/profile"} element={<Profile/>}></Route>
    <Route path={"/account"} element={<Account/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
}
