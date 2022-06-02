import react from "react"
import React from 'react';
import { Button } from "reactstrap"
import CategoryDropdowns from "./CategoryDropdowns";
import { useNavigate } from "react-router-dom";




var type = null;
var options = null;  

function AddNewRecord(props) {
    const navigate = useNavigate();

    const [selected, setSelected] = React.useState("");
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    
    setSelected(event.target.value);
  };

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
            <option>Add New</option>
            
            {/* <option>Language</option>
            <option>Data Structure</option> */}
          </select>
        </div>
        <div>
          <select>
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        </div>
      </form>
    </div>
    );
}


class AddCategory extends react.Component {

    
    
    

    constructor(props) {
        
        super(props)
        this.state = {isAddbtnclicked : false};
        
        this.ifAddRecordBtnClicked = this.ifAddRecordBtnClicked.bind(this);
        
        this.state={
            inputvalue:"",
            isCategorySelected: false,
            categoryList:[
                {
                    categoryNames:'-- SELECT --'
                }
            ],
            
            selected: "",
            setSelected:"",
            
            
        }
        
    }


    

    txtCategory=(e)=>{
        this.setState({inputvalue:e.target.value},console.log(e.target.value))
        localStorage.setItem("inputtext",e.target.value);
        
    }



    

    optionSelect=(e)=>{
        this.setState({isCategorySelected:true})
        console.log("Item selected")
        this.setState({inputvalue:e.target.value})
        console.log(e.target.value)
        localStorage.setItem("category",e.target.value)
        alert(localStorage.getItem("category"))
        
    }

    

    addnewCategory=()=> {
        this.setState(x=>({
            inputvalue:'',
            
            categoryList:[
                ...x.categoryList,
                {categoryNames:x.inputvalue},
                

            ]
        }))
    }

    

    ifAddRecordBtnClicked() {
        this.setState({isAddbtnclicked:true})
        
        {
            return(
                alert("User Registered Successfully")
                
            );
           
        }
        
    }
    
    render() {

        
            
                
        
            //toast.success("Email Verified Successfully")
           
        
                
                
            
        

    

        return (

            <div>
                <center>
                
                    
                    
                
                    
                    <h1>Add Categories and SubCategories</h1>
                    <strong>Enter Category Name</strong>
                    <input type="text" 
                    value={this.state.inputvalue}
                    placeholder="Enter Category Name" 
                    onChange={this.txtCategory}/>
                    <Button style={{marginLeft:"10px"}} onClick={this.ifAddRecordBtnClicked}>Add Records</Button>
                    <br></br>
                    {/* <select value onChange={this.optionSelect}>
                        {categoryRecords}
                    </select> */}
                    {
                        (this.state.isCategorySelected)? (<h2>You selected {localStorage.getItem("category")}</h2>): null 
                    }

                    <AddNewRecord clickFunc={this.ifAddRecordBtnClicked}/>



                    

                    
                </center>
            </div>
        )
    }
};
export default AddCategory;