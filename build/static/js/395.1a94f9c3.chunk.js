"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[395],{5395:function(e,t,r){var n=r(2982),o=r(885),a=r(2791),l=r(3360),i=r(9743),c=r(2677),s=r(160),u=r(8949),d=r(6355),p=r(6458),m=r(2592),f=r(4569),g=r.n(f),h=r(6871),x=r(6495),b=r(5985),j=r(8302),y=r(1252),S=(r(5242),r(115)),Z=r(7425),I=r(3728),C=r(9126),v=r(9219),k=r(184);t.Z=function(){var e=(0,x.e)("addToCompare").split(","),t=(localStorage.getItem("Category"),(0,h.s0)()),r=(0,x.e)("jwtToken"),f=((0,x.e)("CartModels").split(","),(0,a.useState)([])),N=(0,o.Z)(f,2),P=N[0],w=N[1],L=(0,a.useState)(!1),T=(0,o.Z)(L,2),R=T[0],F=T[1],A=(0,a.useState)(!1),B=(0,o.Z)(A,2),z=B[0],H=B[1],W=(0,a.useState)(!1),E=(0,o.Z)(W,2),_=(E[0],E[1]),M=(0,a.useState)((0,x.e)("addToCompare").split(",").length),D=(0,o.Z)(M,2),K=D[0],V=D[1],Y=(0,a.useState)([]),U=(0,o.Z)(Y,2),O=U[0],X=U[1],q=(0,a.useState)(!1),G=(0,o.Z)(q,2),J=G[0],Q=G[1],$=(0,a.useState)(!1),ee=(0,o.Z)($,2),te=(ee[0],ee[1],(0,a.useState)(0)),re=(0,o.Z)(te,2),ne=re[0],oe=(re[1],(0,a.useState)([])),ae=(0,o.Z)(oe,2),le=ae[0],ie=(ae[1],(0,a.useState)(!1)),ce=(0,o.Z)(ie,2),se=ce[0],ue=ce[1],de=(0,a.useState)(),pe=(0,o.Z)(de,2),me=pe[0],fe=pe[1],ge=(0,a.useState)(!1),he=(0,o.Z)(ge,2),xe=he[0],be=he[1],je=(0,a.useState)([]),ye=(0,o.Z)(je,2),Se=ye[0],Ze=(ye[1],(0,a.useState)([])),Ie=(0,o.Z)(Ze,2),Ce=Ie[0],ve=Ie[1],ke=(0,a.useState)(!0),Ne=(0,o.Z)(ke,2),Pe=Ne[0],we=Ne[1],Le=(0,a.useState)(0),Te=(0,o.Z)(Le,2),Re=Te[0],Fe=Te[1],Ae=(0,a.useState)(100),Be=(0,o.Z)(Ae,2),ze=Be[0],He=Be[1],We=(0,a.useState)([]),Ee=(0,o.Z)(We,2),_e=Ee[0],Me=Ee[1],De=(0,a.useState)([]),Ke=(0,o.Z)(De,2),Ve=Ke[0];function Ye(e){console.log("Product Id:",e.productId+" Model Number:"+e.modelNumber),localStorage.setItem("productId",e.productId),localStorage.setItem("productSelected",e.modelNumber),t("/productDetails")}function Ue(e){1==document.getElementById(e).checked&&(localStorage.setItem("Category",e),localStorage.removeItem("SubCategory"),localStorage.removeItem("SubSubCategory"),t("/"+e),window.location.reload())}function Oe(){document.body.scrollTop=500,document.documentElement.scrollTop=500}Ke[1],(0,a.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>400?H(!0):H(!1)})),J||R||se||(g().get(S.Z+"/get-products-by-category/"+localStorage.getItem("Category")).then((function(e){if(null==localStorage.getItem("SubCategory")||null==localStorage.getItem("SubSubCategory")){w(e.data);var t=Number.MAX_VALUE,r=Number.MIN_VALUE;e.data.map((function(e,n){t>parseInt(e.offerPrice.replace(",",""))&&(t=e.offerPrice.replace(",","")),r<parseInt(e.offerPrice.replace(",",""))&&(r=e.offerPrice.replace(",",""))})),X(e.data),we(!1)}else{e.data.map((function(e){e.filtercriterias[localStorage.getItem("SubCategory")]===localStorage.getItem("SubSubCategory")&&P.push(e)}));t=1e8,r=100;P.map((function(e,n){parseInt(t)>parseInt(e.offerPrice.replace(",",""))&&(t=e.offerPrice.replace(",","")),parseInt(r)<parseInt(e.offerPrice.replace(",",""))&&(r=e.offerPrice.replace(",",""))})),X(e.data),we(!1)}Fe(parseInt(t)),He(parseInt(r)),Me([t,r]),F(!0),Q(!0)})).catch((function(e){console.log("error in get-products-by-category"),we(!1)})),se||(g().get(S.Z+"/get-categories").then((function(e){e.data.map((function(e){le.push(e.category)}))})).catch((function(e){console.log("error in get-categories")})),ue(!0)),g().get(S.Z+"/filtercriterias/"+localStorage.getItem("Category")).then((function(e){for(var t in fe(e.data.filterCriterias),e.data.filterCriterias)Se.push(t);null!=localStorage.getItem("SubCategory")&&null!=localStorage.getItem("SubSubCategory")&&ve([localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory")]),be(!0)})).catch((function(e){console.log("error in filtercriterias category")})))})),localStorage.setItem("comparecount",ne);var Xe=function(e,t){Me([parseInt(t[0]),parseInt(t[1])]);var r=[];O.map((function(e){var n=!0;Ce.map((function(t){var r=t.split("-"),o=r[0],a=r[1].split(";"),l=!1;a.map((function(t){e.filtercriterias[o].includes(t)&&(l=!0)})),l||(n=!1)})),n&&parseInt(e.offerPrice.replace(",",""))>=parseInt(t[0])&&parseInt(e.offerPrice.replace(",",""))<=parseInt(t[1])&&r.push(e)})),w(r)};window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?_(!0):e<=300&&_(!1)}));var qe=(0,a.useState)(!1),Ge=(0,o.Z)(qe,2),Je=Ge[0],Qe=Ge[1];return new Array,(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("body",{style:{background:"whitesmoke"},children:[K-1>0?(0,k.jsxs)(l.Z,{id:"comparebtn",style:{position:"fixed"},onClick:function(){return t("/compareProducts")},children:["Compare: ",K-1]}):null,z?(0,k.jsx)(l.Z,{className:"scrolltopbtn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,k.jsx)(C.HTv,{})}):null,Pe?(0,k.jsx)(v.Z,{}):null,(0,k.jsxs)(i.Z,{className:"mainpage",children:[(0,k.jsxs)(c.Z,{md:2,className:"filtercol",style:{paddingLeft:"0px",paddingRight:"0px"},children:[(0,k.jsxs)("h4",{children:[(0,k.jsx)(I.tpn,{}),"Filters"]}),(0,k.jsx)("hr",{style:{}}),(0,k.jsx)("h4",{style:{marginBottom:"15px"},children:"Categories"}),se?le.map((function(e){return(0,k.jsx)(s.Z.Check,{style:{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},type:"radio",id:e,value:e,label:e,name:"cat",defaultChecked:e===localStorage.getItem("Category"),onChange:function(){return Ue(e)}})})):null,(0,k.jsx)("hr",{}),(0,k.jsxs)(a.Fragment,{children:[(0,k.jsx)(j.Z,{id:"range-slider",gutterBottom:!0,style:{fontWeight:500,fontSize:"18px",lineHeight:"21px",marginLeft:"14px",fontFamily:"Roboto",marginBottom:"15px"},children:"Select Price Range"}),(0,k.jsx)(y.Z,{defaultValue:[parseInt(Re),parseInt(ze)],onChange:Xe,valueLabelDisplay:"off",min:parseInt(Re),max:parseInt(ze),style:{width:"230px",marginLeft:"14px"}})]}),(0,k.jsxs)("h4",{style:{marginLeft:"14px",marginRight:"14px"},children:["Your range of Price is between ",_e[0]," /- and ",_e[1]," /-"]}),(0,k.jsx)("br",{}),(0,k.jsx)("hr",{}),xe?Se.map((function(e,r){return(0,k.jsxs)("div",{children:[(0,k.jsx)(u.Z,{defaultActiveKey:"0",flush:!0,style:{width:"100%"},children:(0,k.jsxs)(u.Z.Item,{eventKey:r,children:[(0,k.jsx)(u.Z.Header,{style:{fontWeight:500,fontSize:"18px",lineHeight:"21px",marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"},children:e}),(0,k.jsx)(u.Z.Body,{children:me[e].map((function(r){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(s.Z,{children:(0,k.jsx)(s.Z.Check,{style:{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},type:"checkbox",id:r,value:r,label:r,defaultChecked:r===localStorage.getItem("SubSubCategory")&&e===localStorage.getItem("SubCategory"),onChange:function(){return function(e,r){if(document.getElementById(r).checked){var n=!0;(a=Ce).map((function(t,o){var l=t.split("-");e===l[0]&&(a[o]=e+"-"+l[1]+";"+r,n=!1)})),n&&a.push(e+"-"+r),ve(a);var o=[];O.map((function(e){var t=!0;Ce.map((function(r){var n=r.split("-"),o=n[0],a=n[1].split(";"),l=!1;a.map((function(t){e.filtercriterias[o].includes(t)&&(l=!0)})),l||(t=!1)})),t&&o.push(e)})),w(o),t("/"+localStorage.getItem("Category")),Oe()}else{var a;(a=Ce).map((function(t,n){var o=t.split("-");if(e===o[0]){var l=o[1].split(";");if(1==l.length)a.splice(n,1);else{var i=e+"-";l.map((function(e){e!==r&&(i+=e+";")})),i=i.slice(0,i.length-1),a[n]=i}}})),ve(a),o=[],O.map((function(e){var t=!0;Ce.map((function(r){var n=r.split("-"),o=n[0],a=n[1].split(";"),l=!1;a.map((function(t){e.filtercriterias[o]===t&&(l=!0)})),l||(t=!1)})),t&&o.push(e)})),w(o),t("/"+localStorage.getItem("Category")),Oe()}}(e,r)}})})})}))})]})}),(0,k.jsx)("hr",{})]})})):null]}),(0,k.jsxs)(c.Z,{md:10,children:[(0,k.jsxs)(i.Z,{className:"filterproductsRow",children:[(0,k.jsxs)(c.Z,{children:[(0,k.jsx)("h4",{className:"multipleproducts_cat_name",style:{fontWeight:600,fontSize:"24px",lineHeight:"21px",fontFamily:"Roboto"},children:localStorage.getItem("Category")}),(0,k.jsxs)("div",{className:"offcavasfilters",children:[(0,k.jsx)(I.tpn,{onClick:function(){return Qe(!0)}}),(0,k.jsxs)(d.Z,{show:Je,onHide:function(){return Qe(!1)},children:[(0,k.jsx)(d.Z.Header,{closeButton:!0,children:(0,k.jsxs)(d.Z.Title,{style:{fontWeight:600,fontSize:"22px",lineHeight:"21px",marginLeft:"14px",fontFamily:"Roboto"},children:["Filters",(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:P.length})," Products Found"]})}),(0,k.jsxs)(d.Z.Body,{children:[(0,k.jsx)("h5",{style:{fontWeight:600,fontSize:"22px",lineHeight:"21px",marginLeft:"14px",fontFamily:"Roboto",marginBottom:"15px"},children:"Category"}),se?le.map((function(e){return(0,k.jsx)(s.Z.Check,{style:{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"},type:"radio",id:e,value:e,label:e,name:"cat",defaultChecked:e===localStorage.getItem("Category"),onChange:function(){return Ue(e)}})})):null,(0,k.jsx)("hr",{}),(0,k.jsx)("br",{}),(0,k.jsx)(a.Fragment,{children:(0,k.jsx)(y.Z,{defaultValue:[parseInt(Re),parseInt(ze)],onChange:Xe,valueLabelDisplay:"off",min:parseInt(Re),max:parseInt(ze),style:{width:"230px",marginLeft:"14px"}})}),(0,k.jsxs)("h4",{style:{marginLeft:"14px",marginRight:"14px"},children:["Your range of Price is between ",_e[0]," /- and ",_e[1]," /-"]}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),xe?Se.map((function(e,t){return(0,k.jsxs)("div",{children:[(0,k.jsx)(u.Z,{defaultActiveKey:"0",flush:!0,style:{width:"100%"},children:(0,k.jsxs)(u.Z.Item,{style:{fontWeight:500,fontSize:"18px",lineHeight:"21px",marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"},eventKey:t,children:[(0,k.jsx)(u.Z.Header,{style:{fontWeight:500,fontSize:"18px",lineHeight:"21px",marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"},children:e}),(0,k.jsx)(u.Z.Body,{children:me[e].map((function(t){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(s.Z,{children:(0,k.jsx)(s.Z.Check,{style:{fontSize:"18px",fontWeight:"600"},type:"checkbox",id:t+t,value:t,label:t,defaultChecked:!!Ve.includes(t),onChange:function(){return function(e,t){if(document.getElementById(t+t).checked){var r=!0;(o=Ce).map((function(n,a){var l=n.split("-");e===l[0]&&(o[a]=e+"-"+l[1]+";"+t,r=!1)})),r&&o.push(e+"-"+t),ve(o);var n=[];Ce.map((function(e){e.split("-")[1].split(";").map((function(e){Ve.includes(e)||Ve.push(e)}))})),O.map((function(e){var t=!0;Ce.map((function(r){var n=r.split("-"),o=n[0],a=n[1].split(";"),l=!1;a.map((function(t){console.log(e.filtercriterias[o]),e.filtercriterias[o].includes(t)&&(l=!0)})),l||(t=!1)})),t&&n.push(e)})),w(n)}else{var o;console.log("Filter selected",Ce),(o=Ce).map((function(r,n){var a=r.split("-");if(e===a[0]){var l=a[1].split(";");if(1==l.length)o.splice(n,1);else{var i=e+"-";l.map((function(e){e!==t&&(i+=e+";")})),i=i.slice(0,i.length-1),o[n]=i}}})),ve(o),n=[],O.map((function(e){var t=!0;Ce.map((function(r){var n=r.split("-"),o=n[0],a=n[1].split(";"),l=!1;a.map((function(t){console.log(e.filtercriterias[o]),e.filtercriterias[o]===t&&(l=!0)})),l||(t=!1)})),t&&n.push(e)})),Ve.splice(0,Ve.length),Ce.map((function(e){e.split("-")[1].split(";").map((function(e){Ve.includes(e)||Ve.push(e)}))})),w(n)}}(e,t)}})})})}))})]})}),(0,k.jsx)("hr",{})]})})):null]})]})]}),(0,k.jsxs)("p",{className:"products",children:["(",(0,k.jsx)("b",{children:P.length})," Products Found )"]})]}),(0,k.jsx)(c.Z,{style:{display:"flex",justifyContent:"end"},children:(0,k.jsxs)(p.Z,{title:(0,k.jsxs)("b",{children:["Sort By",(0,k.jsx)(Z.kc8,{style:{color:"black"},size:25})]}),children:[(0,k.jsx)(p.Z.Item,{style:{color:"black",fontSize:"20px",fontWeight:"bold"},target:"_blank",onClick:function(){var e=[];w([]),(e=P).map((function(e){})),e.sort((function(e,t){return e.offerPrice.replace(",","")-t.offerPrice.replace(",","")})),e.map((function(e){})),w((0,n.Z)(e))},children:"Price: Low To High"}),(0,k.jsx)(p.Z.Item,{style:{color:"black",fontSize:"20px",fontWeight:"bold"},target:"_blank",onClick:function(){var e=[];w([]),(e=P).map((function(e){})),e.sort((function(e,t){return t.offerPrice.replace(",","")-e.offerPrice.replace(",","")})),e.map((function(e){})),w((0,n.Z)(e))},children:"Price: High To Low"}),(0,k.jsx)(p.Z.Item,{style:{color:"black",fontSize:"20px",fontWeight:"bold"},target:"_blank",onClick:function(){var e=[];w([]),(e=P).map((function(e){})),e.sort((function(e,t){return t.averageRating-e.averageRating})),e.map((function(e){})),w((0,n.Z)(e))},children:"Top Rated"}),(0,k.jsx)(p.Z.Item,{style:{color:"black",fontSize:"20px",fontWeight:"bold"},target:"_blank",children:"Latest Arrival"}),(0,k.jsx)(p.Z.Item,{style:{color:"black",fontSize:"20px",fontWeight:"bold"},target:"_blank",onClick:function(){var e=[];w([]),(e=P).map((function(e){})),e.sort((function(e,t){return 100*(t.productPrice.replace(",","")-t.offerPrice.replace(",",""))/t.productPrice.replace(",","")-100*(e.productPrice.replace(",","")-e.offerPrice.replace(",",""))/e.productPrice.replace(",","")})),e.map((function(e){})),w((0,n.Z)(e))},children:"Discount: More To Less"})]})})]}),R?0==P.length?(0,k.jsx)("h6",{children:"No Products Found"}):P.map((function(n){return(0,k.jsxs)(i.Z,{className:"filterproductsRow",children:[(0,k.jsx)(c.Z,{md:2,className:"imagecol",children:(0,k.jsx)(m.Z,{style:{border:"0",cursor:"pointer"},thumbnail:"true",className:"filterproductImage",onClick:function(){return Ye(n)},src:n.productImage1})}),(0,k.jsxs)(c.Z,{md:7,children:[(0,k.jsx)(i.Z,{className:"innerrow",onClick:function(){return Ye(n)},children:(0,k.jsx)("h4",{className:"multipleproduct_title",onClick:function(){return Ye(n)},style:{cursor:"pointer"},children:n.productName})}),(0,k.jsx)(i.Z,{}),(0,k.jsx)(i.Z,{className:"innerrow",children:(0,k.jsx)(c.Z,{children:null!=n.productHighlights?n.productHighlights.split(";").map((function(e){return(0,k.jsxs)("h6",{className:"multipleproduct_highlights",children:["\u2022 ",e,(0,k.jsx)("br",{})]})})):null})})]}),(0,k.jsxs)(c.Z,{md:3,className:"lastcol",children:[(0,k.jsx)(i.Z,{children:(0,k.jsx)(c.Z,{children:null==n.offerPrice?(0,k.jsxs)("h5",{className:"productprice",children:["MRP: ",(0,k.jsxs)("b",{children:["\u20b9",n.productPrice]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h5",{className:"productprice",children:(0,k.jsxs)("b",{children:["MSP: \u20b9",n.offerPrice]})}),(0,k.jsx)("br",{}),(0,k.jsxs)("h4",{className:"offerprice",children:[(0,k.jsxs)("b",{children:["MRP: ",(0,k.jsxs)("b",{style:{textDecorationLine:"line-through"},children:["\u20b9",n.productPrice,"  "]})]}),"  ",(0,k.jsxs)("b",{style:{color:"green"},children:["  ",Math.round(100*(parseInt(n.productPrice.replace(",",""))-parseInt(n.offerPrice.replace(",","")))/parseInt(n.productPrice.replace(",",""))),"% off"]})]})]})})}),(0,k.jsx)(i.Z,{className:"checkboxx",children:(0,k.jsx)(s.Z,{className:"check",children:(0,k.jsx)(s.Z.Check,{defaultChecked:!!e.includes(n.modelNumber),type:"checkbox",id:n.modelNumber,style:{fontSize:"18px"},label:"Add To Compare",onChange:function(){return function(t){var r=document.getElementById(t.modelNumber),n=0;if(e.map((function(e){""!==e&&n++})),r.checked){var o=!0;t.category!==localStorage.getItem("AddToCompareCategory")&&null!=localStorage.getItem("AddToCompareCategory")&&(o=!1,document.getElementById(t.modelNumber).checked=!1,b.Am.warn((0,k.jsx)("b",{children:"Please select products from same category"}))),4==n&&(o=!1,document.getElementById(t.modelNumber).checked=!1,b.Am.warn((0,k.jsx)("b",{children:"You can compare only 4 products"}))),o&&(e.push(t.modelNumber),(0,x.d)("addToCompare",e,20),V((0,x.e)("addToCompare").split(",").length))}else for(var a=0;a<e.length;a++)if(e[a]===t.modelNumber){e.splice(a,1),(0,x.d)("addToCompare",e,20),V((0,x.e)("addToCompare").split(",").length);break}var l=0;e.map((function(e){""!==e&&l++})),0==l&&localStorage.removeItem("AddToCompareCategory"),1==l&&localStorage.setItem("AddToCompareCategory",t.category)}(n)}})})}),(0,k.jsx)("br",{}),(0,k.jsx)(i.Z,{children:(0,k.jsx)(l.Z,{className:"filterproductBtn",variant:"outline-primary",onClick:function(){return function(e){if("true"!==(0,x.e)("isLoggedIn"))t("/login");else{if(null==localStorage.getItem("wishlistproduct"))localStorage.setItem("wishlistproduct",e.modelNumber);else{var n=localStorage.getItem("wishlistproduct").split(","),o=!0;n.map((function(t){t===e.modelNumber&&(n.splice(n.indexOf(t),1),localStorage.setItem("wishlistproduct",n),o=!1)})),o&&localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+e.modelNumber)}var a={modelNumber:e.modelNumber};g().post(S.Z+"/wishlist",a,{headers:{Authorization:"Bearer "+r,"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&b.Am.success((0,k.jsx)("b",{children:"Added to wishlist successfully"}))})).catch((function(e){406==e.response.status?b.Am.warn((0,k.jsx)("b",{children:"Item already present in Wishlist"})):(b.Am.error((0,k.jsx)("b",{children:"SignIn First"})),console.log("Error",e))}))}}(n)},children:"Add to wishlist"})})]})]})})):null]})]})]})})}},9219:function(e,t,r){r.d(t,{Z:function(){return o}});r(2791);var n=r(184);function o(){return(0,n.jsx)("div",{className:"spinner-container",children:(0,n.jsx)("div",{className:"loading-spinner"})})}}}]);
//# sourceMappingURL=395.1a94f9c3.chunk.js.map