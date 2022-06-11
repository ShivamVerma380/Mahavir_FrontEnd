import React, { useEffect, useState } from "react";
import { Col,Row,Button ,Form,Card} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";


var modelNumsToCompare = new Set();
var flag = false;


function FilterProduct(){

    var category = localStorage.getItem("Category");
    console.log("Category",category);

    const[products,setProducts] = useState([]);
    const[isProductsFetched,setIsProductsFetched] = useState(false);

    const[filteredProducts,setFilteredProducts] = useState([]);

    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);

    const [isCompareBtnClicked,SetIsCompareBtnClicked] = useState(false);

    const [isAddToCompareProductsFetched,SetIsAddToCompareProductsFetched] =  useState(false);
    const [addToCompareProducts,SetAddToCompareProducts] = useState([]);

    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    if(localStorage.getItem("CompareModels")===null){
        var str="";
    }else{
        var str= localStorage.getItem("CompareModels")+",";
        var arr = str.split(",");
        arr.map(index=>{
            modelNumsToCompare.add(index);
        })
        
    }

    const navigate = useNavigate();

    function compareProducts(){
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            alert("Please select products to compare");
        }
        else{
            navigate("/compareproducts")
        }
    }

    function getCompareBtn(){
       
       
        return(
          <Button id="comparebtn" onClick={compareProducts}>Compare</Button>
        )
      
    }

    const handleAddToCompare=event=>{
        
        if (event.target.checked) {

            //console.log('✅ Checkbox is checked');
            setChange(change+1)
            //document.getElementById(event.value).checked = "false"
            console.log("Value",event.target.value);
            modelNumsToCompare.add(event.target.value);
            alert(event.target.value)
            console.log("ModelNumbers",modelNumsToCompare)
          } else {
            console.log('⛔ Checkbox is NOT checked');
            //document.getElementById(event.value).checked = "true"
            setChange(change-1)
            modelNumsToCompare.delete(event.target.value);

            console.log("ModelNumbers",modelNumsToCompare)
          }

        str="";
        modelNumsToCompare.forEach(element=>{
            //console.log(element);
            str +=  element + ",";
        })
        str = str.slice(0,str.length-1);
        console.log(str);
        //localStorage.setItem("CompareModels",str);
        // SetCookie('CompareModels',str,{path:'/'});
        //getCompareBtn();
        localStorage.setItem("CompareModels",str);
        console.log('Compare Models',localStorage.getItem("CompareModels"))
        setisAddCompareClicked(current => !current);
    }


    function callProductDetails(index){
        //alert(index);
        console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }


      const callFormCheck=(modelNumber)=>{
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            //SetCookie("CompareModels","",{path:"/"});
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            );
        }else{
            var modelNums = localStorage.getItem("CompareModels").split(',');
            console.log("Model Nums",modelNums)
        
            if(modelNums.includes(modelNumber)){
                return(
                    <Form>    
                        <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare} defaultChecked="true"/>
                    </Form>
                );
            }
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            )

        }
    }
        

    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
            console.log("Model Number",modelNumbers);
            var urls=[];
            modelNumbers.map(modelNum=>{
                urls.push(axios.get("http://localhost:8080/get-products/"+modelNum));
            })

            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map(index=>{
                        products.push(index.data);
                        products.push(index.data);
                    })
                    setIsProductsFetched(true);
                })
            )
        }
    })

    return(
        <div>
        <Col md={2}>
            <h5>FilterProduct</h5>
        </Col>
        <Row style={{marginLeft:300}}>
            {
                (isProductsFetched)?
                cards = products.map(index=>{
                    return(
                        
                        <Card  style={{ width: '15rem'}} 
                        className="mb-2">
                            <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                            <Card.Body>
                            <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                            <Card.Text onClick={()=>callProductDetails(index)}>
                            {index.productDescription}
                            <br></br><br></br><strong>Rs {index.productPrice}</strong>
                        </Card.Text>
                            {
                                callFormCheck(index.modelNumber)
                            }
                            
                            
                            
                            <br></br>
                            <Button variant="flat" size="1">Buy</Button>
                            </Card.Body>
                            
                    </Card>
                    
                    
                    
                    )
                }):(null)
            }
            </Row>
        
        {
            getCompareBtn()      
        }
        </div>
    );
}

export default FilterProduct;