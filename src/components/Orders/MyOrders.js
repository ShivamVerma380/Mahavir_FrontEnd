import React  from "react";
import OrderItem from "./OrderItem";

const MyOrders=()=>{
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tIiwiZXhwIjoxNjU0MDA1OTkwLCJpYXQiOjE2NTM5MTk1OTB9.zbu5U0nrqPNSilthy3IrmwqYi0n4FoEyKIi6S_yn0sc"
    

    return(
        <div>
            <h1>MyOrders</h1>
            <OrderItem/>
        </div>
    );
}

export default MyOrders;