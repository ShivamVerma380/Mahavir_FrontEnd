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
                <Col md={4}>
                    <div>
                    <br></br>
                    <Select placeholder= "Select Category" options={ Categories } />
                    <br></br>
                    <Select placeholder= "Select Sub Category" options={ SubCategories } />
                    <br></br>
                    <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
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
    
    
    

    render() {
        
        
        
        return (
            <div>
            <CategoryComponent/>
            
            
                    
        
            </div>
            
                
            
        );
    }
}

export default AddItem;