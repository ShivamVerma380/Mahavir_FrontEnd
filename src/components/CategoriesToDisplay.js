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
            display: 'block', padding: 30
        }}>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {
                            cards = categoryDetail.map(index=>{
                                return(
                                    <NavItem style={{margin:20}}>
                                        <img src={index.image} alt={index.title} className="logo_mahavir" /> {index.title}
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