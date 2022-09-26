import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import ProductDetails from './components/Items/ProductDetails';
import Cart from "./components/Shopping-Cart/Cart";
import CategoryDropdowns from './components/Admin/CategoryDropdowns';

// import Payment from './components/Checkout/BuyNowCheckout/Payment';
// import OrderSummary from './components/OrderSummary';
import PaymentOption from './components/PaymentOption';
import 'typeface-roboto';


import OfferItems from './components/offers/OfferItems';


import OnlyReviews from './components/Items/OnlyReviews';
import RateReviewProducts from './components/Items/RateReviewProducts';

import MiniPosterItems from './components/offers/MiniPosteritems';

import BrandDetails from './components/Items/BrandDetails';
import BrandCatProducts from './components/Items/BrandCatProducts';


import FilterProduct from './components/Filters/FilterProduct';
import WishlistProducts from './components/WishlistProducts';


import MiniPostersBottom from './components/offers/MiniPostersBottom';


import BuyNowSummary from './components/Checkout/BuyNowCheckout/BuyNowSummary';
import Invoice from './components/OrderDetails/Invoice';
import OrderInvoices from './components/OrderDetails/OrderInvoices';
import AddressForm from './components/OrderSummary/AddressForm';
import Spinner from 'react-bootstrap/Spinner';
import DeveloperPage from './components/DeveloperPage';

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
const PrivacyPolicy = React.lazy(()=>import('./components/Footer/PrivacyPolicy'));
const ShippingOptions= React.lazy(()=>import('./components/Footer/ShippingOptions'));
const PaymentReturns = React.lazy(()=>import('./components/Footer/PaymentReturns'));
const TermsOfUse = React.lazy(()=>import('./components/Footer/TermsOfUse'));
const PaymentSuccess = React.lazy(()=>import('./components/Checkout/BuyNowCheckout/PaymentSuccess'));
const GenerateBill = React.lazy(()=>import('./components/GenerateBill'));
const AboutCompany = React.lazy(()=>import('./components/Footer/AboutCompany'));
const FAQ = React.lazy(()=>import('./components/Footer/FAQ'));
const ContactUs = React.lazy(()=>import('./components/Footer/ContactUs'));
const StoreLocator = React.lazy(()=>import('./components/Footer/StoreLocator'));
const BrandOfferPosterProducts = React.lazy(()=>import('./components/Items/BrandOfferPosterProducts'));
const PendingDelivery = React.lazy(()=>import('./components/Admin/Sidebar/PendingDelivery'));
const UserComplaint = React.lazy(()=>import('./components/Items/UserComplaint'));
const AdminLogin = React.lazy(()=>import('./components/Admin/AdminLogin'));
const AllComplaints = React.lazy(()=>import('./components/Admin/Sidebar/AllComplaints'));
const AddSubCategories = React.lazy(()=>import('./components/Admin/Test/AddSubCategories'));
const AddProductInformation = React.lazy(()=>import('./components/Admin/Test/AddProductInformation'));
const CompletedOrders = React.lazy(()=>import('./components/Admin/Sidebar/CompletedOrders'));
const UploadExcel = React.lazy(()=>import('./components/Admin/Sidebar/UploadExcel'));

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <HashRouter>
    <Routes>
      <Route path='/' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <App/>
        </Suspense>
      }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/productDetails' element = {<ProductDetails/>}/>
      <Route path='/admin' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <AdminLogin/>
        </Suspense>
      }/>
      {/* <Route path='/admin' element = {<Admin/>}/> */}
      {/* <Route path='/admindetail' element = {<Admin/>}/> */}
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/categorydrop' element = {<CategoryDropdowns/>}/>
      <Route path='/pendingdelivery' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>  
          <PendingDelivery/>
        </Suspense>
      }/>
      <Route path='/allcomplaints' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <AllComplaints/>
        </Suspense>
      }/>
      <Route path='/AddressForm' element = {<AddressForm/>}/>
      <Route path='/PaymentOption' element = {<PaymentOption/>}/>
      
      <Route path='/offers' element={<OfferItems/>}/>
      <Route path='/my-orders' element={<OrderInvoices/>}/>
      <Route path='/upload' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <UploadExcel/>
        </Suspense>
      }/>
      <Route path='/onlyreviews' element = {<OnlyReviews/>}/>
      <Route path='/ratereview' element = {<RateReviewProducts/>}/>
      <Route path='/usercomplaint' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <UserComplaint/>
        </Suspense>
      }/>
      
      <Route path='/completedorders' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <CompletedOrders/>
        </Suspense>
      }/>    
      <Route path='/terms-of-use' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <TermsOfUse/>
        </Suspense>    
      }/>
      <Route path='/storelocator' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>  
          <StoreLocator/>
        </Suspense>
      }/>
      <Route path='/addSubCategories/:ModelNos' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <AddSubCategories/>
        </Suspense>
      }/>
      <Route path='/addProductInformation/:ModelNos' element={
          <Suspense fallback={
            <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
          }> 
          <AddProductInformation/>
        </Suspense>
      }/>
      <Route path='/miniposteritems' element={<MiniPosterItems/>}/>
      
      <Route path='/branddetails' element={<BrandDetails/>}/>
      <Route path='/brandcatproducts' element={<BrandCatProducts/>}/>
      <Route path='/brandofferposterproducts' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <BrandOfferPosterProducts/>
        </Suspense>
      }/>
      
      <Route path='/filterproducts' element={<FilterProduct/>}/>
      <Route path='/wishlistproducts' element={<WishlistProducts/>}/>
      <Route path='/shippingoptions' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <ShippingOptions/>
        </Suspense>  
        }/>
      <Route path='/paymentreturns' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <PaymentReturns/>
        </Suspense>  
      }/>
      
      <Route path='/minibottom' element={<MiniPostersBottom/>}/>
      
      <Route path='/summary' element={<BuyNowSummary/>}/>
      <Route path = "/payment" element = {<Payment/>}/>

      <Route path= '/:Category/:SubCategory/:SubSubCategory' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <SelCatProducts/>
        </Suspense>
      }/>
      <Route path='/:Category' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <SelCatProducts/>
        </Suspense>
      }/>

      <Route path = "/payment" element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <Payment/>
        </Suspense>
      }/>


      <Route path='/categoryproducts' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <CategoryProductsSwiper/>
        </Suspense>
      }/>
        
      <Route path='/categoryProductsall'element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <CategoryProducts/>
        </Suspense>
      }/>

      <Route path='/compareProducts' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <AddToCompareProducts/>
        </Suspense>
      }/>

      <Route path="/checkout" element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <AddressBuyNowSummary/>
        </Suspense>    
      }/>

      <Route path='/productsbydeal' element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <ProductsByDeal/>
        </Suspense>    
      }/>
      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/rate-products' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }> 
          <Orders/>
        </Suspense>
      }/>

      <Route path='/generatebill' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <GenerateBill/>
        </Suspense>
      }/>
      <Route path='/developerpage' element = {
          <DeveloperPage/>
      }/>
      <Route path='/aboutcompany' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <AboutCompany/>
        </Suspense>  
      }/>
      <Route path="/privacypolicy" element={
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>  
          <PrivacyPolicy/>
        </Suspense>
      }/>
      <Route path='/faq' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <FAQ/>
        </Suspense>  
      }/>
      <Route path='/contactus' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <ContactUs/>
        </Suspense>
      }/>
      <Route path='paymentsuccess' element = {
        <Suspense fallback={
          <Spinner animation="border" variant="danger" style={{justifyContent:"center",alignItems:"center",margin:"200px"}} />
        }>   
          <PaymentSuccess/>
        </Suspense>    
      }/>

      
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
