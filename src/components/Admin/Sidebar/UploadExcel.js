import React from 'react';
import ReactDOM from 'react-dom'
import { FileInput } from 'uiw';
import { Button , Col,Row,Container} from 'react-bootstrap';
import  { useState } from 'react';
import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
import axios from 'axios';
const UploadExcel = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedFile);
    console.log("Form Data",formData)
    alert("Submit Clicked")

    axios.post("http://localhost:8080/excel",formData,{
      headers:{
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGJjYWFmZGFhaHN0c3NhYWFhc3dzc2EiLCJleHAiOjE2NTYzNjM1NTMsImlhdCI6MTY1NjI2MzU1M30.3g2xGWCpQ8J_SBzkJ3hzOKIDUpyk6ujKa9WjInuXLUE"
      },
      mode:"no-cors"
    }).then(function(response){
      console.log(response.data)
    }).catch(function(error){
      console.log(error)
    })


  };


  return (
    <div>
      {/* <AdminHeader/> */}
        <AdminNavbar/>
        <Container style={{padding:'50px'}}>
          <Row>
            <Col sm={6}>
            <h5 >Upload Your Excel Datasheet here</h5>
          
            <input  type="file" name="file" accept=".xlsx, .xls, .csv" onChange={changeHandler} />
            <br></br><br></br>
            <Button variant='flat' size="m" onClick={handleSubmission}>Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedFile.name}</p>
                <p ><b>Filetype:</b> {selectedFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
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
          
            <input  type="file" name="categoriesfile" accept=".xlsx, .xls, .csv"  />
            <br></br><br></br>
            <Button variant='flat' size="m" >Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedFile.name}</p>
                <p ><b>Filetype:</b> {selectedFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
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
         
            <input  type="file" name="filtercriteria" accept=".xlsx, .xls, .csv"  />
            <br></br><br></br>
            <Button variant='flat' size="m" >Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedFile.name}</p>
                <p ><b>Filetype:</b> {selectedFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
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
          
            <input  type="file" name="shopbybrands" accept=".xlsx, .xls, .csv"  />
            <br></br><br></br>
            <Button variant='flat' size="m" >Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedFile.name}</p>
                <p ><b>Filetype:</b> {selectedFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
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
            
            <input  type="file" name="megaminiposters" accept=".xlsx, .xls, .csv"  />
            <br></br><br></br>
            <Button variant='flat' size="m" >Submit</Button>
            <br></br><br></br>
            </Col>
            <Col sm={6}>
                  {isFilePicked ? (
              <div style={{fontSize:'15px'}}>
                <p ><b>Filename:</b> {selectedFile.name}</p>
                <p ><b>Filetype:</b> {selectedFile.type}</p>
                <p ><b>Size in bytes:</b> {selectedFile.size}</p>
                <p >
                  <b>lastModifiedDate:</b>{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
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