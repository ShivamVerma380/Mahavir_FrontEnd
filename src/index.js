import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import WishList from './components/WishList';
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
import CompareProducts from './components/AddtoCompare/CompareProducts';
import Checkout from './components/OrderSummary/Checkout';
import MiniPostersBottom from './components/offers/MiniPostersBottom';
import CompletedOrders from './components/Admin/Sidebar/CompletedOrders';
import AddressCartSummary from './components/Checkout/AddToCartCheckout/AddressCartSummary';
import CheckoutCartSummary from './components/Checkout/AddToCartCheckout/CheckoutCartSummary';
import PaymentCart from './components/Checkout/AddToCartCheckout/PaymentCart';
import AddressBuyNowSummary from './components/Checkout/BuyNowCheckout/AddressBuyNowSummary';
import BuyNowSummary from './components/Checkout/BuyNowCheckout/BuyNowSummary';
import Invoice from './components/OrderDetails/Invoice';
import OrderInvoices from './components/OrderDetails/OrderInvoices';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import ShippingOptions from './components/Footer/ShippingOptions';
import PaymentReturns from './components/Footer/PaymentReturns';
import TermsOfUse from './components/Footer/TermsOfUse';

const root = ReactDOM.createRoot(document.getElementById('root'));
var Category = localStorage.getItem("Category");
var SubCategory = localStorage.getItem("SubCategory");
var SubSubCategory = localStorage.getItem("SubSubCategory");

var ModelNos = localStorage.getItem("ModelNos");



root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/productDetails' element = {<ProductDetails/>}/>
      {/* <Route path='/admin' element = {<AdminLogin/>}/> */}
      <Route path='/admin' element = {<Admin/>}/>
      {/* <Route path='/admindetail' element = {<Admin/>}/> */}
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/categorydrop' element = {<CategoryDropdowns/>}/>
      <Route path='/pendingdelivery' element = {<PendingDelivery/>}/>
      <Route path='/allcomplaints' element = {<AllComplaints/>}/>
      <Route path='/AddressForm' element = {<AddressForm/>}/>
      {/* <Route path='/OrderSummary' element = {<OrderSummary/>}/> */}
      <Route path='/PaymentOption' element = {<PaymentOption/>}/>
      <Route path= '/:Category/:SubCategory/:SubSubCategory' element={<SelCatProducts/>}/>
      <Route path='/offers' element={<OfferItems/>}/>
      {/* <Route path='/compareproducts' element={<AddToCompareProducts/>}/> */}
      {/* <Route path="/SearchBar" element={<SearchBar/>}/> */}
      <Route path='/my-orders' element={<Orders/>}/>
      <Route path='/upload' element = {<UploadExcel/>}/>
      <Route path='/onlyreviews' element = {<OnlyReviews/>}/>
      <Route path='/ratereview' element = {<RateReviewProducts/>}/>
      <Route path='/usercomplaint' element = {<UserComplaint/>}/>
      <Route path='/generatebill' element = {<GenerateBill/>}/>
      <Route path='/wishlist' element = {<WishList/>}/>
      <Route path='/developerpage' element = {<DeveloperPage/>}/>
      <Route path='/aboutcompany' element = {<AboutCompany/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path='/faq' element = {<FAQ/>}/>
      <Route path='/contactus' element = {<ContactUs/>}/>
      {/* <Route path='/:Category'element={<ProductsByCategory/>}/> */}
      <Route path='/completedorders' element={<CompletedOrders/>}/>    
      <Route path='/terms-of-use' element={<TermsOfUse/>}/>
      {/* <Route path='/AddNew' element={<AddNew/>}/> */}
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
      {/* <Route path='/checkout' element={<Checkout/>}/> */}
      {/* <Route path='/payment' element={<Payment/>}/> */}
      <Route path='/compareProducts' element={<AddToCompareProducts/>}/>
      <Route path='/minibottom' element={<MiniPostersBottom/>}/>
      <Route path='/cart-checkout' element={<AddressCartSummary/>}/>
      <Route path='/cart-summary' element={<CheckoutCartSummary/>}/>
      <Route path='/cart-payment' element={<PaymentCart/>}/>
      <Route path="/checkout" element={<AddressBuyNowSummary/>}/>
      <Route path='/summary' element={<BuyNowSummary/>}/>
      <Route path = "/payment" element = {<Payment/>}/>

      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/order-invoices' element = {<OrderInvoices/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
