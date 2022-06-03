import React from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck} from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import axios from "axios";

var SelectedCategory="";


function CategoryComponent(props){
    
    return(
        <div>
            <Row>
                <Col md={2}>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Nav.Link href="#action1"><i class="fa fa-search icon" ></i></Nav.Link> 
                </Form>
                </Col>
                <Col md={2}>
                    <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Nav.Link href="#action1"><i class="fa fa-search icon" ></i></Nav.Link> 
                </Form>
                </Col>
            </Row>
        </div>
    )
}


function CategoriesToDisplay(){
    
}

class AddItem extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            isCategoriesFetched:false,
            Category:[],
            isSubCategoriesFetched:false,
            SubCategory:[],
            
        }

    
    }

    fetchCategories(){
        var updatedCategories=[];
        axios.get("http://localhost:8080/get-categories")
            .then(function(response){
                console.log(response);
                if(response.status==200){
                    console.log(response.data.category);
                    var responseArray = response.data;
                    responseArray.map(index=>{
                        console.log(index.category);
                        updatedCategories.push(index.category);
                    })
                    console.log("updatedCategories",updatedCategories);
                }
            }).catch(function(error){
                console.log("error:",error);
            })
        this.setState({Category:updatedCategories,isCategoriesFetched:true});
    }

    handleFetchSubCategories(){
        var updatedSubCategoriesArray=[]
        if(SelectedCategory===""){
            alert("Please select a Category first")
        }else{
            var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmUiLCJleHAiOjE2NTQzMzY5ODUsImlhdCI6MTY1NDI1MDU4NX0.D9mBqXow48LegJBjCZfrRk7jWnmU8P715w-eM-GI_kE"

            axios({
            method:"get",
            url:"http://localhost:8080/get-sub-categories/"+SelectedCategory,
            headers:{
                "Authorization":"Bearer "+token,
            }
            }).then(function (response){
            console.log(response.data);
            updatedSubCategoriesArray = response.data;       
            console.log("subCategoriesArray:",updatedSubCategoriesArray);
            this.setState({isSubCategoriesFetched:true.valueOf,SubCategory:updatedSubCategoriesArray})
            }).catch(function(error){
                console.log("Error:",error);
            })
            alert(SelectedCategory);
        }
        

    }

    CategorySelectedEvent = e => {
        const { name, value } = e.target;
    
        

        console.log("value",value);
        
        SelectedCategory = value;
      };


    

    render() {
        if(!this.state.isCategoriesFetched){
            this.fetchCategories();
        }
        // this.fetchCategories();
        return (
            <div>
            <CategoryComponent/>
            {  
                (this.state.isCategoriesFetched)?(
                          this.state.Category.map(index=>{
                            return(
                                
                                <FormCheck
                                    type="radio"
                                    name="myGroupName"
                                    label={index}
                                    value={index}
                                    onChange={this.CategorySelectedEvent}
                                />
                            );
                          })
                ):(
                    null
                )

            }
            <br></br>
            <br></br>
            <Button onClick={this.handleFetchSubCategories}>FetchSubCategories</Button>
            <br></br>
            <br></br>
            <Button>Add New</Button>

            </div>
            
                
            
        );
    }
}

export default AddItem;