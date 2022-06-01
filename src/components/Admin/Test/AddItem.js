import React from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck} from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import axios from "axios";

var SelectedCategory="";

var selectedSubCategory="";
var isSelectedSubCategory=false;

var updatedSubCategoriesArray=[]
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
            </Row>
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
            var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tand3ZHNpcyIsImV4cCI6MTY1NDE1NDY1NywiaWF0IjoxNjU0MDY4MjU3fQ._sfkKaoXbe5L8wNGyt8lG0jeBcXJ2su7UMaORmze4H8"

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