import React  from "react";

import Carousel from 'react-bootstrap/Carousel';

function Slideshow({offerPosters}){
    

    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>
    return(
        <Carousel>
        {
            offerPoster= offerPosters.map(index=>{
                return(
                    <Carousel.Item interval={1000}>
                    <img className="d-block w-100"
                    src={index.src}
                    alt={index.alt}
                    height={300}
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
    );
}
export default Slideshow; 