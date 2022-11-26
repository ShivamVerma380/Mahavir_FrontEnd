// import React , {useState} from 'react';
// import { Accordion } from 'react-bootstrap';
// import AdminHeader from "./AdminHeader";
// import Navbar from "./Sidebar/Navbar";
// import {FormControl,Button,Form,NavDropdown, Nav, FormCheck,Container,Row,Col} from 'react-bootstrap';
// const Categories = [
//     { label: "TV", value: 1 },
//     { label: "Mobile", value: 2 },
    
//   ];
//   const SubCategories = [
//     { label: "Type", value: 1 },
//     { label: "Brand", value: 2 },
    
//   ];
//   const SubSubCategories = [
//     { label: "Apple", value: 1 },
//     { label: "Samsung", value: 2 },
    
//   ];
// const AddNew = () =>
// {
    
// const [show,setShow]=useState(false);
//     return(
//         <div>
//             <AdminHeader/>
//             <Navbar/>
                    
//         <Container>

//                 <Accordion>
//                     <Row>
//                         <Col md={2}>
//                         </Col>
//                         <Col md={10}>
//                             <br></br>
//                         <Accordion.Item eventKey="0">
//                         <Accordion.Header>Add New Category</Accordion.Header>
//                         <Accordion.Body>
//                         <Form>
//                             <br></br>
//                             <Form.Group>
//                             <Form.Control type="text" placeholder="Category Name" /></Form.Group>
//                             <br></br><Button  variant="flat" size="m">Submit</Button>
//                         </Form>
//                         </Accordion.Body>
//                     </Accordion.Item>
//                     <Accordion.Item eventKey="1">
//                         <Accordion.Header>Add New Sub Category</Accordion.Header>
//                         <Accordion.Body>
//                         <Form>
//                             <br></br>
//                             <Select options={ SubCategories } />
//                             <br></br>
//                             <Form.Group>
//                             <Form.Control type="text" placeholder="Enter Category Name" /></Form.Group>
//                             <br></br><Button  variant="flat" size="m">Submit</Button>
//                         </Form>
//                         </Accordion.Body>
//                     </Accordion.Item>
//                     <Accordion.Item eventKey="2">
//                         <Accordion.Header>Add New Sub Sub Category</Accordion.Header>
//                         <Accordion.Body>
//                         <Form>
//                             <br></br>
//                             <Select options={ Categories } />
//                             <br></br>
//                             <Select options={ SubCategories } />
//                             <br></br>
//                             <Form.Group>
//                             <Form.Control type="text" placeholder="Enter Sub Sub Category Name" /></Form.Group>
//                             <br></br><Button  variant="flat" size="m">Submit</Button>
//                         </Form>
//                         </Accordion.Body>
//                     </Accordion.Item>
//                         </Col>
//                     </Row>
                    
//                 </Accordion>
                    
                
            
//         </Container>
//         </div>
//     )
// }
// export default AddNew;