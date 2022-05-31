import React from "react";
import react from "react"
import { Button } from "reactstrap"
import Header from "../Header";
import CategoryDropdowns from "./CategoryDropdowns";
import { useState } from "react";
import axios from "axios";


var flag = true;


function SelectCategory(props){
    if(!props.isAddNewSelected){
    return(
        <div>
            <h1>Select Category</h1>
            {
                console.log(props.Category)
            }
            <CategoryDropdowns Category={props.Category}/>
        </div>
    );
    }
}

function AddElement(props){
    if(props.isAddNewSelected){
    return(
        <div>
            <h1>Add Element</h1>
        </div>
    );
    }
}

class AddCategory extends React.Component{
    
    constructor(props){
        const TV = ["Type","Brand","Add New"];
        const Laptop=["Type","Add New"];

        super(props);

        this.state={isAddNewSelected:true , 
            Category:[]
            }
        this.updateAddNew = this.updateAddNew.bind(this);

     
    }

    fetchCategories(){
        var updatedCategories=[];
        axios.get("http://localhost:8080/get-categories").then(function(response){
        console.log(response);
        if(response.status==200){
            console.log(response.data.category);
            //this.setState({Category:response.category})
            var responseArray = response.data;

           
            responseArray.map(index=>{
                // updatedCategories.push(index.)
                console.log(index.category)
                updatedCategories.push(index.category);
            })
            updatedCategories.push("Add New Category")
            console.log("Updated Categories",updatedCategories);
            
            console.log("Category")
        }
        console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })
        this.setState({Category:updatedCategories})
        flag = false;
    }
    
    updateAddNew(){
        if(this.state.isAddNewSelected){
            this.setState({isAddNewSelected:false});
        }else{
            this.setState({isAddNewSelected:true});
        }
        
    }

    render(){
       
        return(
        <div>
            {
                (flag)?(this.fetchCategories()):(null)
            }
            <SelectCategory isAddNewSelected={this.state.isAddNewSelected} Category={this.state.Category} />
            <AddElement isAddNewSelected={this.state.isAddNewSelected}></AddElement>
            <Button onClick={this.updateAddNew}>Update Add New</Button>
        </div>
        );
    }
}

export default AddCategory;

