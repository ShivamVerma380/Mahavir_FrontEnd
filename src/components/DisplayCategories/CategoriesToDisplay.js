import React  from "react";
import Button from '@mui/material/Button';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    NavItem
} from 'react-bootstrap';

import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css"

function CategoriesToDisplay ({categoryDetail}) {

    var modelNumbers=[];

    var navigate = useNavigate();

    const [isOpen, setIsOpen] = React.useState(false);
    var cards = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
    </div>
  
    function handleSubSubCategoriesClick(category,subCategory,subSubCategory,modelNumber){
        alert(modelNumber);
        localStorage.setItem("Category",category);
        localStorage.setItem("SubCategory",subCategory);
        localStorage.setItem("SubSubCategory",subSubCategory);
        localStorage.setItem("Model Number",modelNumber);
        console.log(localStorage.getItem("Category"));
        console.log(localStorage.getItem("SubCategory"));
        console.log(localStorage.getItem("SubSubCategory"));
        console.log(localStorage.getItem("Model Number"));
        navigate("/"+category+"/"+subCategory+"/"+subSubCategory);
    }

    return (
        <div style={{
            display: 'block'
        }}>
            <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  style={{marginLeft:50,marginRight:50}} className="me-auto">
                        {
                            
                            console.log("CategoryDetail",categoryDetail)
                        }
                        {
                            
                            cards = categoryDetail.map(index=>{
                                return(
                                    <Nav.Link style={{margin:10}}>
                                        {/* <Button variant="text"><img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/> <span> </span>{index.category}</Button> */}
                                        {/*<img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/>*/}
                                        <NavDropdown style={{color:"black"}} title={index.category}> 
                                        {
                                              index.subCategories.map(subCat=>{
                                                return(
                                                    <NavDropdown id="drop" style={{ color: "#00000" }} title={subCat.subCategoryName}>
                                                        {
                                                            subCat.subSubCategories.map(subSubCategories=>{
                                                                return(
                                                                    
                                                                    <NavDropdown.Item  onClick={()=>handleSubSubCategoriesClick(index.category,subCat.subCategoryName,subSubCategories.subSubCategoryName,subSubCategories.modelNumber)}>{subSubCategories.subSubCategoryName}</NavDropdown.Item>
                                                                    
                                                                );
                                                            })
                                                        }
                                                       
                                                    </NavDropdown>
                                                );
                                                 
                                            })
                                        }
                                                                                
                                        </NavDropdown>
                                      
                                        
                                    </Nav.Link>    
                                  
                                )
                            })
                        }
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div >
    );
}

export default CategoriesToDisplay;