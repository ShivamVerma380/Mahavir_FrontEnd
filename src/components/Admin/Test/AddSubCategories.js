import React, { useEffect, useState } from "react";
import Header from "../../Header";
import {Row,Col,Form, Button} from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
const AddSubCategories=()=>{
    
    console.log("Category Selected",localStorage.getItem("CategorySelected"));
    console.log("Model Nos",localStorage.getItem("ModelNos"))

    const[Category,SetCategories] = useState([]);
    const[isCategoriesFetched,SetIsCategoriesFetched] = useState(false);

    const navigate = useNavigate();
    
    const[SubCategories,SetSubCategories] = useState([]);
    var map;

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
        map = new Map();

        SubCategories.map(index=>{
            index.subSubCategories.map(subSubCat=>{
                console.log(subSubCat, document.getElementById(subSubCat).checked)
                if(document.getElementById(subSubCat).checked){
                    map.set(index.subCategoryName,subSubCat);
                }
            })
            // console.log(document.getElementById(index.subCategoryName));
        })
        // console.log("checked",document.getElementById("Brand").checked)
        // if(e.target.checked==true){
        //     console.log("true",e.target.value);
        // }else{
        //     console.log("false",e.target.value);    
        // }
        
    }

    function handleSubmitClick(){
        // var form_data_body={};
        var arr=[];
        for(const[key,value] of map){
            console.log(key,value);
            arr.push({key:value});
            // form_data_body.append(key,value);
        }
        // /add-product-sub-categories/{modelNumber}
        // modelNumber
        axios.post("http://localhost:8080/add-product-sub-categories/"+localStorage.getItem("ModelNos"),arr,{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImV4cCI6MTY1NTU4MDY4MywiaWF0IjoxNjU1NDgwNjgzfQ.e_PWiAQ8yZV2FU6ChW1krAInQ4eLIWiKWrWnZuBlVY287vcIrqVVKC4gM1XxSMGCP9x-sgAvZNq0ArWfRPnXgw",
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            mode:"no-cors",
            
            
        }).then(function(response){
            console.log("response",response.data);
            if(response.status==200){
                console.log("Data saved successfully");
                navigate("/addProductInformation/"+localStorage.getItem("ModelNos"));
            }
        }).catch(function(error){
            console.log("error",error);
        })

        
    }

    return(
            <div>
            <Container>
            {
            (isCategoriesFetched)?(
                SubCategories.map(index=>{
                    return(
                            <div>
                            <h4>{index.subCategoryName}</h4>
                            {
                                index.subSubCategories.map(subSubCat=>{
                                    return(
                                            <div>
                                            <input  id={subSubCat} name={index.subCategoryName} type="radio" value={subSubCat} onChange={(e)=>handleSubSubCatChange(e)}/>{subSubCat}
                                            <br></br>
                                            </div>    
                                    )
                                })
                            }
                            </div>
                    );
                })
            ):(
                null
            )
            }
            <br></br>
            <br></br>
            <Button variant="flat" onClick={handleSubmitClick}>Submit</Button>
            </Container>
            </div>
            
       
    );
}

export default AddSubCategories;