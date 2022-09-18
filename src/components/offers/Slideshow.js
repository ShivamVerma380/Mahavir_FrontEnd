import React  from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import {BsArrowUp} from "react-icons/bs";
import "../../App.css";
import {Row,Col} from "react-bootstrap";
import { color } from "@mui/system";

function Slideshow({offerPosters}){
    
  const navigate = useNavigate();

    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
      </div>

    
    
    const handleOfferPosterOnClick=(index)=>{
      localStorage.setItem("offerPostersModelNumber",index.modelNumbers)
      navigate("/offers")
    }

    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return(
    
      <div >
        <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                    <button onclick={()=>topFunction()} id="myBtn" title="Go to top"><BsArrowUp onClick={topFunction}/></button>

        <Carousel style={{cursor:"pointer"}} className="offerslide">
        {
            offerPoster= offerPosters.map(index=>{
                return(
                  
                      <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index)}>
                      <img id = "classname" 
                      className="d-block w-100"
                      src= {index.imageUrl}
                      alt={index.alt}
                      height={500}
                      
                      />                    
                      </Carousel.Item>
                )

            })
        }
</Carousel>
</Col>
                    <Col md={2}></Col>
                  </Row>

</div>
    );
}
export default Slideshow; 