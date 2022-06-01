import react from "react"
import { Button } from "reactstrap"
import CategoryDropdowns from "./CategoryDropdowns";





var type = null;
var options = null;    


class AddCategory extends react.Component {

    
    
    

    constructor() {
        super()
        const algorithm = [
            "",
            "Type",
            "Graph Algorithm",
          ];
        const language = ["C++", "Java", "Python", "C#"];
        const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];  
        this.statBrande={
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
    
    render() {

        let categoryRecords = this.state.categoryList.map((x)=>{
            return (
                <option>
                    {x.categoryNames}                 
                </option>
                
                
            )
        })

    

        return (

            <div>
                <center>
                    <CategoryDropdowns/>
                    <h1>Add Categories and SubCategories</h1>
                    <strong>Enter Category Name</strong>
                    <input type="text" 
                    value={this.state.inputvalue}
                    placeholder="Enter Category Name" 
                    onChange={this.txtCategory}/>
                    <Button style={{marginLeft:"10px"}} onClick={this.addnewCategory}>Add Records</Button>
                    <br></br>
                    <select value onChange={this.optionSelect}>
                        {categoryRecords}
                    </select>
                    {
                        (this.state.isCategorySelected)? (<h2>You selected {localStorage.getItem("category")}</h2>): null 
                    }



                    

                    
                </center>
            </div>
        )
    }
}