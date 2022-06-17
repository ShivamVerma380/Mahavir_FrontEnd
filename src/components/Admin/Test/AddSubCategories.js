import React, { useEffect, useState } from "react";
import Header from "../../Header";
import {Row,Col,Form} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
const AddSubCategories=()=>{
    
    console.log("Category Selected",localStorage.getItem("CategorySelected"));
    console.log("Model Nos",localStorage.getItem("ModelNos"))

    const[Category,SetCategories] = useState([]);
    const[isCategoriesFetched,SetIsCategoriesFetched] = useState(false);


    const[SubCategories,SetSubCategories] = useState([]);

    useEffect(()=>{
        if(!isCategoriesFetched){
            axios.get("http://localhost:8080/get-categories/admin")
            .then(function(response){
                if(response.status==200){
                    SetCategories(response.data);
                    response.data.map(index=>{
                        if(index.categoryName===localStorage.getItem("CategorySelected")){
                            SetSubCategories(index.subCategories)
                        }
                    })
                    SetIsCategoriesFetched(true);
                }
            }).catch(function(error){
                console.log("Error",error);
            })
        }       
    })

    const handleSubSubCatChange=(e)=>{
        console.log("subsubCat",e.target.value);
    }

    return(
            
            (isCategoriesFetched)?(
                SubCategories.map(index=>{
                    return(
                        <div>
                            <div>
                            <Container>
                            <h4>{index.subCategoryName}</h4>
                            {
                                index.subSubCategories.map(subSubCat=>{
                                    return(
                                            <div>
                                            <input name="radioSubSubCat" type="radio" value={subSubCat} onChange={(e)=>handleSubSubCatChange(e)}/>{subSubCat}
                                            <br></br>
                                            </div>    
                                    )
                                })
                            }
                            </Container>
                            </div>
                        </div>
                    );
                })
            ):(
                null
            )
        
       
    );
}

export default AddSubCategories;