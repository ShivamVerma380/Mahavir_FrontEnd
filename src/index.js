import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import EmailAuth from './components/Login-Signup/EmailAuth';
import ProductDetails from './components/Items/ProductDetails';
import Admin from './components/Admin/Admin';
import Cart from "./components/Shopping-Cart/Cart";
import MyOrders from './components/Orders/MyOrders';
import AddCategory from './components/Admin/AddCategory';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/email-auth' element = {<EmailAuth/>}/>
      <Route path='/productDetails' element = {<ProductDetails/>}/>
      <Route path='/admin' element = {<Admin/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/my-orders' element={<MyOrders/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
