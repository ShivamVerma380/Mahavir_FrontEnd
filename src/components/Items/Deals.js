import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

function Deals({title}) {

    console.log("inside deals");
    const navigate = useNavigate();
    const [deal,setDeal]=useState([]);
    const [isDealFetched,SetIsDealFetched] = useState(false);
    useEffect(()=>{
        if(!isDealFetched)
        {
            axios.get("http://localhost:8080/deals").then(
            function(response){
              if(response.status==200){
                console.log(response.data);
                setDeal(response.data);
                SetIsDealFetched(true);
              }
            }).catch(function(error){
              console.log("error",error);
            }
          );
        }
          
        
        
    })

    return(
        <div>
        {
            (isDealFetched)?(
                
                <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>{title}</h3>
            ):(null)
        }
        </div>
    );
}
export default Deals;