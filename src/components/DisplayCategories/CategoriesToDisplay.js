import React from "react";

import { Nav, Navbar,  Container,NavDropdown, Offcanvas, ListGroup ,Image} from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import "./CategoriesToDisplay.css"

function CategoriesToDisplay({ categoryDetail }) {
  var navigate = useNavigate();

  var cards = <div>
    <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="Mandala" />
  </div>

  function handleSubSubCategoriesClick(category, subCategory, subSubCategory, modelNumber) {
    localStorage.setItem("Category", category);
    localStorage.setItem("SubCategory", subCategory);
    localStorage.setItem("SubSubCategory", subSubCategory);

    localStorage.setItem("Model Number", modelNumber);
    
    navigate("/" + category + "/" + subCategory + "/" + subSubCategory);
  }

  return (
    <div className="Category" >

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

                    cards = categoryDetail.map(index => {
                      return (

                        <Nav.Link >
                          <Image style={{background:"none"}} thumbnail='true'  src={index.category_image} className="categoryImage" ></Image>
                          
                          <NavDropdown right className="catdropdown"  title={index.category} renderMenuOnMount={true}>
                            {
                              index.subCategories.map(subCat => {
                                return (
                                  <div style={{ display: 'block', padding: 10 ,width:'max-content'}}>
                                    <h5>{subCat.subCategoryName}</h5>
                                    <ListGroup >
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