import React from "react";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
/** subCategoriesArray variable to store different array for different dropdown */
var subCategoriesArray = null;
/** This will be used to create set of subCategories that user will see */
var subCategories = null;

var subSubCategoriesArray = null;

var subSubCategories = null;
  
const CategoryDropdowns = ({Category}) => {
  /** "selectedCategory" here is state variable which will hold the
   * value of currently selectedCategory dropdown.
   */
  const [selectedCategory, setselectedCategory] = React.useState("");

  const [selectedSubCategory,setSelectedSubCategory] = React.useState("");
  
  const [isCategoryselected,setIsCategoryselected] = React.useState(false);

  const [isSubCategoryselected,setIsSubCategorySelected] = React.useState(false);


  const [isSelectedCategoryEqualChoose, setIsSelectedCategoryEqualChoose] = React.useState(false);
  
  /** Function that will set different values to state variable
   * based on which dropdown is selectedCategory
   */
  const changeCategoryOptionHandler = (event) => {
    setIsCategoryselected(false);
    
    
    setselectedCategory(event.target.value);
    if(event.target.value==="Choose..."){
      setIsSelectedCategoryEqualChoose(true);
      subCategoriesArray=[];
    }
    
    // fetchSubCategories();
    
  };


  

  const changeSubCategoryOptionHandler = (event) =>{

    setIsSubCategorySelected(false);
    setSelectedSubCategory(event.target.value);

    
    
  }

  if(selectedCategory==="Choose..."){
    subCategoriesArray=[]
    subSubCategoriesArray=[]
    setIsSelectedCategoryEqualChoose(true);
    console.log("SubCategoriesArray In Choose",subCategoriesArray);
    console.log("SubSub CategoriesArray In Choose",subSubCategoriesArray);

    

  }

  if(selectedSubCategory==="Choose..."){
    subSubCategoriesArray=[]
      }
  
  const fetchSubCategories=()=>{
    console.log("In Fetch SubCategories")
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHJhQGdtYWwuY29tIiwiZXhwIjoxNjU2MTU5NjUzLCJpYXQiOjE2NTYwNTk2NTN9.ZRmfF-Ld05ekiunrpYKteMBK_7Q22BuqnfMJ22K2P7w"

    axios({
      method:"get",
      url:"http://localhost:8080/get-sub-categories/"+selectedCategory,
      headers:{
        "Authorization":"Bearer "+token,
      }
    }).then(function (response){
      console.log(response.data);
      subCategoriesArray = response.data;
      subSubCategoriesArray=[];
      setIsCategoryselected(true)
      
      console.log("subCategoriesArray:",subCategoriesArray);
    }).catch(function(error){
      // console.log("Error:",error);
      toast.warn("Error ",error)

    })
  }

  const fetchSubSubCategories=()=>{
    console.log("In Fetch SubSubCategories")
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHJhQGdtYWwuY29tIiwiZXhwIjoxNjU2MTU5NjUzLCJpYXQiOjE2NTYwNTk2NTN9.ZRmfF-Ld05ekiunrpYKteMBK_7Q22BuqnfMJ22K2P7w"

    axios({
      method:"get",
      url:"http://localhost:8080/get-sub-sub-categories/"+selectedCategory+"/"+selectedSubCategory,
      headers:{
        "Authorization":"Bearer "+token,
      }
    }).then(function (response){
      console.log(response.data);
      subSubCategoriesArray = response.data;
      setIsSubCategorySelected(true)
      
      console.log("subSubCategoriesArray:",subSubCategoriesArray);
    }).catch(function(error){
      console.log("Error in get-sub-sub-categories/");
      // toast.warn("Error ",error)

    })
  }




  
  
  
  
  
  fetchSubCategories();
  /** If "subCategoriesArray" is null or undefined then subCategories will be null,
   * otherwise it will create a subCategories iterable based on our array
   */
  if (isCategoryselected) {
    subCategories = subCategoriesArray.map((el) => <option>{el}</option>);
      
  }
  fetchSubSubCategories();
  
  if (isSubCategoryselected) {
    subSubCategories = subSubCategoriesArray.map((el) => <option>{el}</option>);
  }
  
  
  
  return (
  
    
    <div
      
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
     { (isSelectedCategoryEqualChoose)?(
        <form>  
        <div>
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selectedCategory.
           */}
          <select onChange={changeCategoryOptionHandler}>
            <option>Choose...</option>
            {
              // console.log({Category})
            }
            {
              Category.map(index=>{
                return(
                  <option>{index}</option>
                );
              })
            }
            {/* // <option>TV</option>
            // <option>Language</option>
            // <option>Data Structure</option>
            // <option>Add New</option> */}
          </select>
        </div>
        </form>
      ):(
      <form>
        <div>
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selectedCategory.
           */}
          <select onChange={changeCategoryOptionHandler}>
            <option>Choose...</option>
            {
              // console.log({Category})
            }
            {
              Category.map(index=>{
                return(
                  <option>{index}</option>
                );
              })
            }
            {/* // <option>TV</option>
            // <option>Language</option>
            // <option>Data Structure</option>
            // <option>Add New</option> */}
          </select>
        </div>
        
        <div>
          <br></br>
          <select onChange={changeSubCategoryOptionHandler}>
          <option>Choose...</option>
            {
              /** This is where we have used our subCategories variable */
              subCategories
            }
            {
              console.log("subCategories",subCategories)
            }
          </select>
        </div>

        <div>
          <br></br>
          <select>
            <option>Choose...</option>
            {
              /** This is where we have used our subSubCategories variable */
              subSubCategories
            }
            {
              console.log("subSubCategories",subSubCategories)
            }
          </select>
        </div>
      </form>
      )}
    </div>
  );
};
  
export default CategoryDropdowns;