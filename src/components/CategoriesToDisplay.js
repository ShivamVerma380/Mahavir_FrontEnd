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

function CategoriesToDisplay ({categoryDetail}) {

    
    
    const [isOpen, setIsOpen] = React.useState(false);
    var cards = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>
  
    var subCategories = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>

    var subSubCategories;

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
                                         subCategories= index.subCategories
                                         
                                        }
                                        {
                                            subSubCategories = subCategories.subSubCategories
                                        }
                                        
                                        {
                                        subCategories.map(subCat=>{
                                            return(
                                                <NavDropdown.Header >ABC</NavDropdown.Header>
                                            )
                                        })  
                                        }
                                        <NavDropdown.Item>XYZ</NavDropdown.Item>                                         
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