import React from 'react';
import ReactDOM from 'react-dom'
import { FileInput } from 'uiw';
import { Button , Col,Row,Container} from 'react-bootstrap';
import  { useState } from 'react';
import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
const UploadExcel = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('File', selectedFile);
    console.log(formData)
    alert("Submit Clicked")

  //   fetch(
  //   	'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
  //   	{
  //   		method: 'POST',
  //   		body: formData,
  //   	}
  //   )
  //   	.then((response) => response.json())
  //   	.then((result) => {
  //   		console.log('Success:', result);
  //   	})
  //   	.catch((error) => {
  //   		console.error('Error:', error);
  //   	});


  };


  return (
    <div>
      <AdminHeader/>
        <AdminNavbar/>
        <Container style={{padding:'50px'}}>
          <Row>
            <Col sm={6}>
            <h5 >Upload Your Excel Datasheet here</h5>
            <hr></hr>
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