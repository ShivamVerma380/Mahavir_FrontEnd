

import React, { useEffect, useState } from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck,Container,Row,Col,Accordion, FloatingLabel} from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import axios from "axios";
import Select from 'react-select';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
// var SelectedCategory="";
// var selectedSubCategory="";
// var isSelectedSubCategory=false;

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
  
//   function Image(props){
//     const [images, setImages] = React.useState([]);
//     const maxNumber = 69;
//     const onChange = (imageList, addUpdateIndex) => {
//       // data for submit
//       console.log(imageList, addUpdateIndex);
//       setImages(imageList);
//     };
//     return(
//         <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <Button variant="flat" size="m"
//               style={isDragging ? { color: "red" } : null}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click or Drop here
//             </Button>
//             &nbsp;
//             <Button variant="flat" size="m" onClick={onImageRemoveAll}>Remove all images</Button>
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image.data_url} alt="" width="100" height="100" />
//                 <div className="image-item__btn-wrapper">
//                   <Button style={{marginRight:'10px'}} variant="flat" size="m" onClick={() => onImageUpdate(index)}>Update</Button>
//                   <Button variant="flat" size="m" onClick={() => onImageRemove(index)}>Remove</Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//     )
//   }


// function CategoryComponent(props){
    
//     const [show,setShow]=useState(false);
    

//     return(

//         <div>

       
// <Container>
            
            
//             <Row>
                
//                 <Col md={4}>
//                     <div>
//                     <br></br>
//                     <Select placeholder= "Select Category" options={ Categories } />
//                     <br></br>
//                     <Select placeholder= "Select Sub Category" options={ SubCategories } />
//                     <br></br>
//                     <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
//                     <br></br>
//                     </div>
//                 </Col>
//                 <Col md={2}>
//                 <br></br>
//                 <Button onClick={() => setShow(true) } variant="flat" size="m">Add Item</Button>
//                 </Col>
//                 <Col md={6}>
//                     {
//                         show? <Form> 
                        
//                             <br></br>
//                             <Form.Group  >
//                           < Form.Control type="text" placeholder="Model No" />
                          
//                         </Form.Group>
//                         <br></br>
//                         <Form.Group  >
//                           <Form.Control type="text" placeholder="Product Name" />
//                         </Form.Group>
//                         <br></br>
//                         <Form.Group  >
//                           <Form.Control type="text" placeholder="Product Highlights" />
//                         </Form.Group>
//                         <br></br>
//                         <Form.Group  >
//                         <Accordion>
//                             <Accordion.Item eventKey="0">
//                                 <Accordion.Header>Upload Images</Accordion.Header>
//                                 <Accordion.Body>
//                                 <Image/>
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                         </Accordion>
//                         {/* <Form.Label>Upload Images</Form.Label>
//                         <Image/> */}
//                         </Form.Group>
//                         <br></br>
//                         <Form.Group  >
//                           <Form.Control type="number" placeholder="Price" />
//                         </Form.Group>
//                         <br></br>
//                         <Form.Group  >
//                           <Form.Control type="number" placeholder="Offer Price" />
//                         </Form.Group>
//                         <br></br>
                        
                         
//                         <Button  variant="flat" size="m">Submit</Button>
//             </Form> : null}
            
//                      </Col>
//             </Row>
//         </Container>
//         </div>

        
//     )
// }





// class AddItem extends React.Component{
    
    
//     render() {
        
        
        
//         return (
//             <div>
//             <CategoryComponent/>
            
//             {/* <ImageUploader
//               withIcon={false}
//               withPreview={true}
//               label=""
//               buttonText="Upload Images"
//               onChange={this.onDrop}
//               imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
//               maxFileSize={1048576}
//               fileSizeError=" file size is too big"
//             /> */}
                    
        
//             </div>
            
                
            
//         );
//     }
// }

// export default AddItem;


var categorySelected="";
var subCategorySelected="";
var subSubCategorySelected="";

