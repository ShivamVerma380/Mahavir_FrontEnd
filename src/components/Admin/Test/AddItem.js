
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
var imageListArr=[];
var file,file1,file2,file3,file4;

function Image(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log("imageList",imageList.data_url);
    // console.log("imageList",imageList.target.files[0]);
    console.log("addUpdateIndex",addUpdateIndex);
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    imageListArr = imageList;
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


  const handleImg=(e)=>{
    file = e.target.files[0];
  }
  const handleImg1=(e)=>{
    file1 = e.target.files[0];
  }
  const handleImg2=(e)=>{
    file2 = e.target.files[0];
  }
  const handleImg3=(e)=>{
    file3 = e.target.files[0];
  }
  const handleImg4=(e)=>{
    file4 = e.target.files[0];
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
                        {/* <Image /> */}
                        <input type="file" name="img1" onChange={(e)=>handleImg(e)}/>
                        <input type = "file" name="img2" onChange={(e)=>handleImg1(e)}/>
                        <input type = "file" name="img3" onChange={(e)=>handleImg2(e)}/>
                        <input type = "file" name="img4" onChange={(e)=>handleImg3(e)}/>
                        <input type = "file" name="img5" onChange={(e)=>handleImg4(e)}/>
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
    console.log("Model No",modelNo);
    console.log("Product Name",productName);
    console.log("Product Highlights",productHighlights);
    console.log("Price",price);
    console.log("OfferPrice",offerPrice);
    console.log("Selected Category",SelectedCategory); 
    console.log("images",imageListArr)

    const image0 = {
      uri: "https://d2xamzlzrdbdbn.cloudfront.net/products/65013798-5c87-4029-8fd9-1572599896b0.jpg",
      type: 'image/jpeg',
      name: 'Img1.jpg'
    }

    // const image1 = {
    //   uri: imageListArr[1].data_url,
    //   type: 'image/jpeg',
    //   name: 'Img2.jpg'
    // }

    // const image2 = {
    //   uri: imageListArr[2].data_url,
    //   type: 'image/jpeg',
    //   name: 'Img3.jpg'
    // }

    // const image3 = {
    //   uri: imageListArr[3].data_url,
    //   type: 'image/jpeg',
    //   name: 'Img4.jpg'
    // }

    // const image4 = {
    //   uri: imageListArr[4].data_url,
    //   type: 'image/jpeg',
    //   name: 'Img4.jpg'
    // }

    // console.log("image1",image0);

    var form_data_body={
      "modelNumber":modelNo,
      "productName":productName,
      "productHighlights":productHighlights,
      "productPrice":price,
      "offerPrice":offerPrice,
      "category":SelectedCategory,
      "productImage1":  file,
      "productImage2": file1,
      "productImage3": file2,
      "productImage4": file3,
      "productImage5": file4
    }

    axios.post("http://localhost:8080/add-product",form_data_body,{
      headers:{
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImV4cCI6MTY1NTU4MDY4MywiaWF0IjoxNjU1NDgwNjgzfQ.e_PWiAQ8yZV2FU6ChW1krAInQ4eLIWiKWrWnZuBlVY287vcIrqVVKC4gM1XxSMGCP9x-sgAvZNq0ArWfRPnXgw",
        "Content-Type":"multipart/form-data"
      },
      mode:"no-cors"
    }).then(function(response){
      console.log(response.data);
    }).catch(function(error){
      console.log(error)
    })
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