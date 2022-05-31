import * as React from "react";
import axios from "axios";


/** Type variable to store different array for different dropdown */
var type = null;
/** This will be used to create set of options that user will see */
var options = null;
  
const CategoryDropdowns = ({Category}) => {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = React.useState("");
  
  const [isCategorySelected,setIsCategorySelected] = React.useState(false);
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setIsCategorySelected(false);
    setSelected(event.target.value);
    // fetchSubCategories();
  };
  
  const fetchSubCategories=()=>{
    console.log("In Fetch SubCategories")
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tand3ZHNpIiwiZXhwIjoxNjU0MDY3ODQyLCJpYXQiOjE2NTM5ODE0NDJ9.hMVo1iliC9lUdp4I2CDzQqtwQqbDh1M1mTAhCc5tHKM"

    axios({
      method:"get",
      url:"http://localhost:8080/get-sub-categories/"+selected,
      headers:{
        "Authorization":"Bearer "+token,
      }
    }).then(function (response){
      console.log(response.data);
      type = response.data;
      setIsCategorySelected(true)
      
      console.log("type:",type);
    }).catch(function(error){
      console.log("Error:",error);
    })
  }


  
  
  
  
  
  fetchSubCategories();
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (isCategorySelected) {
    options = type.map((el) => <option>{el}</option>);
  }
  return (
    
    <div
      
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div>
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <select onChange={changeSelectOptionHandler}>
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
          <select>
            {
              /** This is where we have used our options variable */
              options
              
            }
            {
              console.log("Options",options)
            }
          </select>
        </div>
      </form>
    </div>
  );
};
  
export default CategoryDropdowns;