function AddItem(){

  // const[data,SetData] = useState([]);

  const[categories,SetCategories] = useState([]);
  const[subCategories,SetSubCategories] = useState([]);
  const[subSubCategories,SetSubSubCategories] = useState([]);

  const[isCategoriesFetched,SetIsCategoryDisplayFetched] = useState(false);
  const[isSubCategoriesFetched,SetIsSubCategoriesFetched] = useState(false);
  const[isSubSubCategoriesFetched,SetIsSubSubCategoriesFetched] = useState(false);



  useEffect(()=>{
    if(!isCategoriesFetched){
      axios.get("http://localhost:8080/get-categories/admin")
      .then(function(response){
        if(response.status==200){
          console.log("response",response.data);
          // SetData(response.data);
          SetCategories(response.data);
          SetIsCategoryDisplayFetched(true);
        }
      }).catch(function(error){
        console.log("error",error);
      })
    }
    
  })



  const handleCategoriesSelect=(e)=>{
    categorySelected = e.target.value;
    categories.map(index=>{
      if(index.categoryName===e.target.value){
        console.log("Inside if....")
        SetSubCategories(index.subCategories);
        var flag = true;
        index.subCategories.map(subCat=>{
          if(subCat.subCategoryName===subCategorySelected){
            SetSubSubCategories(subCat.subSubCategories);
            flag=false;
          }
        })
        if(flag)
          SetSubSubCategories(index.subCategories[0].subSubCategories)
        SetIsSubCategoriesFetched(true);
      }
    })
    // alert(e.target.value);
  }

  const handleSubCategoriesSelect=(e)=>{
    subCategorySelected = e.target.value;
    console.log("SubCat",e.target.value);
    subCategories.map(index=>{
      if(index.subCategoryName===e.target.value){
        console.log("Inside subcat if....")
        SetSubSubCategories(index.subSubCategories);
        console.log("SubsubCat",index.subSubCategories);
        SetIsSubSubCategoriesFetched(true);
      }
    })
  }

  return(
    <div>
    {
      (isCategoriesFetched)?(
        <div>
          <Container>
          <Row>
            <Col md={4}>
              <div>
                <br></br>
                <select onChange={(e)=>handleCategoriesSelect(e)} >
                {
                  categories.map(cat=>{
                    return(
                      <option id={cat.categoryName} value={cat.categoryName} >{cat.categoryName}</option>
                    )
                  })
                }  
                </select>
                {/* <Select placeholder= "Select Category" value={ categories } options={categories}/> */}
                <br></br>
                {/* <Select placeholder= "Select Sub Category" options={ SubCategories } />
                <br></br>
                <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
                <br></br> */}
              </div>

            </Col>
          </Row>
          </Container>
        </div>
      ):(
        null
      )

    }
    {
      (isSubCategoriesFetched)?(
        <div>
          <Container>
          <Row>
            <Col md={4}>
              <div>
                <br></br>
                <select  onChange={(e)=>handleSubCategoriesSelect(e)}>
                {
                  subCategories.map(subCat=>{
                    return(
                      <option id={subCat.subCategoryName} value={subCat.subCategoryName} >{subCat.subCategoryName}</option>
                    )
                  })
                }  
                </select>
                {/* <Select placeholder= "Select Category" value={ categories } options={categories}/> */}
                <br></br>
                {/* <Select placeholder= "Select Sub Category" options={ SubCategories } />
                <br></br>
                <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
                <br></br> */}
              </div>

            </Col>
          </Row>
          </Container>
        </div>
      ):(
        null
      )
    }
    {
      (isSubSubCategoriesFetched)?(
        <div>
          <Container>
          <Row>
            <Col md={4}>
              <div>
                <br></br>
                <select  >
                {
                  subSubCategories.map(subSubCat=>{
                    return(
                      <option id={subSubCat} value={subSubCat} >{subSubCat}</option>
                    )
                  })
                }  
                </select>
                {/* <Select placeholder= "Select Category" value={ categories } options={categories}/> */}
                <br></br>
                {/* <Select placeholder= "Select Sub Category" options={ SubCategories } />
                <br></br>
                <Select placeholder= "Select Sub Category" options={ SubSubCategories } />
                <br></br> */}
              </div>

            </Col>
          </Row>
          </Container>
        </div>
      ):(
        null
      )
    }
    </div>
  );
}




export default AddItem;