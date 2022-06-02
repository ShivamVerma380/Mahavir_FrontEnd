import React, {useState} from "react";
import "./ShowSearchResults.css";

const Test = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Check Textured Coat",
      category: "Coat",
      price: "175.4",
      tags: "coat check textured camel brown long sleeves buttoned cuffs",
    },
    {
      id: 2,
      title: "Contrast Check Coat",
      category: "Coat",
      price: "155.4",
      tags: "coat camel black grey marl lapel collar hip flap pockets",
    },
    {
      id: 3,
      title: "White Coat",
      category: "Coat",
      price: "125.4",
      tags: "coat camel white short sleeves double-breasted button",
    },
    {
      id: 4,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain purple long baggy hood",
    },
    {
      id: 5,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain black long baggy hood",
    },
    {
      id: 6,
      title: "Basic short Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain gray grey short hood",
    },
  ]);

  const [isSearchEmpty,setIsSearchEmpty] = useState(true); 


  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    if (
      product.tags.toLowerCase().includes(search) ||
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    ) {
      return product;
    }
    else {

    }
  });

    

  return (
    <div className="searchBarSection">
      <div class="searchBar">
        <input
          className="input"
          onChange={(e) => {
            // var str = e.target.value;  
            
              
            setSearch(e.target.value.toLowerCase());
            if (e.target.value.trim().length<1) {
                // console.log(e.target.value)
                setIsSearchEmpty(true);
            }  
            else {
                setIsSearchEmpty(false);
            }
            
            
          }}
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      {
          (isSearchEmpty)? (null): (
            <div className="display">
            {filteredProducts.map((product) => (
              <div className="product">
                <h6>{product.category}</h6>
                <h3>{product.title}</h3>
                <h5>{product.price}</h5>
              </div>
            ))}
          </div>
          )
      }
      
    </div>
  );
};

export default Test;