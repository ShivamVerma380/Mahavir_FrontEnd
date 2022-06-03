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
} from 'reactstrap';

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
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{marginLeft:50,marginRight:50}} className="mr-auto" navbar>
                        {
                            
                            console.log("CategoryDetail",categoryDetail)
                        }
                        {
                            
                            cards = categoryDetail.map(index=>{
                                return(
                                    <NavItem style={{margin:10}}>
                                        {/* <Button variant="text"><img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/> <span> </span>{index.category}</Button> */}
                                        <img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/>
                                        <NavDropdown title={index.category}> 
                                        {
                                              index.subCategories.map(subCat=>{
                                                return(
                                                    <NavDropdown title={subCat.subCategoryName}>
                                                        {
                                                            subCat.subSubCategories.map(subSubCategories=>{
                                                                return(
                                                                    <NavDropdown.Item onClick={()=>handleSubSubCategoriesClick(index.category,subCat.subCategoryName,subSubCategories.subSubCategoryName,subSubCategories.modelNumber)}>{subSubCategories.subSubCategoryName}</NavDropdown.Item>
                                                                );
                                                            })
                                                        }
                                                    </NavDropdown>
                                                );
                                                 
                                            })
                                        }
                                                                                
                                        </NavDropdown>
                                    </NavItem>      
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default CategoriesToDisplay;