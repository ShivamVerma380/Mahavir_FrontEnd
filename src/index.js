import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import ProductDetails from './components/Items/ProductDetails';
import Admin from './components/Admin/Admin';
import Cart from "./components/Shopping-Cart/Cart";
import CategoryDropdowns from './components/Admin/CategoryDropdowns';
import PendingDelivery from './components/Admin/Sidebar/PendingDelivery'
import UserComplaint from './components/Items/UserComplaint'
import AddressForm from './components/OrderSummary/AddressForm';
import Payment from './components/Checkout/BuyNowCheckout/Payment';
// import OrderSummary from './components/OrderSummary';
import PaymentOption from './components/PaymentOption';
import 'typeface-roboto';


// import MyOrders from './components/Orders/MyOrders';
import AddCategory from './components/Admin/AddCategory';
import SelCatProducts from './components/DisplayCategories/SelCatProducts';
import OfferItems from './components/offers/OfferItems';
import UploadExcel from './components/Admin/Sidebar/UploadExcel';

import OnlyReviews from './components/Items/OnlyReviews';
import RateReviewProducts from './components/Items/RateReviewProducts';
import AllComplaints from './components/Admin/Sidebar/AllComplaints';
import AddToCompareProducts from './components/ProductsComparison/AddToCompareProducts';
import GenerateBill from './components/GenerateBill';
import DeveloperPage from './components/DeveloperPage';
import AboutCompany from './components/Footer/AboutCompany';
import FAQ from './components/Footer/FAQ';
import ContactUs from './components/Footer/ContactUs';
import StoreLocator from './components/Footer/StoreLocator';
import AddSubCategories from './components/Admin/Test/AddSubCategories';
import AddProductInformation from './components/Admin/Test/AddProductInformation';
import MiniPosterItems from './components/offers/MiniPosteritems';
import CategoryProductsSwiper from './components/Items/CategoryProductsSwiper';
import CategoryProducts from './components/Items/CategoryProducts';
import BrandDetails from './components/Items/BrandDetails';
import BrandCatProducts from './components/Items/BrandCatProducts';
import BrandOfferPosterProducts from './components/Items/BrandOfferPosterProducts';
import ProductsByDeal from './components/Items/ProductsByDeal';
import FilterProduct from './components/Filters/FilterProduct';
import WishlistProducts from './components/WishlistProducts';
import AdminLogin from './components/Admin/AdminLogin';
import Orders from './components/OrderDetails/Orders';
import MiniPostersBottom from './components/offers/MiniPostersBottom';
import CompletedOrders from './components/Admin/Sidebar/CompletedOrders';
import AddressBuyNowSummary from './components/Checkout/BuyNowCheckout/AddressBuyNowSummary';
import BuyNowSummary from './components/Checkout/BuyNowCheckout/BuyNowSummary';
import Invoice from './components/OrderDetails/Invoice';
import OrderInvoices from './components/OrderDetails/OrderInvoices';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import ShippingOptions from './components/Footer/ShippingOptions';
import PaymentReturns from './components/Footer/PaymentReturns';
import TermsOfUse from './components/Footer/TermsOfUse';
import PaymentSuccess from './components/Checkout/BuyNowCheckout/PaymentSuccess';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  
  <HashRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/productDetails' element = {<ProductDetails/>}/>
      <Route path='/admin' element = {<AdminLogin/>}/>
      {/* <Route path='/admin' element = {<Admin/>}/> */}
      {/* <Route path='/admindetail' element = {<Admin/>}/> */}
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/categorydrop' element = {<CategoryDropdowns/>}/>
      <Route path='/pendingdelivery' element = {<PendingDelivery/>}/>
      <Route path='/allcomplaints' element = {<AllComplaints/>}/>
      <Route path='/AddressForm' element = {<AddressForm/>}/>
      <Route path='/PaymentOption' element = {<PaymentOption/>}/>
      <Route path= '/:Category/:SubCategory/:SubSubCategory' element={<SelCatProducts/>}/>
      <Route path='/:Category' element={<SelCatProducts/>}/>
      <Route path='/offers' element={<OfferItems/>}/>
      <Route path='/my-orders' element={<OrderInvoices/>}/>
      <Route path='/upload' element = {<UploadExcel/>}/>
      <Route path='/onlyreviews' element = {<OnlyReviews/>}/>
      <Route path='/ratereview' element = {<RateReviewProducts/>}/>
      <Route path='/usercomplaint' element = {<UserComplaint/>}/>
      <Route path='/generatebill' element = {<GenerateBill/>}/>
      <Route path='/developerpage' element = {<DeveloperPage/>}/>
      <Route path='/aboutcompany' element = {<AboutCompany/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path='/faq' element = {<FAQ/>}/>
      <Route path='/contactus' element = {<ContactUs/>}/>
      <Route path='/completedorders' element={<CompletedOrders/>}/>    
      <Route path='/terms-of-use' element={<TermsOfUse/>}/>
      <Route path='/storelocator' element={<StoreLocator/>}/>
      <Route path='/addSubCategories/:ModelNos' element = {<AddSubCategories/>}/>
      <Route path='/addProductInformation/:ModelNos' element={<AddProductInformation/>}/>
      <Route path='/miniposteritems' element={<MiniPosterItems/>}/>
      <Route path='/categoryproducts' element={<CategoryProductsSwiper/>}/>
      <Route path='/categoryProductsall'element={<CategoryProducts/>}/>
      <Route path='/branddetails' element={<BrandDetails/>}/>
      <Route path='/brandcatproducts' element={<BrandCatProducts/>}/>
      <Route path='/brandofferposterproducts' element={<BrandOfferPosterProducts/>}/>
      <Route path='/productsbydeal' element={<ProductsByDeal/>}/>
      <Route path='/filterproducts' element={<FilterProduct/>}/>
      <Route path='/wishlistproducts' element={<WishlistProducts/>}/>
      <Route path='/shippingoptions' element={<ShippingOptions/>}/>
      <Route path='/paymentreturns' element={<PaymentReturns/>}/>
      <Route path='/compareProducts' element={<AddToCompareProducts/>}/>
      <Route path='/minibottom' element={<MiniPostersBottom/>}/>
      <Route path="/checkout" element={<AddressBuyNowSummary/>}/>
      <Route path='/summary' element={<BuyNowSummary/>}/>
      <Route path = "/payment" element = {<Payment/>}/>

      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/rate-products' element = {<Orders/>}/>
      <Route path='paymentsuccess' element = {<PaymentSuccess/>}/>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
