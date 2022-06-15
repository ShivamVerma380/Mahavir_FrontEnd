import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search(){
    const[products,SetProducts] = useState([]);
    const[isProductsFetched,setIsProductsFetched] = useState(false);

    useEffect(()=>{
        if(!isProductsFetched){
            axios.get("http://localhost:8080/get-search-products")
                .then(function(response){
                    if(response.status==200){
                        SetProducts(response.data);
                        setIsProductsFetched(true);
                    }
                }).catch(function(error){
                    console.log("error",error);
                })
        }
    })

    // const items = [
    //     {
    //       id: 0,
    //       name: 'Cobol'
    //     },
    //     {
    //       id: 1,
    //       name: 'JavaScript'
    //     },
    //     {
    //       id: 2,
    //       name: 'Basic'
    //     },
    //     {
    //       id: 3,
    //       name: 'PHP'
    //     },
    //     {
    //       id: 4,
    //       name: 'Java'
    //     }
    //   ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }
    
      return (
        (isProductsFetched)?(
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={products}
                fuseOptions={{keys:["name","price","highlights","category"]}}
                resultStringKeyName="name"
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
        </div>
        ):(
            null
        )
      )
}

export default Search;