import React from "react";
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Form, CardGroup, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../Header";


const ProductsByDeal = () => {
    const location = useLocation();
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
    const navigate = useNavigate();
    var cards = <div>
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
    </div>


    function WishlistHandler(index) {
        // alert("Item added successfully to wishlist");
        console.log(index.modelNumber)
        if (localStorage.getItem("wishlistproduct") == null) {
            localStorage.setItem("wishlistproduct", index.modelNumber)
        } else {
            var arr = localStorage.getItem("wishlistproduct").split(',')
            var flag = true;
            arr.map(i => {

                console.log("i: ", i)
                if (i === index.modelNumber) {
                    arr.splice(arr.indexOf(i), 1)
                    localStorage.setItem("wishlistproduct", arr)
                    console.log('del arr: ' + arr)
                    console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
                    console.log("in if")
                    flag = false;
                }
            })
            if (flag)
                localStorage.setItem("wishlistproduct", localStorage.getItem("wishlistproduct") + "," + index.modelNumber)
            //navigate('/categoryProductsall')
            ProductsByDeal(location.state.name)

        }

    }

    function callProductDetails(index) {
        //alert(index);
        console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }


    const handleAddToCompare = event => {
        if (event.target.checked) {

            console.log('✅ Checkbox is checked');
            setChange(change + 1)



        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setChange(change - 1)
        }
        setisAddCompareClicked(current => !current);
        // alert("Added To Compare");

    }

    localStorage.setItem("comparecount", change)
    console.log("Get", localStorage.getItem("comparecount"))



    return (



        <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif ' }}>
            <Header/>




            <h1 style={{ color: "rgb(255,98,98", marginLeft: '2%', marginTop: '2%' }}><i>{location.state.name}</i></h1>


            {
                cards = location.state.index.products.map(index => {
                    return (


                        <Row style={{
                            padding: '2%', margin: '2%', backgroundColor: '#fff',
                            borderRadius: '2px',
                            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'
                        }}>
                            <Col md={2}>
                                <img onClick={() => callProductDetails(index)} style={{ height: '60%', width: '100%', cursor: 'pointer', justifySelf: 'center' }} src={"data:image/png;base64," + index.productImage1.data} />

                            </Col>
                            <Col md={8} style={{ padding: '2%' }}>
                                <Row style={{ marginBottom: '1%' }}>
                                    <Col md={11}>
                                        <h3 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h3>
                                    </Col>
                                    <Col md={1}>
                                        {(localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                            <AiFillHeart style={{ marginTop: "10px", marginLeft: "10px", fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={50} onClick={() => WishlistHandler(index)} /> :
                                            <AiOutlineHeart style={{ marginTop: "10px", marginLeft: "10px" }} className="wishlisticon" size={50} onClick={() => WishlistHandler(index)} />
                                        }
                                    </Col>

                                </Row>
                                <Row style={{ marginBottom: '1%' }}>
                                    <Col md={11}>
                                        {
                                            index.productHighlights.split(';').map(index => {
                                                return (
                                                    <h5 style={{ marginLeft: '10px', marginBottom: '10px' }}>•<span style={{ marginLeft: '10px' }}> </span>{index}</h5>
                                                );

                                            })
                                        }
                                        {/* <h5 >{index.productHighlights}</h5> */}
                                    </Col>

                                </Row>
                                <Row style={{ marginBottom: '1%' }}>
                                    <Col md={10}>
                                        <h4>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h4>

                                    </Col>

                                </Row>

                                <Row style={{ marginBottom: '2%' }}>
                                    <Form style={{
                                        fontWeight: '700',
                                        fontSize: '150%'
                                    }}>
                                        <Form.Check type="checkbox" label="Add To Compare" onChange={handleAddToCompare} />
                                    </Form>

                                </Row>

                                <Row style={{ marginTop: '2%' }}>
                                    <Button style={{ width: '30%', height: '60px', marginLeft: '1%', fontSize: '140%' }} variant="flat" size="1" >Add To Cart</Button>
                                    <Button style={{ width: '30%', height: '60px', marginLeft: '5%', fontSize: '140%' }} variant="flat" size="1"  >Buy Now</Button>

                                </Row>
                            </Col>


                        </Row>


                    )
                })}




        </div>
    )
}
export default ProductsByDeal;