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
import CategoryDropdowns from './components/Admin/CategoryDropdowns';
import PendingDelivery from './components/Admin/Sidebar/PendingDelivery'
import UserComplaint from './components/Items/UserComplaint'
import AddressForm from './components/AddressForm';
import OrderSummary from './components/OrderSummary';
import PaymentOption from './components/PaymentOption';


import MyOrders from './components/Orders/MyOrders';
import AddCategory from './components/Admin/AddCategory';
import SelCatProducts from './components/DisplayCategories/SelCatProducts';
import OfferItems from './components/offers/OfferItems';
import UploadExcel from './components/Admin/Sidebar/UploadExcel';

import OnlyReviews from './components/Items/OnlyReviews';
import RateReviewProducts from './components/Items/RateReviewProducts';
import AllComplaints from './components/Admin/Sidebar/AllComplaints';
import AddToCompareProducts from './components/ProductsComparison/AddToCompareProducts';
import GenerateBill from './components/GenerateBill';
import WishList from './components/WishList';
import DeveloperPage from './components/DeveloperPage';
import AboutCompany from './components/Footer/AboutCompany';
import FAQ from './components/Footer/FAQ';
import ContactUs from './components/Footer/ContactUs';
import StoreLocator from './components/Footer/StoreLocator';
import AddSubCategories from './components/Admin/Test/AddSubCategories';
const root = ReactDOM.createRoot(document.getElementById('root'));
var Category = localStorage.getItem("Category");
var SubCategory = localStorage.getItem("SubCategory");
var SubSubCategory = localStorage.getItem("SubSubCategory");



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
      <Route path='/categorydrop' element = {<CategoryDropdowns/>}/>
      <Route path='/pendingdelivery' element = {<PendingDelivery/>}/>
      <Route path='/allcomplaints' element = {<AllComplaints/>}/>
      <Route path='/AddressForm' element = {<AddressForm/>}/>
      <Route path='/OrderSummary' element = {<OrderSummary/>}/>
      <Route path='/PaymentOption' element = {<PaymentOption/>}/>
      <Route path= '/:Category/:SubCategory/:SubSubCategory' element={<SelCatProducts/>}/>
      <Route path='/offers' element={<OfferItems/>}/>
      <Route path='/compareproducts' element={<AddToCompareProducts/>}/>
      {/* <Route path="/SearchBar" element={<SearchBar/>}/> */}
      <Route path='/my-orders' element={<MyOrders/>}/>
      <Route path='/upload' element = {<UploadExcel/>}/>
      <Route path='/onlyreviews' element = {<OnlyReviews/>}/>
      <Route path='/ratereview' element = {<RateReviewProducts/>}/>
      <Route path='/usercomplaint' element = {<UserComplaint/>}/>
      <Route path='/generatebill' element = {<GenerateBill/>}/>
      <Route path='/wishlist' element = {<WishList/>}/>
      <Route path='/developerpage' element = {<DeveloperPage/>}/>
      <Route path='/aboutcompany' element = {<AboutCompany/>}/>
      <Route path='/faq' element = {<FAQ/>}/>
      <Route path='/contactus' element = {<ContactUs/>}/>

      {/* <Route path='/AddNew' element={<AddNew/>}/> */}
      <Route path='/storelocator' element={<StoreLocator/>}/>
      <Route path='/addSubCategories' element = {<AddSubCategories/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
