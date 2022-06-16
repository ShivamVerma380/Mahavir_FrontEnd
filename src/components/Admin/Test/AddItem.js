import React, { useEffect, useState } from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck,Container,Row,Col} from 'react-bootstrap';

import axios from "axios";
import Select from 'react-select';
var SelectedCategory="";
var selectedSubCategory="";
var isSelectedSubCategory=false;

const Categories = [
    { label: "TV", value: 1 },
    { label: "Mobile", value: 2 },
    
  ];
  const SubCategories = [
    { label: "Type", value: 1 },
    { label: "Brand", value: 2 },
    
  ];
  const SubSubCategories = [
    { label: "Apple", value: 1 },
    { label: "Samsung", value: 2 },
    
  ];
var updatedSubCategoriesArray=[]





function CategoryComponent(props){
    
const [show,setShow]=useState(false);
    return(

        <div>

        
<Container>
            <Row>
                <Col md={6}>
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

            
            <Row>
                <Col md={4}>
                    <div>
                    <br></br>
                    <Select options={ Categories } />
                    <br></br>
                    <Select options={ SubCategories } />
                    <br></br>
                    <Select options={ SubSubCategories } />
                    <br></br>
                    </div>
                </Col>
                <Col md={2}>
                <br></br>
                <Button onClick={() => setShow(true) } variant="flat" size="m">Add Item</Button>
                </Col>
                <Col md={6}>
                    {
                        show? <Form>
                            <br></br>
                            <Form.Group  >
                          <Form.Control type="text" placeholder="Model No" />
                          
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                          <Form.Control type="text" placeholder="Product Name" />
                          
                        </Form.Group>
                        <br></br>
                         
                        <Button  variant="flat" size="m">Submit</Button>
                      </Form>
                     : null
                    }
                </Col>
            </Row>
        </Container>
        </div>

        
    )
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

        this.fetchCategories = this.fetchCategories.bind(this);
        this.handleFetchSubCategories= this.handleFetchSubCategories.bind(this);
    
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
        console.log("Categories",this.state.Category)
    }

    handleFetchSubCategories(){
        
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
            console.log(response);
            if(response.status==200){
                var responseArray = response.data;
                responseArray.map(index=>{
                    updatedSubCategoriesArray.push(index);       
                })
                console.log("updatedSubCategories",updatedSubCategoriesArray);
                isSelectedSubCategory=true;
            }   
            }).catch(function(error){
                console.log("Error:",error);
            })
            //alert(SelectedCategory);
            this.setState({SubCategory:updatedSubCategoriesArray,isSubCategoriesFetched:true})
            
            console.log("SuBCategoriesFetched",this.state.SubCategory)   
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
            <br></br>
            <br></br>
           
            {
                (isSelectedSubCategory)?(
                    
                    
                    updatedSubCategoriesArray.map(index=>{
                        
                        return(
                            
                            <FormCheck
                                type="radio"
                                name="myGroupName"
                                label={index}
                                value={index}
                                onChange={this.CategorySelectedEvent}
                            />
                        );
                    })):(console.log("In null"))
            }

                    
        
            </div>
            
                
            
        );
    }
}

export default AddItem;