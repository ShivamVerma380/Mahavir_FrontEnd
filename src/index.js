import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, HashRouter, Route, Routes,  } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import ProductDetails from './components/Items/ProductDetails';
import Cart from "./components/Shopping-Cart/Cart";
import CategoryDropdowns from './components/Admin/CategoryDropdowns';
import PendingDelivery from './components/Admin/Sidebar/PendingDelivery'
import UserComplaint from './components/Items/UserComplaint'
import AddressForm from './components/OrderSummary/AddressForm';
// import Payment from './components/Checkout/BuyNowCheckout/Payment';
// import OrderSummary from './components/OrderSummary';
import PaymentOption from './components/PaymentOption';
import 'typeface-roboto';


import OfferItems from './components/offers/OfferItems';
import UploadExcel from './components/Admin/Sidebar/UploadExcel';

import OnlyReviews from './components/Items/OnlyReviews';
import RateReviewProducts from './components/Items/RateReviewProducts';
import AllComplaints from './components/Admin/Sidebar/AllComplaints';

import GenerateBill from './components/GenerateBill';
import DeveloperPage from './components/DeveloperPage';
import AboutCompany from './components/Footer/AboutCompany';
import FAQ from './components/Footer/FAQ';
import ContactUs from './components/Footer/ContactUs';
import StoreLocator from './components/Footer/StoreLocator';
import AddSubCategories from './components/Admin/Test/AddSubCategories';
import AddProductInformation from './components/Admin/Test/AddProductInformation';
import MiniPosterItems from './components/offers/MiniPosteritems';

import BrandDetails from './components/Items/BrandDetails';
import BrandCatProducts from './components/Items/BrandCatProducts';
import BrandOfferPosterProducts from './components/Items/BrandOfferPosterProducts';

import FilterProduct from './components/Filters/FilterProduct';
import WishlistProducts from './components/WishlistProducts';
import AdminLogin from './components/Admin/AdminLogin';

import MiniPostersBottom from './components/offers/MiniPostersBottom';
import CompletedOrders from './components/Admin/Sidebar/CompletedOrders';

import BuyNowSummary from './components/Checkout/BuyNowCheckout/BuyNowSummary';
import Invoice from './components/OrderDetails/Invoice';
import OrderInvoices from './components/OrderDetails/OrderInvoices';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import ShippingOptions from './components/Footer/ShippingOptions';
import PaymentReturns from './components/Footer/PaymentReturns';
import TermsOfUse from './components/Footer/TermsOfUse';
import PaymentSuccess from './components/Checkout/BuyNowCheckout/PaymentSuccess';

// import App from './App';
const App = React.lazy(()=>import('./App'));
const Payment = React.lazy(() => import('./components/Checkout/BuyNowCheckout/Payment'));
const SelCatProducts = React.lazy(()=>import("./components/DisplayCategories/SelCatProducts"));
const CategoryProducts = React.lazy(()=>import("./components/Items/CategoryProducts"));
const CategoryProductsSwiper = React.lazy(()=>import("./components/Items/CategoryProductsSwiper"));
const AddToCompareProducts = React.lazy(()=>import('./components/ProductsComparison/AddToCompareProducts'));
const AddressBuyNowSummary = React.lazy(()=>import('./components/Checkout/BuyNowCheckout/AddressBuyNowSummary'));
const ProductsByDeal = React.lazy(()=>import('./components/Items/ProductsByDeal'));
const Orders = React.lazy(()=>import('./components/OrderDetails/Orders'));

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <HashRouter>
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<div>Loading...</div>}>
          <App/>
        </Suspense>
      }/>
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
      
      <Route path='/branddetails' element={<BrandDetails/>}/>
      <Route path='/brandcatproducts' element={<BrandCatProducts/>}/>
      <Route path='/brandofferposterproducts' element={<BrandOfferPosterProducts/>}/>
      
      <Route path='/filterproducts' element={<FilterProduct/>}/>
      <Route path='/wishlistproducts' element={<WishlistProducts/>}/>
      <Route path='/shippingoptions' element={<ShippingOptions/>}/>
      <Route path='/paymentreturns' element={<PaymentReturns/>}/>
      
      <Route path='/minibottom' element={<MiniPostersBottom/>}/>
      
      <Route path='/summary' element={<BuyNowSummary/>}/>
      <Route path = "/payment" element = {<Payment/>}/>

      <Route path= '/:Category/:SubCategory/:SubSubCategory' element={
        <Suspense fallback={<div>Loading...</div>}>
        <SelCatProducts/>
        </Suspense>
      }/>
      <Route path='/:Category' element={
        <Suspense fallback={<div>Loading...</div>}>
        <SelCatProducts/>
        </Suspense>
      }/>

      <Route path = "/payment" element = {
        <Suspense fallback={<div>Loading...</div>}>
          <Payment/>
        </Suspense>
      }/>


      <Route path='/categoryproducts' element={
        <Suspense fallback={<div>Loading...</div>}>
        <CategoryProductsSwiper/>
        </Suspense>
      }/>
        
      <Route path='/categoryProductsall'element={
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryProducts/>
        </Suspense>
      }/>

      <Route path='/compareProducts' element={
        <Suspense fallback={<div>Loading...</div>}>
          <AddToCompareProducts/>
        </Suspense>
      }/>

      <Route path="/checkout" element={
        <Suspense fallback={<div>Loading...</div>}>
          <AddressBuyNowSummary/>
        </Suspense>    
      }/>

      <Route path='/productsbydeal' element={
        <Suspense fallback={<div>Loading...</div>}>  
          <ProductsByDeal/>
        </Suspense>    
      }/>
      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/rate-products' element = {
        <Suspense fallback={<div>Loading...</div>}>
          <Orders/>
        </Suspense>
      }/>
      <Route path='paymentsuccess' element = {<PaymentSuccess/>}/>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
