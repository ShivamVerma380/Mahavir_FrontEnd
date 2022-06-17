import React, { useEffect, useState } from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck,Container,Row,Col,Accordion} from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import axios from "axios";
import Select from 'react-select';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
var SelectedCategory="";
var selectedSubCategory="";
var isSelectedSubCategory=false;

const Categories = [
    { label: "TV", value: 1 },
    { label: "Mobile", value: 2 },
    
  ];
  const SubCategories = [
    { label: "Type", value: 1 },
    { label: "Brand", value: 2 },
    
  ];
  const SubSubCategories = [
    { label: "Apple", value: 1 },
    { label: "Samsung", value: 2 },
    
  ];
  
  function Image(props){
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    return(
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button variant="flat" size="m"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            <Button variant="flat" size="m" onClick={onImageRemoveAll}>Remove all images</Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" height="100" />
                <div className="image-item__btn-wrapper">
                  <Button style={{marginRight:'10px'}} variant="flat" size="m" onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button variant="flat" size="m" onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    )
  }


function CategoryComponent(props){
    
    const [show,setShow]=useState(false);
    

    return(

        <div>

       
<Container>
            
            
            <Row>
                
                <Col md={4}>
                    <div>
                    <br></br>
                    <Select placeholder= "Select Category" options={ Categories } />
                    <br></br>
                    <Select placeholder= "Select Sub Category" options={ SubCategories } />
                    <br></br>
                    <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
                    <br></br>
                    </div>
                </Col>
                <Col md={2}>
                <br></br>
                <Button onClick={() => setShow(true) } variant="flat" size="m">Add Item</Button>
                </Col>
                <Col md={6}>
                    {
                        show? <Form> 
                        
                            <br></br>
                            <Form.Group  >
                          < Form.Control type="text" placeholder="Model No" />
                          
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                          <Form.Control type="text" placeholder="Product Name" />
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                          <Form.Control type="text" placeholder="Product Highlights" />
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Upload Images</Accordion.Header>
                                <Accordion.Body>
                                <Image/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* <Form.Label>Upload Images</Form.Label>
                        <Image/> */}
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                          <Form.Control type="number" placeholder="Price" />
                        </Form.Group>
                        <br></br>
                        <Form.Group  >
                          <Form.Control type="number" placeholder="Offer Price" />
                        </Form.Group>
                        <br></br>
                        
                         
                        <Button  variant="flat" size="m">Submit</Button>
            </Form> : null}
            
                     </Col>
            </Row>
        </Container>
        </div>

        
    )
}





class AddItem extends React.Component{
    
    
    render() {
        
        
        
        return (
            <div>
            <CategoryComponent/>
            
            {/* <ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              buttonText="Upload Images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            /> */}
                    
        
            </div>
            
                
            
        );
    }
}

export default AddItem;