import React from 'react';
import ReactDOM from 'react-dom'
import { Button , Col,Row,Container} from 'react-bootstrap';
import  { useState } from 'react';
import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
import axios from 'axios';
import { getCookie } from '../../Cookies';
import url from '../../../Uri';
const UploadExcel = () => {
  const [selectedproductFile, setSelectedProductFile] = useState();
  const [selectedcategoryFile, setSelectedCategoryFile] = useState();
  const [selectedfilterFile, setSelectedFilterFile] = useState();
  const [selectedbrandsFile, setSelectedBrandsFile] = useState();
  const [selectedposterFile, setSelectedPosterFile] = useState();
  const [isProductFilePicked, setIsProductFilePicked] = useState(false);
  const [isCategoryFilePicked, setIsCategoryFilePicked] = useState(false);
  const [isFilterFilePicked, setIsFilterFilePicked] = useState(false);
  const [isBrandsFilePicked, setIsBrandsFilePicked] = useState(false);
  const [isPosterFilePicked, setIsPosterFilePicked] = useState(false);

   var token = getCookie("jwtToken");

  const ProductFileHandler = (event) => {
    setSelectedProductFile(event.target.files[0]);
    setIsProductFilePicked(true);
  };

  const handleProductsFileSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedproductFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post(url+"/excel/products",formData,{
      headers:{
        "Authorization": "Bearer "+token
      },
      
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log("Error in products");
      // toast.warn("Error In Fetching orders",error)

    })


  };

  const CategoryFileHandler = (event) => {
    setSelectedCategoryFile(event.target.files[0]);
    setIsCategoryFilePicked(true);
  };

  const handleCategoryFileSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedcategoryFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post(url+"/excel/Categories",formData,{
      headers:{
        "Authorization": "Bearer "+token
      },
      
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log("Error in Categories:",error);
      // toast.warn("Error In Fetching orders",error)

    })


  };

  const FilterFileHandler = (event) => {
    setSelectedFilterFile(event.target.files[0]);
    setIsFilterFilePicked(true);
  };

  const handleFilterFileSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedfilterFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post(url+"/excel/filters",formData,{
      headers:{
        "Authorization": "Bearer "+token
      },
      
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log("Error in filters:",error)
    })


  };

  const BrandFileHandler = (event) => {
    setSelectedBrandsFile(event.target.files[0]);
    setIsBrandsFilePicked(true);
  };

  const handleBrandFileSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedbrandsFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post(url+"/excel/shopByBrands",formData,{
      headers:{
        "Authorization": "Bearer "+token
      },
      
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log("Error in shopByBrands:",error)
    })


  };

  const PosterFileHandler = (event) => {
    setSelectedPosterFile(event.target.files[0]);
    setIsPosterFilePicked(true);
  };

  const handlePosterFileSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedposterFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post(url+"/excel/offerposters",formData,{
      headers:{
        "Authorization": "Bearer "+token
      },
      
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log("error in offerposters:",error)
    })


  };


  return (
    <div>
      {/* <AdminHeader/> */}
        <AdminNavbar/>
        <Container className="uploadexcel" style={{padding:'50px'}}>
          <Row>
            <Col sm={6}>
            <h5 >Upload Your Products Excel Datasheet here</h5>
          
            <input  type="file" name="file" accept=".xlsx, .xls, .csv" onChange={ProductFileHandler} />
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handleProductsFileSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isProductFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedproductFile.name}</p>
                <p ><b>Filetype:</b> {selectedproductFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedproductFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedproductFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
      
            </Col>
          </Row>
              <hr></hr>
          <Row>
            <Col sm={6}>
            <h5 >Upload Your Categories Datasheet here</h5>
          
            <input  type="file" name="categoriesfile" accept=".xlsx, .xls, .csv" onChange={CategoryFileHandler}/>
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handleCategoryFileSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isCategoryFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedcategoryFile.name}</p>
                <p ><b>Filetype:</b> {selectedcategoryFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedcategoryFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedcategoryFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
      
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col sm={6}>
            <h5 >Upload filter criterias </h5>
         
            <input  type="file" name="filtercriteria" accept=".xlsx, .xls, .csv" onChange={FilterFileHandler}/>
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handleFilterFileSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilterFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedfilterFile.name}</p>
                <p ><b>Filetype:</b> {selectedfilterFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedfilterFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedfilterFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
      
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col sm={6}>
            <h5 >Upload shop by brands </h5>
          
            <input  type="file" name="shopbybrands" accept=".xlsx, .xls, .csv" onChange={BrandFileHandler}/>
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handleBrandFileSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isBrandsFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedbrandsFile.name}</p>
                <p ><b>Filetype:</b> {selectedbrandsFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedbrandsFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedbrandsFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
      
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col sm={6}>
            <h5 >Upload mega mini posters </h5>
            
            <input  type="file" name="megaminiposters" accept=".xlsx, .xls, .csv" onChange={PosterFileHandler}/>
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handlePosterFileSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isPosterFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedposterFile.name}</p>
                <p ><b>Filetype:</b> {selectedposterFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedposterFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedposterFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
      
            </Col>
          </Row>
      
      </Container>
    </div>
  )
}

export default UploadExcel;













// class UploadExcel extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.fileInput = React.createRef();
//     }
//     handleSubmit(event) {
//       event.preventDefault();
//       alert(
//         `Selected file - ${this.fileInput.current.files[0].name}`
//       );
//       console.log(this.fileInput.current)
//     }

//     render() {
//       return (
//         <center>
//           <h1 style={{marginTop:"50px"}}>Upload Your Excel Datasheet here</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Upload file:
//             <input style={{marginLeft:"20px"}} type="file" ref={this.fileInput} />
//           </label>
//           <br></br>
//           <Button type="submit">Submit</Button>
//         </form>
//         </center>
//       );
//     }
//   }

//   const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
//   root.render(<FileInput />);
// export default UploadExcel;