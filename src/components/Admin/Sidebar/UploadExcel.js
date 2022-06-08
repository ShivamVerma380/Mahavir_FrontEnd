import React from 'react';
import ReactDOM from 'react-dom'
import { FileInput } from 'uiw';

class UploadExcel extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<FileInput />);
export default UploadExcel;