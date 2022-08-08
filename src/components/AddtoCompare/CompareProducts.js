import React from "react";
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';
import { MDBCard, MDBListGroup, MDBListGroupItem ,MDBContainer,MDBRow,MDBCol} from 'mdb-react-ui-kit';
import { getCookie,setCookie } from "../Cookies";
import axios from 'axios';

function CompareProducts(){

    var modelnums=new Array();
    
    const [comparemodels, setcomparemodels] = useState([]);
    const[comparemodelsfetched,setcomparemodelsfetched]=useState(false);
    modelnums=getCookie("addToCompare").split(',');
    
    console.log("models to compare: "+modelnums);
    useEffect(()=>{
        if(!comparemodelsfetched){
            var urls = [];
            
            modelnums.map(modelNum => {
                if(modelNum==="" || modelNum===null){

                }
                else{
                urls.push(axios.get("http://mahavirbackend-env.eba-bkwmcbpz.us-east-1.elasticbeanstalk.com/get-products/" + modelNum));

                }
            })
            axios.all(urls).then(
                axios.spread((...res) => {
                    res.map(index => {

                        comparemodels.push(index.data);

                        // filteredProducts.push(index.data);


                    })
                    setcomparemodelsfetched(true);

                })
            )
        
        }
    })   
    console.log("models to compare: "+comparemodels);

    function remove(modelnumber){
       
        for (var i = 0; i < modelnums.length; i++) {
            if (modelnums[i] === modelnumber) {
                modelnums.splice(i, 1);
                console.log(modelnums);
                setCookie("addToCompare",modelnums,20);
                window.location.reload();
                break;
            }
        }
        
                
        
    }


    

    return(
        // <MDBContainer>
            <MDBRow>
            
        {
             comparemodels.map(index=>{
               
                return(
                    <MDBCol>
                    {/* <MDBCard style={{ width: '25rem' }}> */}
                    <MDBListGroup flush>
                        <MDBListGroupItem><Button onClick={()=>remove(index.modelNumber)}>Remove</Button></MDBListGroupItem>
                        <MDBListGroupItem>{index.productName}</MDBListGroupItem>
                        <MDBListGroupItem><img src={index.productImage1} className='img-thumbnail' alt='...' /></MDBListGroupItem>
                        <MDBListGroupItem>Rs {index.productPrice}</MDBListGroupItem>
                        {/* <MDBListGroupItem>{Object.keys(index.productInformation)}</MDBListGroupItem>
                        <MDBListGroupItem>{Object.values(index.productInformation)}</MDBListGroupItem> */}

                        {
                            // getProductInformation(index)
                            // var keys=Object.keys(index.productInformation);
       
                            Object.keys(index.productInformation).map(key=>{
                                // var keysofkeys=[];
                                // keysofkeys.push(Object.keys(index.productInformation[key]));
                                // console.log("key: "+key);

                                return(
                                    <>
                                    <MDBListGroupItem><b>{key}</b></MDBListGroupItem>
                                    {
                                        Object.keys(index.productInformation[key]).map(info=>{
                                            // console.log(info,index.productInformation[key][info])
                                            return(
                                                <>
                                                
                                                    <MDBListGroupItem>{info}{index.productInformation[key][info]}</MDBListGroupItem>
                                                
                                                </>
                                            )
                                        })
                                    }
                                    </>
                                )
                                
                            })
                        }

                        {/* {
                            
                            JSON.stringify(index.productInformation).map(info=>{
                                return(
                                    <MDBListGroupItem>hi</MDBListGroupItem>
                                )
                            })
                        } */}
                    </MDBListGroup>
                    {/* </MDBCard> */}
                    </MDBCol>
                    
                )
            })
        }
        
       </MDBRow>
       
    //    </MDBContainer>
            
    );

}
export default CompareProducts;