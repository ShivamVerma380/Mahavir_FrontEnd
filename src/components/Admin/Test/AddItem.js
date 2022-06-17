
import React, { useEffect, useState } from "react";
import { Navbar, FormControl, Button, Form, NavDropdown, Nav, FormCheck, Container, Row, Col, Accordion, FloatingLabel, Dropdown } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import axios from "axios";
import Select from 'react-select';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

var SelectedCategory = "";
var modelNo = "";
var productName = "";
var productHighlights="";
var price="";
var offerPrice="";


function Image(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
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
                <Button style={{ marginRight: '10px' }} variant="flat" size="m" onClick={() => onImageUpdate(index)}>Update</Button>
                <Button variant="flat" size="m" onClick={() => onImageRemove(index)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )
}


function CategoryComponent(props) {

  const [show, setShow] = useState(true);

  const inputModelNoevent=(e)=>{
    modelNo = e.target.value;
    // console.log("modelno",modelNo);
  }


  const inputProductNameEvent=(e)=>{
    productName = e.target.value;
  }

  const inputProductHighlightsEvent=(e)=>{
    productHighlights = e.target.value;
  }

  const inputPriceEvent=(e)=>{
    price = e.target.value;
  }

  const inputOfferPriceEvent=(e)=>{
    offerPrice = e.target.value;
  }


  return (

    <div>


      <Container>


        <Row>

          <Col md={6}>
            {
              show ? <Form>

                <br></br>
                <Form.Group  >
                  < Form.Control type="text" placeholder="Model No" onChange={inputModelNoevent}/>
                </Form.Group>
                <br></br>
                <Form.Group  >
                  <Form.Control type="text" placeholder="Product Name" onChange={inputProductNameEvent} />
                </Form.Group>
                <br></br>
                <Form.Group  >
                  <Form.Control type="text" placeholder="Product Highlights" onChange={inputProductHighlightsEvent}/>
                </Form.Group>
                <br></br>
                <Form.Group  >
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Upload Images</Accordion.Header>
                      <Accordion.Body>
                        <Image />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* <Form.Label>Upload Images</Form.Label>
                        <Image/> */}
                </Form.Group>
                <br></br>
                <Form.Group  >
                  <Form.Control type="number" placeholder="Price" onChange={inputPriceEvent} />
                </Form.Group>
                <br></br>
                <Form.Group  >
                  <Form.Control type="number" placeholder="Offer Price"  onChange={inputOfferPriceEvent}/>
                </Form.Group>
                <br></br>



              </Form> : null}

          </Col>
        </Row>
      </Container>
    </div>


  )
}







function AddItem() {

  const [isCategoriesFetched, SetIsCategoriesFetched] = useState(false);
  const [Categories, SetCategories] = useState([]);

  useEffect(() => {
    if (!isCategoriesFetched) {
      axios.get("http://localhost:8080/get-categories/admin")
        .then(function (response) {
          if (response.status == 200) {
            SetCategories(response.data);
            SetIsCategoriesFetched(true);
            // this.setState({Categories:response.data,isCategoriesFetched:true});
          }
        }).catch(function (error) {
          console.log("error", error);
        })
    }

  })



  const handleItemChange = (e) => {
    console.log(e.target.value)
    SelectedCategory = e.target.value;
  }

  function handleSaveButton() {

  }



  return (
    <div>
      <CategoryComponent />


      <div>
        <Container>
          <Row>
            <Col md={6}>
              <select onChange={(e) => handleItemChange(e)}>
                <option>Choose category...</option>
                {
                  (isCategoriesFetched) ? (
                    Categories.map(index => {
                      return (
                        <option id={index.categoryName} value={index.categoryName}>{index.categoryName}</option>
                      );
                    })
                  ) : (
                    null
                  )
                }
              </select>
              <br></br>
              <br></br>
              <Button variant="flat" size="m" onClick={handleSaveButton}>Save</Button>
            </Col>
          </Row>
        </Container>
      </div>

    </div>



  );

}

export default AddItem;