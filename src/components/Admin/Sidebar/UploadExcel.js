import React from 'react';
import ReactDOM from 'react-dom'
import { FileInput } from 'uiw';
import { Button } from 'react-bootstrap';
import  { useState } from 'react';

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
      <center>
      <h1 style={{marginTop:"50px"}}>Upload Your Excel Datasheet here</h1>
      <input style={{marginTop:"50px"}} type="file" name="file" accept=".xlsx, .xls, .csv" onChange={changeHandler} />
      {isFilePicked ? (
        <div style={{marginTop:"20px"}}>
          <p style={{fontSize:"30px"}}><b>Filename:</b> {selectedFile.name}</p>
          <p style={{fontSize:"30px"}}><b>Filetype:</b> {selectedFile.type}</p>
          <p style={{fontSize:"30px"}}><b>Size in bytes:</b> {selectedFile.size}</p>
          <p style={{fontSize:"30px"}}>
            <b>lastModifiedDate:</b>{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <Button  onClick={handleSubmission}>Submit</Button>
      </div>
      </center>
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