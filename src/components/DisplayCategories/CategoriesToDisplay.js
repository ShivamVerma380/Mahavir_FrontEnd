import React from "react";
import Button from '@mui/material/Button';

import { Nav, Navbar, FormControl, Container, NavLink, Form, NavDropdown, Offcanvas, ListGroup ,Image} from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import "./CategoriesToDisplay.css"
import { slide as Menu } from 'react-burger-menu'

function CategoriesToDisplay({ categoryDetail }) {



  var modelNumbers = [];

  var navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  var cards = <div>
    <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="Mandala" />
  </div>

  function handleSubSubCategoriesClick(category, subCategory, subSubCategory, modelNumber) {
    alert(modelNumber);
    localStorage.setItem("Category", category);
    localStorage.setItem("SubCategory", subCategory);
    localStorage.setItem("SubSubCategory", subSubCategory);

    localStorage.setItem("Model Number", modelNumber);
    console.log("Cat",localStorage.getItem("Category"));
    console.log("SubCat",localStorage.getItem("SubCategory"));
    console.log("SubSubCat",localStorage.getItem("SubSubCategory"));
    console.log(localStorage.getItem("Model Number"));
    navigate("/" + category + "/" + subCategory + "/" + subSubCategory);
  }

  return (
    <div className="Category" >
      {/* style={{marginTop:'92px'}}  */}

      {['sm'].map((expand) => (

        <Navbar className="cat_nav" style={{background:'#2b2d42', zIndex: '1', height:60}} bg="dark" key={expand}  expand={expand} variant="dark">
          <Container fluid>
          
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CATEGORIES
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {

                    console.log("CategoryDetail", categoryDetail)
                  }
                  {

                    cards = categoryDetail.map(index => {
                      return (

                        <Nav.Link >
                          {/* <Button variant="text"><img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/> <span> </span>{index.category}</Button> */}
                          {/* {<img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/>} */}
                          <Image thumbnail='true'  src={index.category_image}className="categorymage" style={{height:50,borderRadius:50,filter: 'invert(1)'}}></Image>
                          
                          <NavDropdown className="catdropdown" style={{ color: "white",fontSize:'15px' }} title={index.category} renderMenuOnMount={true}>
                            {
                              index.subCategories.map(subCat => {
                                return (
                                  <div style={{ display: 'block', padding: 10 ,width:'200px'}}>
                                    <h5>{subCat.subCategoryName}</h5>
                                    <ListGroup>
                                      {/*  <NavDropdown id="drop" style={{ color: "#00000" }} title={subCat.subCategoryName}>*/}
                                      {
                                        subCat.subSubCategories.map(subSubCategories => {
                                          return (

                                            <ListGroup.Item style={{marginTop:'4px'}} onClick={() => handleSubSubCategoriesClick(index.category, subCat.subCategoryName, subSubCategories.subSubCategoryName, subSubCategories.modelNumber)}>{subSubCategories.subSubCategoryName}</ListGroup.Item>

                                          );
                                        })
                                      }
                                    </ListGroup>
                                  </div>


                                );

                              })
                            }

                          </NavDropdown>


                        </Nav.Link>

                      )
                    })
                  }
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}
    </div >
  );
}

export default CategoriesToDisplay;