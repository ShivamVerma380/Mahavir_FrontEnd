import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Card, Container, Image, NavDropdown, Accordion, Offcanvas, Navbar } from "react-bootstrap";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import { setCookie, getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import "./FilterProducts.css"
import { FaArrowCircleUp } from 'react-icons/fa';
import { Dropdown } from "reactstrap";
import url from "../../Uri";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FcFilledFilter } from "react-icons/fc"
import { BsArrowUp } from "react-icons/bs"
import LoadingSpinner from "../LoadingSpinner";
import { Pagination, PaginationItem } from "@material-ui/lab";

function TestFilterProducts() {

    var comparemodels = getCookie("addToCompare").split(',');
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();
    var token = getCookie("jwtToken");
    // console.log("min",min,"  max",max);

    var cart = getCookie("CartModels").split(',');
    //To save selected products
    const [selectedProducts, SetSelectedProducts] = useState([]);
    const [isSelectedProductsFetched, SetIsSelectedProductsFetched] = useState(false);

    const [showTopBtn, setShowTopBtn] = useState(false);

    const [visible, setVisible] = useState(false)

    const [len, setLen] = useState(getCookie("addToCompare").split(',').length);

    //To save all products
    const [products, SetProducts] = useState([]);
    const [isProductsFetched, SetIsProductsFetched] = useState(false);




    //For Add To Compare
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);

    const [categories, SetCategories] = useState([]);
    const [isCategoriesFetched, SetIsCategoriesFetched] = useState(false);


    //For  filter criterias
    const [filters, SetFilters] = useState();
    const [isFiltersFetched, SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    const [filterselected, SetFilterSelected] = useState([])

    const [isLoading, SetIsLoading] = useState(true);


    const [min, SetMin] = useState(0);
    const [max, SetMax] = useState(100);

    const [value, SetValue] = useState([]);

    const [vals, setVals] = useState([]);
    // vals.push(localStorage.getItem("SubSubCategory"));

    // var flag1=false,flag2=false,flag3=false;

    const [paginationProducts,setPaginationProducts] = useState([]);

    const [page,setPage] = useState(1);
    const [paginationLength,setPaginationLength] = useState(1);


    useEffect(() => {
        window.addEventListener('scroll', () => { if (window.scrollY > 400) { setShowTopBtn(true); } else { setShowTopBtn(false); } });
        if (!isProductsFetched && !isSelectedProductsFetched && !isCategoriesFetched) {
            axios.get(url + "/get-products-by-category/" + localStorage.getItem("Category"))
                .then(function (response) {

                    if (localStorage.getItem("SubCategory") == null || localStorage.getItem("SubSubCategory") == null) {
                        SetSelectedProducts(response.data);
                        var minPrice = Number.MAX_VALUE, maxPrice = Number.MIN_VALUE;
                        // var priceArr=[]
                        response.data.map((index, pos) => {
                            // console.log("In selected products map...")
                            if (minPrice > parseInt(index.offerPrice.replace(",", ""))) {
                                minPrice = index.offerPrice.replace(",", "");
                            }
                            if (maxPrice < parseInt(index.offerPrice.replace(",", ""))) {
                                maxPrice = index.offerPrice.replace(",", "");
                            }

                        })
                        SetProducts(response.data);
                        setPaginationProducts([...response.data.slice(0,10)]);
                        setPaginationLength(Math.ceil(response.data.length/10));
                        SetIsLoading(false);
                    } else {
                        response.data.map(product => {
                            if (product.filtercriterias[localStorage.getItem("SubCategory")] === localStorage.getItem("SubSubCategory")) {
                                selectedProducts.push(product);
                            }
                        })
                        var minPrice = 100000000, maxPrice = 100;
                        // var priceArr=[]
                        selectedProducts.map((index, pos) => {
                            // console.log("In selected products map...")
                            if (parseInt(minPrice) > parseInt(index.offerPrice.replace(",", ""))) {
                                minPrice = index.offerPrice.replace(",", "");
                            }
                            if (parseInt(maxPrice) < parseInt(index.offerPrice.replace(",", ""))) {
                                maxPrice = index.offerPrice.replace(",", "");
                            }

                        })

                        setPaginationProducts([...selectedProducts.slice(0,10)]);
                        setPaginationLength(Math.ceil(selectedProducts.length/10));

                        SetProducts(response.data);
                        SetIsLoading(false);
                    }

                    // console.log("min ",minPrice,"  max",maxPrice);
                    SetMin(parseInt(minPrice));
                    SetMax(parseInt(maxPrice));
                    SetValue([minPrice, maxPrice]);

                    SetIsSelectedProductsFetched(true);
                    SetIsProductsFetched(true);

                }).catch(function (error) {
                    console.log("error in get-products-by-category");
                    SetIsLoading(false);
                })

            if (!isCategoriesFetched) {
                axios.get(url + "/get-all-categories")
                    .then(function (response) {
                        response.data.map(cat => {
                            categories.push(cat.category);
                        })

                    }).catch(function (error) {
                        console.log("error in get-categories");
                    })

                SetIsCategoriesFetched(true);
            }



            axios.get(url + "/filtercriterias/" + localStorage.getItem("Category"))
                .then(function (response) {
                    SetFilters(response.data.filterCriterias);
                    for (var key in response.data.filterCriterias) {
                        keySet.push(key);
                    }
                    // console.log("keySet",keySet)
                    if (localStorage.getItem("SubCategory") != null && localStorage.getItem("SubSubCategory") != null) {
                        // filterselected.push(localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory"))
                        SetFilterSelected([localStorage.getItem("SubCategory") + "-" + localStorage.getItem("SubSubCategory")])
                    }
                    SetIsFiltersFetched(true)
                    // SetFilters(response.data.filterCriterias)
                    // SetIsFiltersFetched(true)
                }).catch(function (error) {
                    console.log("error in filtercriterias category")
                })


        }

    })


    function handleAddToCompare(index) {

        var element = document.getElementById(index.modelNumber);
        // console.log("element",element);


        var length = 0;

        comparemodels.map(index => {
            if (index !== "") {
                length++;
            }
        })
        // if(length==0){
        //     console.log("Category...",index.category)
        //     localStorage.setItem("AddToCompareCategory",localStorage.getItem(index.category));
        // }
        // var length = comparemodels.length;
        // console.log("Length...",length)


        if (element.checked) {
            var flag = true;
            if (index.category !== localStorage.getItem("AddToCompareCategory") && localStorage.getItem("AddToCompareCategory") != null) {
                flag = false;
                document.getElementById(index.modelNumber).checked = false;
                toast.warn(<b>Please select products from same category</b>);
            }
            if (length == 4) {
                flag = false;
                document.getElementById(index.modelNumber).checked = false;
                toast.warn(<b>You can compare only 4 products</b>);
            }
            if (flag) {
                // console.log("in flag");
                // console.log("adddd"+index.modelNumber);
                comparemodels.push(index.modelNumber);
                setCookie("addToCompare", comparemodels, 20);
                setLen(getCookie("addToCompare").split(',').length)
                // console.log(comparemodels);
                // console.log("cookie",getCookie("addToCompare").split(',').length)
                // console.log("checked "+index.modelNumber);
            }
        }
        else {
            for (var i = 0; i < comparemodels.length; i++) {
                if (comparemodels[i] === index.modelNumber) {
                    comparemodels.splice(i, 1);
                    // console.log(comparemodels);
                    setCookie("addToCompare", comparemodels, 20);
                    setLen(getCookie("addToCompare").split(',').length)
                    // window.location.reload();
                    break;
                }
            }
            //   console.log("unchecked "+index.modelNumber);

        }

        var final_length = 0;
        comparemodels.map(index => {
            if (index !== "") {
                final_length++;
            }
        })
        if (final_length == 0) {
            localStorage.removeItem("AddToCompareCategory");
        }
        if (final_length == 1) {
            localStorage.setItem("AddToCompareCategory", index.category);
        }


        // if (event.target.checked) {

        //   console.log('✅ Checkbox is checked');
        //   setChange(change+1)



        // } else {
        //   console.log('⛔️ Checkbox is NOT checked');
        //   setChange(change-1)
        // }
        // setisAddCompareClicked(current => !current);
        // // alert("Added To Compare");

    }

    localStorage.setItem("comparecount", change)
    //   console.log("Get",localStorage.getItem("comparecount"))



    function callProductDetails(index) {
        console.log("Product Id:", index.productId + " Model Number:" + index.modelNumber);
        localStorage.setItem("productId", index.productId);
        localStorage.setItem("productSelected", index.modelNumber);
        navigate("/productDetails/" + index.modelNumber);
    }

    function RemoveWishlist(index) {

        // console.log("Wishlist",localStorage.getItem("Wishlist"))

        console.log("Wishlist", localStorage.getItem("wishlistproduct"))
        console.log("in remove")

        var formdata = {
            "modelNumber": index.modelNumber

        }
        axios.post(url + "/delete-wishlist", formdata, {
            headers: {
                "Authorization": "Bearer " + getCookie("jwtToken"),
                "Content-Type": "multipart/form-data"
            }
        }).then(function (response) {
            if (response.status == 200) {
                // console.log("Removed from wishlist successfully");
                // console.log(response.data)
                // var arr = localStorage. 
                var arr = localStorage.getItem("wishlistproduct").split(",")
                var finalWishlist = [];
                arr.map(a => {
                    if (a !== "" && a !== index.modelNumber) {
                        finalWishlist.push(a)
                    }
                })
                localStorage.setItem("wishlistproduct", finalWishlist)
                window.location.reload();
                // navigate("/");
            }
        }).catch(function (error) {
            console.log("Error", error);
        })
    }

    function WishlistHandler(index) {

        if (getCookie("isLoggedIn") !== 'true') {
            navigate("/login")
        } else {

            if (localStorage.getItem("wishlistproduct") == null) {
                localStorage.setItem("wishlistproduct", index.modelNumber)
            } else {
                var arr = localStorage.getItem("wishlistproduct").split(',')
                var flag = true;
                arr.map(i => {


                    if (i === index.modelNumber) {
                        arr.splice(arr.indexOf(i), 1)
                        localStorage.setItem("wishlistproduct", arr)

                        flag = false;
                    }
                })
                if (flag)
                    localStorage.setItem("wishlistproduct", localStorage.getItem("wishlistproduct") + "," + index.modelNumber)
                //    navigate('/')

            }




            var formdata = {
                "modelNumber": index.modelNumber

            }

            axios.post(url + "/wishlist", formdata, {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                }
            }).then(function (response) {
                if (response.status == 200) {
                    toast.success(<b>Added to wishlist successfully</b>)


                }
            }).catch(function (error) {
                if (error.response.status == 406) {
                    toast.warn(<b>Item already present in Wishlist</b>)

                }
                else {
                    toast.error(<b>SignIn First</b>)
                    console.log("Error", error);
                }

            })
        }

    }

    function handleCategoryCheck(cat) {
        // alert("hi")
        var element = document.getElementById(cat)
        if (element.checked == true) {
            // console.log(cat," is checked")
            localStorage.setItem("Category", cat);
            localStorage.removeItem("SubCategory")
            localStorage.removeItem("SubSubCategory")
            navigate("/" + cat);
            window.location.reload()
        } else {
            // console.log(cat," is not checked")
        }
    }

    const handleFormCheck2 = (index, f) => {
        // alert("hi")

        // console.log("index:"+index+"    f:"+f)

        var element = document.getElementById(f + f);

        if (element.checked) {
            // alert("here")

            var arr = filterselected;
            var flag = true;
            arr.map((i, pos) => {
                var pair = i.split("-");
                if (index === pair[0]) {
                    arr[pos] = index + "-" + pair[1] + ";" + f;
                    flag = false;
                }
            })
            if (flag) {
                // console.log("----"+f.slice())
                // var hl=f.length/2;
                // alert("-----"+hl)
                arr.push(index + "-" + f);
            }
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);

            filterselected.map(filter => {
                var v = filter.split("-");
                var arr = v[1].split(";");
                arr.map(val => {
                    if (vals.includes(val)) {

                    }
                    else {
                        vals.push(val);

                    }
                })
                // console.log("val "+vals);
            })
            products.map(index => {
                var flag = true;
                filterselected.map(a => {
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    var valueflag = false;
                    values.map(v => {
                        console.log(index.filtercriterias[key])


                        if (index.filtercriterias[key].includes(v)) {
                            valueflag = true;
                        }
                    })
                    if (!valueflag) {
                        flag = false;
                    }
                })

                if (flag) {
                    productsArray.push(index);
                }
            })


            // console.log("values",vals)

            // console.log("Products Array",productsArray.length);

            SetSelectedProducts(productsArray);
            setPaginationLength(Math.ceil(productsArray.length/10));
            setPage(1);
            setPaginationProducts([...productsArray].slice(0, 10));

        } else {

            console.log("Filter selected", filterselected)
            var arr = filterselected;
            arr.map((i, pos) => {
                var pair = i.split("-");
                if (index === pair[0]) {
                    var values = pair[1].split(";");
                    if (values.length == 1) {
                        arr.splice(pos, 1);
                    }
                    else {
                        var str = index + "-";
                        values.map(v => {
                            if (v !== f) {
                                str += v + ";";
                            }
                        })
                        str = str.slice(0, str.length - 1);
                        arr[pos] = str;

                    }
                }
            })

            // console.log("Array:",arr)

            // if(arr.length==0){
            //     console.log("In if")
            //     // localStorage.removeItem("SubCategory");
            //     // localStorage.removeItem("SubSubCategory");
            //     // window.location.reload();
            // }
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);

            products.map(index => {
                var flag = true;
                filterselected.map(a => {
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag = false;
                    values.map(v => {
                        console.log(index.filtercriterias[key])
                        if (index.filtercriterias[key] === v) {
                            valueflag = true;
                        }
                    })
                    if (!valueflag) {
                        flag = false;
                    }
                })
                if (flag) {
                    productsArray.push(index);
                }
            })
            vals.splice(0, vals.length);
            filterselected.map(filter => {
                var v = filter.split("-");
                var arr = v[1].split(";");
                arr.map(val => {
                    if (vals.includes(val)) {

                    }
                    else {
                        vals.push(val);

                    }
                })
                // alert("val "+vals);
            })
            // console.log("Products Array",productsArray.length);

            SetSelectedProducts(productsArray);
            setPaginationLength(Math.ceil(productsArray.length/10));
            setPage(1);
            setPaginationProducts([...productsArray].slice(0, 10));
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 500; // For Safari
        document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and Opera
        // console.log("In top Function")
        // document.body.scrollIntoView();
        // window.location.reload();
    }

    const handleFormCheck = (index, f) => {
        // alert("hi")

        // console.log("index:"+index+"    f:"+f)

        var element = document.getElementById(f);

        if (element.checked) {
            // alert("here")

            var arr = filterselected;
            var flag = true;
            arr.map((i, pos) => {
                var pair = i.split("-");
                if (index === pair[0]) {
                    arr[pos] = index + "-" + pair[1] + ";" + f;
                    flag = false;
                }
            })
            if (flag) {
                arr.push(index + "-" + f);
            }
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);
            products.map(index => {
                var flag = true;
                filterselected.map(a => {
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag = false;
                    values.map(v => {
                        // console.log(index.filtercriterias[key])
                        if (index.filtercriterias[key].includes(v)) {
                            valueflag = true;
                        }
                    })
                    if (!valueflag) {
                        flag = false;
                    }
                })
                if (flag) {
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);

            SetSelectedProducts([...productsArray]);
            setPaginationLength(Math.ceil(productsArray.length/10));
            setPage(1);
            setPaginationProducts([...productsArray].slice(0, 10));
            navigate("/" + localStorage.getItem("Category"))
            topFunction();
        } else {
            // alert("here")

            // console.log("Filter selected",filterselected)
            var arr = filterselected;
            arr.map((i, pos) => {
                var pair = i.split("-");
                if (index === pair[0]) {
                    var values = pair[1].split(";");
                    if (values.length == 1) {
                        arr.splice(pos, 1);
                    }
                    else {
                        var str = index + "-";
                        values.map(v => {
                            if (v !== f) {
                                str += v + ";";
                            }
                        })
                        str = str.slice(0, str.length - 1);
                        arr[pos] = str;

                    }
                }
            })


            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);
            products.map(index => {
                var flag = true;
                filterselected.map(a => {
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag = false;
                    values.map(v => {
                        // console.log(index.filtercriterias[key])
                        if (index.filtercriterias[key] === v) {
                            valueflag = true;
                        }
                    })
                    if (!valueflag) {
                        flag = false;
                    }
                })
                if (flag) {
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);

            SetSelectedProducts([...productsArray]);
            setPaginationLength(Math.ceil(productsArray.length/10));
            setPage(1);
            setPaginationProducts([...productsArray].slice(0, 10));
            navigate("/" + localStorage.getItem("Category"))
            topFunction();
        }
    }



    const rangeSelector = (event, newValue) => {
        // console.log("Range",newValue[0],)
        SetValue([parseInt(newValue[0]), parseInt(newValue[1])]);
        var arr = [];
        products.map(index => {
            var flag = true;
            filterselected.map(a => {
                var pair = a.split("-");
                // console.log("pair",pair)
                var key = pair[0];
                var values = pair[1].split(";");
                // console.log("values",values)
                var valueflag = false;
                values.map(v => {
                    // console.log(index.filtercriterias[key])
                    if (index.filtercriterias[key].includes(v)) {
                        valueflag = true;
                    }
                })
                if (!valueflag) {
                    flag = false;
                }
            })
            if (flag && parseInt(index.offerPrice.replace(",", "")) >= parseInt(newValue[0]) && parseInt(index.offerPrice.replace(",", "")) <= parseInt(newValue[1])) {
                arr.push(index);
            }
        })
        SetSelectedProducts(arr)

        // console.log(newValue)
    };


    function SortByLowPrice() {
        // console.log("in sort function")
        var arr = [];
        SetSelectedProducts([]);
        arr = selectedProducts;
        // console.log("Before sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a, b) => a.offerPrice.replace(',', '') - b.offerPrice.replace(',', ''));
        // console.log("After sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        SetSelectedProducts([...arr])
    }

    function SortByHighPrice() {
        // console.log("in sort function")
        var arr = [];
        SetSelectedProducts([]);
        arr = selectedProducts;
        // console.log("Before sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a, b) => b.offerPrice.replace(',', '') - a.offerPrice.replace(',', ''));
        // console.log("After sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        SetSelectedProducts([...arr])
    }

    function SortByTopRated() {
        // console.log("in sort function")
        var arr = [];
        SetSelectedProducts([]);
        arr = selectedProducts;
        // console.log("Before sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a, b) => b.averageRating - a.averageRating);
        // console.log("After sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexAverageRating--",index.averageRating)
        })
        SetSelectedProducts([...arr])
    }

    function SortByDiscount() {
        // console.log("in sort function")
        var arr = [];
        SetSelectedProducts([]);
        arr = selectedProducts;
        // console.log("Before sorting",selectedProducts)
        arr.map(index => {
            // console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a, b) => ((b.productPrice.replace(',', '') - b.offerPrice.replace(',', '')) * 100 / b.productPrice.replace(',', '')) - ((a.productPrice.replace(',', '') - a.offerPrice.replace(',', '')) * 100 / a.productPrice.replace(',', '')));
        // console.log("After sorting",selectedProducts)
        arr.map(index => {
            // console.log("indexAverageRating--",index.averageRating)
        })
        SetSelectedProducts([...arr])
    }



    function fetchPaginationProducts(event,value){
        // console.log("value",value)
        setPage(value)
        if(value === 1){
            setPaginationProducts([...selectedProducts.slice(0,10)])
        }
        else{
            setPaginationProducts([...selectedProducts.slice((value-1)*10,value*10)])
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var rating = new Array();
    rating = [1, 1, 1, 1, 1];
    return (
        <>
            <body style={{ background: "whitesmoke" }}>


                {
                    (((len - 1) > 0) ? <Button id="comparebtn" style={{ position: 'fixed' }} onClick={() => navigate('/compareProducts')}>Compare: {len - 1}</Button> : (null))

                }
                {
                    (showTopBtn) ? (
                        <Button className="scrolltopbtn" onClick={scrollToTop}>
                            <BsArrowUp />
                        </Button>
                    ) : (null)
                }

                {
                    isLoading ? (<LoadingSpinner />) : (null)
                }
                <Row className="mainpage">
                    <Col md={2} className="filtercol" style={{ paddingLeft: "0px", paddingRight: "0px" }} >
                        <h4><FcFilledFilter />Filters</h4>
                        <hr style={{}}></hr>
                        <h4 style={{ marginBottom: "15px", }}>Categories</h4>

                        {
                            (isCategoriesFetched) ? (
                                categories.map(cat => {
                                    return (
                                        <Form.Check style={{ marginLeft: "25px", fontFamily: "Roboto", marginTop: "5px", fontWeight: 400, fontHeight: "16px", fontSize: "14px", color: "rgba(0,0,0,0.7)" }} type="radio" id={cat} value={cat} label={cat} name="cat" defaultChecked={(cat === localStorage.getItem("Category")) ? (true) : (false)} onChange={() => handleCategoryCheck(cat)} />
                                    )
                                })
                            ) : (
                                null
                            )
                        }
                        <hr></hr>
                        <React.Fragment>
                            <Typography id="range-slider" gutterBottom style={{ fontWeight: 500, fontSize: "18px", lineHeight: "21px", marginLeft: "14px", fontFamily: "Roboto", marginBottom: "15px" }}>
                                Select Price Range
                            </Typography>
                            <Slider
                                defaultValue={[parseInt(min), parseInt(max)]}
                                onChange={rangeSelector}
                                valueLabelDisplay="off"
                                min={parseInt(min)}
                                max={parseInt(max)}
                                style={{ width: "230px", marginLeft: "14px" }}
                            />
                        </React.Fragment>
                        <h4 style={{ marginLeft: "14px", marginRight: "14px" }}>Your range of Price is between {value[0]} /- and {value[1]} /-</h4>



                        <br></br>
                        <hr></hr>

                        {
                            (isFiltersFetched) ? (
                                keySet.map((index, pos) => {
                                    return (
                                        <div >

                                            <Accordion defaultActiveKey="0" flush style={{ width: '100%' }}>
                                                <Accordion.Item eventKey={pos}>
                                                    <Accordion.Header style={{ fontWeight: 500, fontSize: "18px", lineHeight: "21px", marginLeft: "14px", marginRight: "14px", fontFamily: "Roboto", marginBottom: "15px" }}>{index}</Accordion.Header>
                                                    <Accordion.Body>

                                                        {/* <h5>{index}</h5> */}
                                                        {
                                                            filters[index].map(f => {
                                                                return (
                                                                    <>

                                                                        <Form>
                                                                            <Form.Check style={{ marginLeft: "25px", fontFamily: "Roboto", marginTop: "5px", fontWeight: 400, fontHeight: "16px", fontSize: "14px", color: "rgba(0,0,0,0.7)" }} type="checkbox" id={f} value={f} label={f} defaultChecked={(f === localStorage.getItem("SubSubCategory") && index === localStorage.getItem("SubCategory")) ? (true) : (false)} onChange={() => handleFormCheck(index, f)} />
                                                                        </Form>

                                                                    </>


                                                                )


                                                            })
                                                        }
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <hr></hr>
                                        </div>
                                    )
                                })
                            ) : (
                                null
                            )
                        }
                    </Col>
                    <Col md={10} >
                        {
                            // <h5 style={{textAlign:"end",marginRight:"25px"}}>God</h5>
                            <Row className="filterproductsRow">


                                <Col >
                                    <h4 className="multipleproducts_cat_name" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "21px", fontFamily: "Roboto" }}>{localStorage.getItem("Category")}</h4>

                                    <div className="offcavasfilters">
                                        {/* <i class="fa fa-filter fa-3x" aria-hidden="true" onClick={handleShow}></i> */}
                                        <FcFilledFilter onClick={handleShow} />

                                        <Offcanvas show={show} onHide={handleClose}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title style={{ fontWeight: 600, fontSize: "22px", lineHeight: "21px", marginLeft: "14px", fontFamily: "Roboto" }}>Filters<br></br><br></br><b>{selectedProducts.length}</b> Products Found</Offcanvas.Title>


                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                {/* <Col md={2} className="filtercol"> */}
                                                <h5 style={{ fontWeight: 600, fontSize: "22px", lineHeight: "21px", marginLeft: "14px", fontFamily: "Roboto", marginBottom: "15px" }}>Category</h5>
                                                {
                                                    (isCategoriesFetched) ? (
                                                        categories.map(cat => {
                                                            return (
                                                                <Form.Check style={{ marginLeft: "25px", fontFamily: "Roboto", marginTop: "5px", fontWeight: 400, fontHeight: "16px", fontSize: "14px", color: "rgba(0,0,0,0.7)" }} type="radio" id={cat} value={cat} label={cat} name="cat" defaultChecked={(cat === localStorage.getItem("Category")) ? (true) : (false)} onChange={() => handleCategoryCheck(cat)} />
                                                            )
                                                        })
                                                    ) : (
                                                        null
                                                    )
                                                }
                                                <hr></hr><br></br>
                                                <React.Fragment>

                                                    <Slider
                                                        defaultValue={[parseInt(min), parseInt(max)]}
                                                        onChange={rangeSelector}
                                                        valueLabelDisplay="off"
                                                        min={parseInt(min)}
                                                        max={parseInt(max)}
                                                        style={{ width: "230px", marginLeft: "14px" }}
                                                    />
                                                </React.Fragment>
                                                <h4 style={{ marginLeft: "14px", marginRight: "14px" }}>Your range of Price is between {value[0]} /- and {value[1]} /-</h4>



                                                <br></br><br></br>
                                                {/* <h4>Filters</h4> */}
                                                {
                                                    (isFiltersFetched) ? (
                                                        keySet.map((index, pos) => {
                                                            return (
                                                                <div >

                                                                    <Accordion defaultActiveKey="0" flush style={{ width: '100%' }}>
                                                                        <Accordion.Item style={{ fontWeight: 500, fontSize: "18px", lineHeight: "21px", marginLeft: "14px", marginRight: "14px", fontFamily: "Roboto", marginBottom: "15px" }} eventKey={pos}>
                                                                            <Accordion.Header style={{ fontWeight: 500, fontSize: "18px", lineHeight: "21px", marginLeft: "14px", marginRight: "14px", fontFamily: "Roboto", marginBottom: "15px" }}>{index}</Accordion.Header>
                                                                            <Accordion.Body>

                                                                                {/* <h5>{index}</h5> */}
                                                                                {
                                                                                    filters[index].map(f => {
                                                                                        // console.log("i"+index+" f"+f)

                                                                                        return (
                                                                                            <>

                                                                                                <Form>
                                                                                                    <Form.Check style={{ fontSize: '18px', fontWeight: '600' }} type="checkbox" id={f + f} value={f} label={f} defaultChecked={(vals.includes(f)) ? (true) : (false)} onChange={() => handleFormCheck2(index, f)} />
                                                                                                </Form>

                                                                                            </>


                                                                                        )


                                                                                    })
                                                                                }
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                    <hr></hr>
                                                                </div>
                                                            )
                                                        })
                                                    ) : (
                                                        null
                                                    )
                                                }
                                                {/* </Col> */}
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>

                                    <p className="products">(<b>{selectedProducts.length}</b> Products Found )</p>
                                </Col>

                                <Col style={{ display: 'flex', justifyContent: 'end' }}>
                                    <NavDropdown title={<b>Sort By<RiArrowDropDownLine style={{ color: "black" }} size={25} /></b>}>
                                        <NavDropdown.Item style={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }} target="_blank" onClick={SortByLowPrice}>Price: Low To High</NavDropdown.Item>
                                        <NavDropdown.Item style={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }} target="_blank" onClick={SortByHighPrice}>Price: High To Low</NavDropdown.Item>
                                        <NavDropdown.Item style={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }} target="_blank" onClick={SortByTopRated}>Top Rated</NavDropdown.Item>
                                        <NavDropdown.Item style={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }} target="_blank">Latest Arrival</NavDropdown.Item>
                                        <NavDropdown.Item style={{ color: 'black', fontSize: "20px", fontWeight: 'bold' }} target="_blank" onClick={SortByDiscount}>Discount: More To Less</NavDropdown.Item>
                                    </NavDropdown>
                                </Col>

                            </Row>
                        }


                        {

                            (isSelectedProductsFetched) ? (
                                (selectedProducts.length == 0) ? (
                                    <h6>No Products Found</h6>
                                ) : (

                                    paginationProducts.map(index => {
                                        return (

                                            <Row className="filterproductsRow">

                                                <Col md={2} className="imagecol">
                                                    <Image style={{ border: '0', cursor: "pointer" }} thumbnail="true" className="filterproductImage" onClick={() => callProductDetails(index)} src={index.productImage1} />
                                                    {/* <br></br>
                                            <p>{index.modelNumber}</p> */}
                                                </Col>

                                                <Col md={7} >
                                                    <Row className="innerrow" onClick={() => callProductDetails(index)} >

                                                        <h4 className="multipleproduct_title" onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>

                                                        {/* <Col md={1} >
                                                    {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                        <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
                                                        <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
                                                    }
                                                </Col> */}

                                                    </Row>
                                                    <Row>
                                                        {/* <Col md={11} style={{    paddingBottom: '40px',width: '10%'}} className="star">
                                                {Math.round(index.averageRating * 10) / 10} <span> </span><AiFillStar />
                                                
                                                </Col> */}



                                                        {/* <StarRatings name="small-rating"  size={20} totalStars={5} rating={index.averageRating}/> */}

                                                    </Row>

                                                    <Row className="innerrow">
                                                        <Col>
                                                            {
                                                                (index.productHighlights != null) ? (
                                                                    index.productHighlights.split(';').map(highlight => {
                                                                        return (
                                                                            <h6 className="multipleproduct_highlights">• {highlight}<br></br></h6>
                                                                        );
                                                                    })
                                                                ) : (
                                                                    null
                                                                )

                                                            }
                                                            
                                                        </Col>

                                                    </Row>

                                                </Col>

                                                <Col md={3} className="lastcol">



                                                    <Row >
                                                        <Col >
                                                            {
                                                                (index.offerPrice == null) ? (
                                                                    <h5 className="productprice">MRP: <b>₹{index.productPrice}</b></h5>
                                                                ) : (
                                                                    <><h5 className="productprice"><b >MSP: ₹{index.offerPrice}</b></h5><br></br>
                                                                        <h4 className="offerprice"><b >MRP: <b style={{ textDecorationLine: "line-through" }}>₹{index.productPrice}  </b></b>  <b style={{ color: 'green' }}>  {Math.round((parseInt(index.productPrice.replace(',', '')) - parseInt(index.offerPrice.replace(',', ''))) * 100 / parseInt(index.productPrice.replace(',', '')))}% off</b></h4></>
                                                                )
                                                            }
                                                        </Col>
                                                    </Row>
                                                    <Row className="checkboxx">
                                                        <Form className="check">

                                                    <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber} style={{fontSize:"18px"}} label = "Add To Compare" onChange={()=>handleAddToCompare(index)}/>


                                                </Form>
                                            </Row>
                                            <br></br>

                                            <Row >
                                                {/* className="btnrow" */}
                                            
                                            
                                                 <Button className="filterproductBtn" variant="outline-primary" onClick={()=>WishlistHandler(index)}>Add to wishlist</Button>

                                                    </Row>



                                                </Col>


                                            </Row>



                                        )

                                    })
                                )

                            ) : (
                                null
                            )
                        }
                        <div style={{ display: 'block', padding: 30 }}>
                        <Pagination count={paginationLength} color="primary" page={page} onChange={(event,value)=>fetchPaginationProducts(event,value)}/>
                        </div>

                    </Col>
                </Row>
            </body>
        </>



    )
}

export default TestFilterProducts;