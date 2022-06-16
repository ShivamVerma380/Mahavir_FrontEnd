import React from "react";
import Header from "../Header";
import AdminHeader from "./AdminHeader";
import AdminNavbar from "./Sidebar/AdminNavbar";
import TextField from '@material-ui/core/TextField';
import Autocomplete,
{ createFilterOptions } from '@material-ui/lab/Autocomplete';
// import { Dropdown, Option } from "./Dropdown";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Button } from "react-bootstrap";
import AddCategory from "./AddCategory";
// import AddItem from "./Test/AddItem";
import Select from 'react-select';

const filter = createFilterOptions();
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

export default function Admin () {

    
    // const options = ['One', 'Two', 'Three', 'Four']
    // const [optionValue, setOptionValue] = useState("");
    // var optionno = 0;
    // const handleSelect = (e) => {
    // console.log(e.target.value);
    // setOptionValue(e.target.value);
    // optionno=e.target.value;

    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
    console.log(e);
    setValue(e)

    
    };    

    return (
        <div>
            <AdminHeader/>
            <AdminNavbar/>
            <h1 style={{marginTop:"20px",textAlign:"center"}}>Mahavir Electronics</h1>
            {/* <AddCategory/>  */}
            {/* <AddItem/> */}
                <br></br>
                
            {/* <div className="container">
                <div className="row">
                <div className="col-md-4">
                <Select options={ Categories } />
                </div>
                <div className="col-md-4"><Button>Add Item</Button>
                </div>
                <div className="col-md-4">
                </div>
                </div>
                <div className="row">
                
                <div className="col-md-4">
                    <Select options={ SubCategories } />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                </div>
                <div className="row">
                
                <div className="col-md-4">
                    <Select options={ SubSubCategories } />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                </div>

                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4"></div>
                    </div>
            </div>
                 */}

                {/* <DropdownButton
                    style={{marginLeft:"500px"}}
                    alignRight
                    title="Add Category"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                    <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                </DropdownButton>                

                <h4 style={{marginLeft:"500px",marginTop:"20px"}}>You selected {value}</h4> */}


            {/* <h1>Which service are you interested in?</h1>
            <Dropdown
                formLabel="Choose a service"
                buttonText="Send form"
                onChange={handleSelect}
                
                //action="/"
            >
                <Option value="Click to see options" />
                <Option value="Option 1" />
                <Option value="Option 2" />
                <Option value="Option 3" />
                
            </Dropdown>
            
            <p>You selected {optionValue}</p> */}
            
         {/* <Autocomplete
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                    // Suggest the creation of a new value
                    if (params.inputValue !== '') {
                        filtered.push(`Add "${params.inputValue}"`);
                    }
                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={options}
                renderOption={(option) => option}
                style={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                <TextField {...params} label="Enter Something"
                    variant="outlined" />
                )}
            /> */}
            
            
        </div>
        
    )


}
