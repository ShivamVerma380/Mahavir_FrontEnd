import React  from "react";

import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    NavItem
} from 'reactstrap';

function CategoriesToDisplay ({categoryDetail}) {

    
    
    const [isOpen, setIsOpen] = React.useState(false);
    var cards = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>
  
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
                                return(
                                    <NavItem style={{margin:10, textAlign:"left"  }}>
                                        <img src={index.image} alt={index.title} className="category-image"/> {index.title}
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