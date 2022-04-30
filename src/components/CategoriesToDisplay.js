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

function CategoriesToDisplay () {

    var categoryDetail = [{
        "id":1,
        "title": "Mobile",
        "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    },{
        "id":2,
        "title": "Laptop",
        "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    },{
        "id":3,
        "title":"Televisions",
        "image":"https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    },{
        "id":4,
        "title":"Air Conditioners",
        "image":"https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg"
    }]
    
    const [isOpen, setIsOpen] = React.useState(false);
    var cards = <div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="Mandala" />
    </div>
  
    return (
        <div style={{
            display: 'block', padding: 30
        }}>
            <h5>ReactJS Reactstrap Navbar Component</h5>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        if(categoryDetail){
                            cards = categoryDetail.map(index=>{
                                return(
                                    <NavItem>
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