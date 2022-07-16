import React  from "react";

import Carousel from 'react-bootstrap/Carousel';
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import {Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Slideshow({offerPosters}){
    
  const navigate = useNavigate();

    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
      </div>

    
    
    const handleOfferPosterOnClick=(index)=>{
      // alert("Offer Poster clicked");

      // console.log(modelNumbers);
      localStorage.setItem("offerPostersModelNumber",index.modelNumbers)
      console.log(localStorage.getItem("offerPostersModelNumber"))
      navigate("/offers")
    }

    return(
    
      <div >
        <Carousel style={{ zIndex: '0' }}>
        {
            offerPoster= offerPosters.map(index=>{
                //let Base64string = Buffer.from(index.image.data,"base64").toString();
                
                console.log("image",index.image.data);
                // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                return(
                    <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index)}>
                    <img id = "classname" 
                    className="d-block w-100"
                    src={"data:image/png;base64," + index.image.data}
                    alt={index.alt}
                    height={500}
                    
                    />                    
                    </Carousel.Item>
                  
                )

            })
        }
  
{/*   
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300"
      alt="Second slide"
      height={300}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://freerangestock.com/thumbnail/140669/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg"
      alt="Third slide"
      height={300}
    />
  </Carousel.Item> */}
</Carousel>

</div>
    );
}
export default Slideshow; 