"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[850],{9850:function(e,t,o){o.r(t);var r=o(4942),s=o(885),l=o(2791),i=o(9743),c=o(2677),a=(o(8563),o(2558),o(8820)),n=o(7689),u=o(4569),d=o.n(u),m=o(6495),g=o(5985),p=o(759),h=(o(1144),o(6429),o(115)),x=o(184);t.default=function(e){var t=e.cattitle,o=(0,m.e)("jwtToken"),u=(0,l.useState)(!1),f=(0,s.Z)(u,2),S=(f[0],f[1],(0,l.useState)(0)),y=(0,s.Z)(S,2),j=y[0],b=(y[1],(0,l.useState)(!1)),w=(0,s.Z)(b,2),N=(w[0],w[1]),I=(0,l.useState)(!1),v=(0,s.Z)(I,2),C=(v[0],v[1],(0,l.useState)(!1)),P=(0,s.Z)(C,2),Z=(P[0],P[1],(0,l.useState)([])),k=(0,s.Z)(Z,2),z=k[0],L=k[1],M=(0,l.useState)(!1),A=(0,s.Z)(M,2),R=A[0],T=A[1],B=(0,n.s0)();function D(e){console.log("Index",e),localStorage.setItem("productId",e.productId),localStorage.setItem("productSelected",e.modelNumber),localStorage.setItem("Category",e.category),localStorage.setItem("SubCategory","Brand"),localStorage.setItem("SubSubCategory",e.subCategoryMap.Brand),B("/productDetails")}(0,l.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>700?N(!0):N(!1)})),R||d().get(h.Z+"/get-products-by-category/"+t).then((function(e){200==e.status&&(L(e.data),T(!0))})).catch((function(e){console.log(e)}))})),localStorage.setItem("comparecount",j),(0,m.d)("countcompare",j,20);var E=z.slice(0,4);return R?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"categoryproductswiper",children:(0,x.jsxs)(p.L5,{className:"categoryproductscontainer",children:[(0,x.jsxs)(i.Z,{className:"categoryproductsrow",children:[(0,x.jsxs)(c.Z,{md:8,children:[(0,x.jsx)("svg",{className:"svgtitle",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("filter",{id:"motion-blur-filter",filterUnits:"userSpaceOnUse",children:(0,x.jsx)("feGaussianBlur",{stdDeviation:"100 0"})})}),(0,x.jsx)("span",{className:"categorytitle",style:{marginLeft:"20px"},"filter-content":"S",children:t})]}),(0,x.jsx)(c.Z,{md:4,style:{display:"flex",justifyContent:"end"},children:(0,x.jsxs)("button",{onClick:function(){return function(e){localStorage.setItem("Category",e),localStorage.removeItem("SubCategory"),localStorage.removeItem("SubSubCategory"),B("/categoryProductsall")}(t)},class:"explore",children:["View More",(0,x.jsx)("span",{class:"icon-right after"})]})})]}),(0,x.jsx)(p.uZ,{style:{justifyContent:"center",padding:"10px"},className:"row-cols-1 row-cols-md-3 g-4",children:E.map((function(e){var t,s,l;t={url:e.productImage1},(0,r.Z)(t,"url",e.productImage1),(0,r.Z)(t,"url",e.productImage1);return(0,x.jsxs)(p.Yl,{className:"categoryproductscard",children:[(0,x.jsxs)("div",{className:"cardimg",children:[(0,x.jsx)(p.PH,{className:"cardimage",src:e.productImage1,alt:"...",position:"top"}),(0,x.jsx)(p.PH,{onClick:function(){return D(e)},className:"cardimage2",src:e.productImage1,alt:"...",position:"top"})]}),null!=localStorage.getItem("wishlistproduct")&&localStorage.getItem("wishlistproduct").includes(e.modelNumber)?(0,x.jsx)(a.M_L,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end",fill:"rgb(255, 88, 88)"},className:"wishlisticon",size:30,onClick:function(){return function(e){console.log("Wishlist",localStorage.getItem("wishlistproduct")),console.log("in remove");var t={modelNumber:e.modelNumber};d().post(h.Z+"/delete-wishlist",t,{headers:{Authorization:"Bearer "+(0,m.e)("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status){var o=localStorage.getItem("wishlistproduct").split(","),r=[];o.map((function(t){""!==t&&t!==e.modelNumber&&r.push(t)})),localStorage.setItem("wishlistproduct",r),window.location.reload()}})).catch((function(e){console.log("Error",e)}))}(e)}}):(0,x.jsx)(a.lo,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end"},className:"wishlisticon",size:30,onClick:function(){return function(e){if("true"!==(0,m.e)("isLoggedIn"))B("/login");else{if(null==localStorage.getItem("wishlistproduct"))localStorage.setItem("wishlistproduct",e.modelNumber);else{var t=localStorage.getItem("wishlistproduct").split(","),r=!0;t.map((function(o){o===e.modelNumber&&(t.splice(t.indexOf(o),1),localStorage.setItem("wishlistproduct",t),r=!1)})),r&&localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+e.modelNumber),B("/")}var s={modelNumber:e.modelNumber};d().post(h.Z+"/wishlist",s,{headers:{Authorization:"Bearer "+o,"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&g.Am.success((0,x.jsx)("b",{children:"Added to wishlist successfully"}))})).catch((function(e){406==e.response.status?g.Am.warn((0,x.jsx)("b",{children:"Item already present in Wishlist"})):(g.Am.error((0,x.jsx)("b",{children:"SignIn First"})),console.log("Error",e))}))}}(e)}}),(0,x.jsxs)(p.H7,{className:"categoryproductscardbody",children:[(0,x.jsxs)(p.QM,{className:"cardtitle",children:[e.productName," "]}),(0,x.jsxs)(p.CN,{onClick:function(){return D(e)},style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:[(0,x.jsx)("b",{style:{fontSize:"18px"},children:"MSP:"})," ",(0,x.jsxs)("b",{style:{marginRight:"20px",color:"#ed1c24",fontSize:"18px"},children:["\u20b9",e.offerPrice]})," ",(0,x.jsx)("br",{}),(0,x.jsx)("b",{style:{fontSize:"16px",color:"grey"},children:"MRP:"}),"  ",(0,x.jsxs)("b",{style:{textDecorationLine:"line-through",textDecorationStyle:"solid",marginRight:40,fontSize:"15px",color:"grey"},children:["\u20b9",e.productPrice]})]}),(s=e.offerPrice,l=e.productPrice,s!==l?(0,x.jsx)(p.Pp,{className:"text",children:"Offer Available"}):(0,x.jsx)(p.Pp,{className:"text",children:"No Offer Available"}))]}),(0,x.jsxs)(p.H7,{className:"categoryproductscardbodyonhover",children:[(0,x.jsxs)(p.QM,{className:"cardtitle",onClick:function(){return D(e)},children:[e.productName," "]}),(0,x.jsxs)(p.CN,{onClick:function(){return D(e)},style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:[(0,x.jsx)("b",{style:{fontSize:"18px"},children:"MSP:"})," ",(0,x.jsxs)("b",{style:{marginRight:"20px",color:"#ed1c24",fontSize:"18px"},children:["\u20b9",e.offerPrice]})," ",(0,x.jsx)("br",{}),(0,x.jsx)("b",{style:{fontSize:"16px",color:"grey"},children:"MRP:"}),"  ",(0,x.jsxs)("b",{style:{textDecorationLine:"line-through",textDecorationStyle:"solid",marginRight:40,fontSize:"15px",color:"grey"},children:["\u20b9",e.productPrice]})," "]}),(0,x.jsx)(p.Pp,{className:"text",onClick:function(){return D(e)},children:"View Details"})]})]})}))})]})})}):null}},6429:function(){}}]);
//# sourceMappingURL=850.0ad7875e.chunk.js.map