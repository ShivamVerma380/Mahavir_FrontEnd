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

    const [show, setShow] = React.useState(false);
    const showDropdown = (e)=>{
        // console.log(e.target.value);
        setShow(!show);
        
    }
    const hideDropdown = e => {
        // console.log(e.target.value);
        setShow(false);
    }
    
    const [isOpen, setIsOpen] = React.useState(false);
    var cards = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>
    
    var [subCategories,setSubCategories] = React.useState();

    const getSubCategories=()=>{
        subCategories.map(subCat=>{
            console.log(subCat.subCategoryName);
            return(
                <div>
                <NavDropdown.Header >ABC</NavDropdown.Header>
                <NavDropdown.Item>XYZ</NavDropdown.Item>
                </div>
            )
        })
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
                            cards = categoryDetail.map(index=>{
                            setSubCategories(index.subCategories);

                                return(
                                    <NavItem style={{margin:10}}>
                                        {/* <Button variant="text" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}><img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/> <span> </span>{index.category}</Button> */}
                                        <img src={"data:image/png;base64," +index.category_image.data} alt={index.category} className="category-image"/>
                                        {/* <NavDropdown title={index.category}  show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>  */}
                                        <NavDropdown title={index.category}>
                                        {getSubCategories()}

                                            
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