import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css'
import { SidebarData } from './SidebarData';
function AdminNavbar() {
  return (
    <>
      
        <Navbar bg="dark" variant='dark' expand={false}>
          <Container fluid>
            
            <Navbar.Toggle  />
            <Navbar.Offcanvas
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Admin Panel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{backgroundColor:'black',fontSize:'20px'}}>
                <Nav className="justify-content-start flex-grow-1 pe-3">

                {SidebarData.map((item, index) => {
                return (
                    <Nav.Link  href={item.path} className={item.cName}>{item.icon}<span className='span'> </span>{item.title}</Nav.Link>
                    
                );
                })}
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default AdminNavbar;