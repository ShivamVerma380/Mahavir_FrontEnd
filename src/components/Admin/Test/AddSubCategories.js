import React, { useEffect, useState } from "react";
import Header from "../../Header";
import {Row,Col,Form, Button} from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import { constants } from "react-horizontal-scrolling-menu";
import 'react-toastify/dist/ReactToastify.css';
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
const AddSubCategories=()=>{
    
    console.log("Category Selected",localStorage.getItem("CategorySelected"));
    console.log("Model Nos",localStorage.getItem("ModelNos"))

    const[Category,SetCategories] = useState([]);
    const[isCategoriesFetched,SetIsCategoriesFetched] = useState(false);

    const navigate = useNavigate();
    
    const[SubCategories,SetSubCategories] = useState([]);
    const[mapState,setMapState] = useState(new Map());
    //const map = new Map();
    const params={};
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
                console.log("Error in admin");
        //   toast.warn("Error ",error)

            })
        }       
    })

    const handleSubSubCatChange=(e)=>{
        //map = new Map();

        SubCategories.map(index=>{
            index.subSubCategories.map(subSubCat=>{
                console.log(subSubCat, document.getElementById(subSubCat).checked)
                if(document.getElementById(subSubCat).checked){
                    //map.set(index.subCategoryName,subSubCat);
                    setMapState(map => new Map(map.set(index.subCategoryName, subSubCat)));

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
        console.log(mapState);
        
        // console.log(map);
        // for(var key in map){
        //     console.log("key:",key)
        //     params={"$key":"$value"}
        //     params+={key:map[key]}
        // }
        
        // console.log("params",params);
        
    }

    function handleSubmitClick(){
        // var form_data_body={
            
        // };
        // var arr=[];
        // for(const[key,value] of map){
        //     console.log(key,value);
        //     form_data_body.append({key:value})
        //     // form_data_body.append(key,value);
        // }
        // console.log("form_data_body",form_data_body);

        // /add-product-sub-categories/{modelNumber}
        // modelNumber

        // const params = new FormData();
        // for(const[key,value] of map){
        //     params.append(key,value)
        // }
            // "Brand":"MI",
            // "Type":"TouchScreen"
        
        // for(const[key,value] of map){
        //     params.append(key,value)
        // }
        // const params={
        //     "Brand":"Apple",
        //     "Type":"Touchscreen"
        // };

        // const params = JSON.stringify(

            
        //     {"Brand":"Apple"}
            
        // );
        const params={}
        // console.log("Map"+map);
        // for(var key in map){
        //     console.log("key:",key)
        //     params={"$key":"$value"}
        //     params+={key:map[key]}
        // }
        
        console.log("params",mapState);
        


    

        // console.log("params",params);
        axios.post("http://localhost:8080/add-product-sub-categories/"+localStorage.getItem("ModelNos"),{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGJjYWFmZGFhaHN0c3NhYWFhc3ciLCJleHAiOjE2NTYwOTUwMzYsImlhdCI6MTY1NTk5NTAzNn0.WnGVpf7UeR1h2ZIgHm4Tkms_3LnGcL1f4uxyff7WRr8",
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            mode:"no-cors",
            data:mapState
            
        }).then(function(response){
            console.log("response",response.data);
            if(response.status==200){
                console.log("Data saved successfully");
                navigate("/addProductInformation/"+localStorage.getItem("ModelNos"));
            }
        }).catch(function(error){
            // console.log("error",error);
            toast.warn("Error ")

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