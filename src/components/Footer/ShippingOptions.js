import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

function ShippingOptions(){
    return(
        <div>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <h3 style={{marginTop:"20px"}}><b>Shipping Options</b></h3>
                <p><a href="http://mahavirelectronics.net/" target="_blank"> MahavirElectronics.net.</a> thanks you for your patronage and values your purchases with us. Given below are the details for shipping/delivery of the products sold on <a href=">www.mahavirelectronics.net">www.mahavirelectronics.net</a> for your kind reference.</p>
                <h4><b>1. Shipping/Delivery Area</b></h4>
                <p>Currently delivery of products purchased on <a href="http://mahavirelectronics.net/" target="_blank"> MahavirElectronics.net.</a> is available in Pune city limits only (Kindly check Pin Code for Delivery Serviceable Area). As and when we would provide delivery to other locations, the same would be updated here, we request you to kindly check the Shipping Options link on our home page for further updates.<a href="http://mahavirelectronics.net/" target="_blank"> MahavirElectronics.net.</a> provides FREE shipping /delivery to your beneficiary address, we request you to place your valued order and enjoy the FREE shipping/delivery offer. Your order will be delivered as per the stipulated delivery time (please refer to Payment and Returns Policies). We believe in providing our dear customers with the best service and hence do not charge for delivery, however, we reserve the right to change/discontinue the FREE Shipping/Delivery at any time.</p>
                <h4><b>2. Cancellation of Shipment</b></h4>
                <p> <a href="http://mahavirelectronics.net/" target="_blank"> MahavirElectronics.net.</a> will not allow for Cancellation of Shipment for any reason and request our dear customers accordingly to confirm the purchase first and then book with <a href=">www.mahavirelectronics.net">www.mahavirelectronics.net</a>.</p>
            </Container>
        </div>
    )
}

export default ShippingOptions;