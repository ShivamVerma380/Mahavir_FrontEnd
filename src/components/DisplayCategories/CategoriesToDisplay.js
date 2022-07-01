import React from "react";
import Button from '@mui/material/Button';

import { Nav, Navbar, FormControl, Container, NavLink, Form, NavDropdown, Offcanvas, ListGroup } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import "./CategoriesToDisplay.css"

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
    console.log(localStorage.getItem("Category"));
    console.log(localStorage.getItem("SubCategory"));
    console.log(localStorage.getItem("SubSubCategory"));
    console.log(localStorage.getItem("Model Number"));
    navigate("/" + category + "/" + subCategory + "/" + subSubCategory);
  }

  return (
    <div className="Category" >

      {['sm'].map((expand) => (

        <Navbar style={{ zIndex: '0' }} key={expand} bg="dark" expand={expand} variant="dark">
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
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  {

                    console.log("CategoryDetail", categoryDetail)
                  }
                  {

                    cards = categoryDetail.map(index => {
                      return (

                        <Nav.Link style={{ margin: 10 }}>
                          {/* <Button variant="text"><img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/> <span> </span>{index.category}</Button> */}
                          {/* {<img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/>} */}
                          <img src={'data:image/jpg;base64,'+ index.category_image.data} className="categorymage" style={{height:50,borderRadius:50}}></img>
                          <NavDropdown id="drop " style={{ color: "black" }} title={index.category} renderMenuOnMount={true}>
                            {
                              index.subCategories.map(subCat => {
                                return (
                                  <div style={{ display: 'block', padding: 10 }}>
                                    <h6>{subCat.subCategoryName}</h6>
                                    <ListGroup>
                                      {/*  <NavDropdown id="drop" style={{ color: "#00000" }} title={subCat.subCategoryName}>*/}
                                      {
                                        subCat.subSubCategories.map(subSubCategories => {
                                          return (

                                            <ListGroup.Item onClick={() => handleSubSubCategoriesClick(index.category, subCat.subCategoryName, subSubCategories.subSubCategoryName, subSubCategories.modelNumber)}>{subSubCategories.subSubCategoryName}</ListGroup.Item>

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