"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[608,850,291],{3543:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var r=o(885),a=(o(3508),o(542)),n=o(6244),s=o(936),l=o(2791),c=o(8563),i=(o(4676),o(5880),o(4432),o(1724),o(7152)),u=o(184);var d=o(4569),m=o.n(d),g=o(3360),f=o(8114),p=o(6871),h=(o(9182),o(759)),x=function(e){var t=e.MiniPosters,o=(0,p.s0)(),r=t.length;return r%2===0?r/2:parseInt(r/2)+1,(0,u.jsx)("div",{children:(0,u.jsx)(h.uZ,{style:{padding:"1%",display:"flex",justifyContent:"center"},className:"row-cols-1 row-cols-md-3 g-4",children:t.map((function(e,t){return(0,u.jsx)(h.Yl,{className:"minipostercard",children:(0,u.jsx)(h.PH,{style:{border:"solid 1px gray",cursor:"pointer"},src:e.imageUrl,onClick:function(){return function(e){localStorage.setItem("offerPostersModelNumber",e.modelNumbers),o("/offers")}(e)},alt:"...",position:"top"})})}))})})},y=o(5985);o(1144);var b=o(9850),S=o(7022),j=(o(337),o(4628),o(115)),v=(o(6429),function(){var e=(0,p.s0)(),t=(0,l.useState)([]),o=(0,r.Z)(t,2),a=o[0],n=o[1],s=(0,l.useState)(!1),d=(0,r.Z)(s,2),g=d[0],f=d[1];(0,l.useEffect)((function(){g||m().get(j.Z+"/excel/shopByBrands").then((function(e){200==e.status&&(n(e.data),f(!0))})).catch((function(e){console.log("error",e)}))}));return(0,u.jsx)("div",{children:(0,u.jsx)(S.Z,{style:{marginBottom:"70px",backgroundColor:"white"},children:g?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:"brand_title",style:{marginLeft:"30px",paddingTop:"20px"},children:"Shop by brands"}),(0,u.jsx)(c.tq,{loop:!1,loopFillGroupWithBlank:!0,breakpoints:{700:{slidesPerView:6},400:{slidesPerView:3}},pagination:{clickable:!0},navigation:!0,modules:[i.tl,i.W_],className:"brand_category_swiper",style:{zIndex:0},children:a.map((function(t){return(0,u.jsx)(c.o5,{children:(0,u.jsx)("img",{className:"brandlogo",style:{cursor:"pointer"},onClick:function(){return function(t){localStorage.setItem("Index:",t),localStorage.setItem("brandName",t.brandName),localStorage.setItem("brandLogo",t.brandLogo),localStorage.setItem("brandCategories",t.brandCategories),localStorage.setItem("brandOfferPosters",t.brandOfferPosters),localStorage.setItem("brandVideoLinks",t.videoLinks);var o=JSON.stringify(t.brandCategories),r=JSON.stringify(t.brandOfferPosters);localStorage.setItem("array",o),localStorage.setItem("jsonarray",r),e("/branddetails")}(t)},src:t.brandLogo})})}))})]}):null})})}),Z=o(6495),N=o(6090),I=o(9126),w=0;var C=function(){localStorage.setItem("quantity",1);var e=(0,l.useState)([]),t=(0,r.Z)(e,2),o=(t[0],t[1]),c=(0,l.useState)(!1),i=(0,r.Z)(c,2),d=i[0],p=i[1],h=(0,l.useState)([]),S=(0,r.Z)(h,2),C=S[0],k=S[1],P=(0,l.useState)(!1),T=(0,r.Z)(P,2),z=T[0],B=T[1],L=(0,l.useState)([]),E=(0,r.Z)(L,2),M=(E[0],E[1]),O=(0,l.useState)(!1),A=(0,r.Z)(O,2),D=A[0],R=A[1],H=(0,l.useState)([]),_=(0,r.Z)(H,2),G=(_[0],_[1],(0,l.useState)([])),W=(0,r.Z)(G,2),F=(W[0],W[1]),J=(0,l.useState)(!1),V=(0,r.Z)(J,2),U=V[0],Y=V[1],K=(0,l.useState)([]),q=(0,r.Z)(K,2),Q=(q[0],q[1]),X=(0,l.useState)(!1),$=(0,r.Z)(X,2),ee=$[0],te=$[1],oe=(0,l.useState)([]),re=(0,r.Z)(oe,2),ae=re[0],ne=(re[1],(0,l.useState)([])),se=(0,r.Z)(ne,2),le=se[0],ce=(se[1],(0,l.useState)([])),ie=(0,r.Z)(ce,2),ue=ie[0],de=(ie[1],(0,l.useState)(!1)),me=(0,r.Z)(de,2),ge=me[0],fe=me[1],pe=(0,l.useState)(!0),he=(0,r.Z)(pe,2),xe=he[0],ye=he[1];w=null==localStorage.getItem("comparecount")||void 0==localStorage.getItem("comparecount")?0:localStorage.getItem("comparecount");var be=(0,l.useState)(w),Se=(0,r.Z)(be,2),je=(Se[0],Se[1],[]);localStorage.getItem("jwtToken"),(0,l.useEffect)((function(){if(window.scrollTo(0,0),!d&&!z&&!D&&!U&&!ge&&!ee){m()({method:"get",url:j.Z+"/get-offers"}).then((function(e){200==e.status&&(e.data.map((function(e){"YES"===e.isMegaPoster?ae.push(e):le.push(e)})),o(e.data),p(!0))})).catch((function(e){console.log("error")})),m().get(j.Z+"/refresh-token",{headers:{Authorization:"Bearer "+(0,Z.e)("jwtToken"),isRefreshToken:"true"}}).then((function(e){200==e.status&&(0,Z.d)("jwtToken",e.data.token,20)})).catch((function(e){console.log("error")})),m().get(j.Z+"/get-categories").then((function(e){200==e.status&&(k(e.data),B(!0),localStorage.setItem("categoryDisplay",JSON.stringify(e.data),20),ye(!1))})).catch((function(e){console.log("error in fetching categories"),ye(!1)})),null!=localStorage.getItem("Wishlist")&&m().get(j.Z+"/wishlist",{headers:{Authorization:"Bearer "+(0,Z.e)("jwtToken")}}).then((function(e){200==e.status&&(e.data.map((function(e){je.push(e.modelNumber)})),localStorage.setItem("Wishlist",je))})).catch((function(e){console.log("Error")})),m().get(j.Z+"/deals").then((function(e){200==e.status&&(Q(e.data),te(!0),localStorage.setItem("Deals",JSON.stringify(e.data)))})).catch((function(e){console.log("error in deals")})),m().get(j.Z+"/hybrid-posters").then((function(e){200==e.status&&(M(e.data),R(!0))})).catch((function(e){console.log("error in hybrid posters")})),m().get(j.Z+"/get-posters").then((function(e){200==e.status&&(F(e.data),Y(!0),localStorage.setItem("Posters",JSON.stringify(e.data)))})).catch((function(e){console.log("error in get-posters")}));var e=[];C.map((function(t){e.push(m().get(j.Z+"/get-products-by-category/"+t.category))})),m().all(e).then(m().spread((function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t.map((function(e){ue.push(e.data)})),fe(!0)})))}}),[]);var ve=document.getElementById("myBtn");return window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?ve.style.display="block":ve.style.display="none"},xe?null:(0,u.jsxs)("div",{children:[(0,u.jsx)(y.Ix,{position:"top-center"}),(0,u.jsx)(g.Z,{id:"myBtn",title:"Go to top",children:(0,u.jsx)(I.HTv,{onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}})}),D?(0,u.jsx)(a.Z,{}):null,(0,u.jsx)(a.Z,{}),(0,u.jsxs)("div",{className:"cat_navbar",children:[z?(0,u.jsx)(n.Z,{categoryDetail:C}):(0,u.jsx)(n.Z,{categoryDetail:[]}),0===ae.length?null:(0,u.jsx)(s.Z,{offerPosters:ae}),z?C.map((function(e){return(0,u.jsxs)("div",{children:[(0,u.jsx)(b.default,{cattitle:e.category}),(0,u.jsx)("br",{})]})})):null,(0,u.jsx)(v,{}),(0,u.jsx)(x,{MiniPosters:le}),(0,u.jsx)(N.Z,{MiniPosters:le}),(0,u.jsx)(f.Z,{})]})]})}},6244:function(e,t,o){o.d(t,{Z:function(){return P}});var r=o(2791),a=o(9506),n=o(7022),s=o(6355),l=o(3666),c=o(2592),i=o(6458),u=o(1413),d=o(5987),m=o(1694),g=o.n(m),f=(o(3309),o(239)),p=o(1337),h=o(162),x=o(885),y=o(9007),b=o(4787),S=o(4944),j=o(184),v=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],Z=r.forwardRef((function(e,t){var o=e.bsPrefix,r=e.active,a=e.disabled,n=e.eventKey,s=e.className,l=e.variant,c=e.action,i=e.as,m=(0,d.Z)(e,v);o=(0,h.vE)(o,"list-group-item");var f=(0,b.v)((0,u.Z)({key:(0,S.h)(n,m.href),active:r},m)),p=(0,x.Z)(f,2),Z=p[0],N=p[1],I=(0,y.Z)((function(e){if(a)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));a&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var w=i||(c?m.href?"a":"button":"div");return(0,j.jsx)(w,(0,u.Z)((0,u.Z)((0,u.Z)({ref:t},m),Z),{},{onClick:I,className:g()(s,o,N.isActive&&"active",a&&"disabled",l&&"".concat(o,"-").concat(l),c&&"".concat(o,"-action"))}))}));Z.displayName="ListGroupItem";var N=Z,I=["className","bsPrefix","variant","horizontal","numbered","as"],w=r.forwardRef((function(e,t){var o,r=(0,f.Ch)(e,{activeKey:"onSelect"}),a=r.className,n=r.bsPrefix,s=r.variant,l=r.horizontal,c=r.numbered,i=r.as,m=void 0===i?"div":i,x=(0,d.Z)(r,I),y=(0,h.vE)(n,"list-group");return l&&(o=!0===l?"horizontal":"horizontal-".concat(l)),(0,j.jsx)(p.Z,(0,u.Z)((0,u.Z)({ref:t},x),{},{as:m,className:g()(a,y,s&&"".concat(y,"-").concat(s),o&&"".concat(y,"-").concat(o),c&&"".concat(y,"-numbered"))}))}));w.displayName="ListGroup";var C=Object.assign(w,{Item:N}),k=o(6871);var P=function(e){var t=e.categoryDetail,o=(0,k.s0)();return(0,j.jsx)("div",{className:"Category",children:["sm"].map((function(e){return(0,j.jsx)(a.Z,{className:"cat_nav",style:{background:"#2b2d42",zIndex:"1",height:60},bg:"dark",expand:e,variant:"dark",children:(0,j.jsxs)(n.Z,{fluid:!0,children:[(0,j.jsx)(a.Z.Toggle,{"aria-controls":"offcanvasNavbar-expand-".concat(e)}),(0,j.jsxs)(a.Z.Offcanvas,{id:"offcanvasNavbar-expand-".concat(e),"aria-labelledby":"offcanvasNavbarLabel-expand-".concat(e),placement:"start",children:[(0,j.jsx)(s.Z.Header,{closeButton:!0,children:(0,j.jsx)(s.Z.Title,{id:"offcanvasNavbarLabel-expand-".concat(e),children:"CATEGORIES"})}),(0,j.jsx)(s.Z.Body,{children:(0,j.jsx)(l.Z,{className:"justify-content-center flex-grow-1 pe-3",children:t.map((function(e){return(0,j.jsxs)(l.Z.Link,{children:[(0,j.jsx)(c.Z,{style:{background:"none"},thumbnail:"true",src:e.category_image,className:"categoryImage"}),(0,j.jsx)(i.Z,{right:!0,className:"catdropdown",title:e.category,renderMenuOnMount:!0,children:e.subCategories.map((function(t){return(0,j.jsxs)("div",{style:{display:"block",padding:10,width:"max-content"},children:[(0,j.jsx)("h5",{children:t.subCategoryName}),(0,j.jsx)(C,{children:t.subSubCategories.map((function(r){return(0,j.jsx)(C.Item,{style:{marginTop:"4px"},onClick:function(){return a=e.category,n=t.subCategoryName,s=r.subSubCategoryName,l=r.modelNumber,localStorage.setItem("Category",a),localStorage.setItem("SubCategory",n),localStorage.setItem("SubSubCategory",s),localStorage.setItem("Model Number",l),void o("/"+a+"/"+n+"/"+s);var a,n,s,l},children:r.subSubCategoryName})}))})]})}))})]})}))})})]})]})},e)}))})}},9850:function(e,t,o){o.r(t);var r=o(4942),a=o(885),n=o(2791),s=o(9743),l=o(2677),c=(o(8563),o(7152),o(8820)),i=o(6871),u=o(4569),d=o.n(u),m=o(6495),g=o(5985),f=o(759),p=(o(1144),o(6429),o(115)),h=o(184);t.default=function(e){var t=e.cattitle,o=(0,m.e)("jwtToken"),u=(0,n.useState)(!1),x=(0,a.Z)(u,2),y=(x[0],x[1],(0,n.useState)(0)),b=(0,a.Z)(y,2),S=b[0],j=(b[1],(0,n.useState)(!1)),v=(0,a.Z)(j,2),Z=(v[0],v[1]),N=(0,n.useState)(!1),I=(0,a.Z)(N,2),w=(I[0],I[1],(0,n.useState)(!1)),C=(0,a.Z)(w,2),k=(C[0],C[1],(0,n.useState)([])),P=(0,a.Z)(k,2),T=P[0],z=P[1],B=(0,n.useState)(!1),L=(0,a.Z)(B,2),E=L[0],M=L[1],O=(0,i.s0)();function A(e){console.log("Index",e),localStorage.setItem("productId",e.productId),localStorage.setItem("productSelected",e.modelNumber),localStorage.setItem("Category",e.category),localStorage.setItem("SubCategory","Brand"),localStorage.setItem("SubSubCategory",e.subCategoryMap.Brand),O("/productDetails")}(0,n.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>700?Z(!0):Z(!1)})),E||d().get(p.Z+"/get-products-by-category/"+t).then((function(e){200==e.status&&(z(e.data),M(!0))})).catch((function(e){console.log(e)}))})),localStorage.setItem("comparecount",S),(0,m.d)("countcompare",S,20);var D=T.slice(0,4);return E?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"categoryproductswiper",children:(0,h.jsxs)(f.L5,{className:"categoryproductscontainer",children:[(0,h.jsxs)(s.Z,{className:"categoryproductsrow",children:[(0,h.jsxs)(l.Z,{md:8,children:[(0,h.jsx)("svg",{className:"svgtitle",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("filter",{id:"motion-blur-filter",filterUnits:"userSpaceOnUse",children:(0,h.jsx)("feGaussianBlur",{stdDeviation:"100 0"})})}),(0,h.jsx)("span",{className:"categorytitle",style:{marginLeft:"20px"},"filter-content":"S",children:t})]}),(0,h.jsx)(l.Z,{md:4,style:{display:"flex",justifyContent:"end"},children:(0,h.jsxs)("button",{onClick:function(){return function(e){localStorage.setItem("Category",e),localStorage.removeItem("SubCategory"),localStorage.removeItem("SubSubCategory"),O("/categoryProductsall")}(t)},class:"explore",children:["View More",(0,h.jsx)("span",{class:"icon-right after"})]})})]}),(0,h.jsx)(f.uZ,{style:{justifyContent:"center",padding:"10px"},className:"row-cols-1 row-cols-md-3 g-4",children:D.map((function(e){var t,a,n;t={url:e.productImage1},(0,r.Z)(t,"url",e.productImage1),(0,r.Z)(t,"url",e.productImage1);return(0,h.jsxs)(f.Yl,{className:"categoryproductscard",children:[(0,h.jsxs)("div",{className:"cardimg",children:[(0,h.jsx)(f.PH,{className:"cardimage",src:e.productImage1,alt:"...",position:"top"}),(0,h.jsx)(f.PH,{onClick:function(){return A(e)},className:"cardimage2",src:e.productImage1,alt:"...",position:"top"})]}),null!=localStorage.getItem("wishlistproduct")&&localStorage.getItem("wishlistproduct").includes(e.modelNumber)?(0,h.jsx)(c.M_L,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end",fill:"rgb(255, 88, 88)"},className:"wishlisticon",size:30,onClick:function(){return function(e){console.log("Wishlist",localStorage.getItem("wishlistproduct")),console.log("in remove");var t={modelNumber:e.modelNumber};d().post(p.Z+"/delete-wishlist",t,{headers:{Authorization:"Bearer "+(0,m.e)("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status){var o=localStorage.getItem("wishlistproduct").split(","),r=[];o.map((function(t){""!==t&&t!==e.modelNumber&&r.push(t)})),localStorage.setItem("wishlistproduct",r),window.location.reload()}})).catch((function(e){console.log("Error",e)}))}(e)}}):(0,h.jsx)(c.lo,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end"},className:"wishlisticon",size:30,onClick:function(){return function(e){if("true"!==(0,m.e)("isLoggedIn"))O("/login");else{if(null==localStorage.getItem("wishlistproduct"))localStorage.setItem("wishlistproduct",e.modelNumber);else{var t=localStorage.getItem("wishlistproduct").split(","),r=!0;t.map((function(o){o===e.modelNumber&&(t.splice(t.indexOf(o),1),localStorage.setItem("wishlistproduct",t),r=!1)})),r&&localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+e.modelNumber),O("/")}var a={modelNumber:e.modelNumber};d().post(p.Z+"/wishlist",a,{headers:{Authorization:"Bearer "+o,"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&g.Am.success((0,h.jsx)("b",{children:"Added to wishlist successfully"}))})).catch((function(e){406==e.response.status?g.Am.warn((0,h.jsx)("b",{children:"Item already present in Wishlist"})):(g.Am.error((0,h.jsx)("b",{children:"SignIn First"})),console.log("Error",e))}))}}(e)}}),(0,h.jsxs)(f.H7,{className:"categoryproductscardbody",children:[(0,h.jsxs)(f.QM,{className:"cardtitle",children:[e.productName," "]}),(0,h.jsxs)(f.CN,{onClick:function(){return A(e)},style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:[(0,h.jsx)("b",{style:{fontSize:"18px"},children:"MSP:"})," ",(0,h.jsxs)("b",{style:{marginRight:"20px",color:"#ed1c24",fontSize:"18px"},children:["\u20b9",e.offerPrice]})," ",(0,h.jsx)("br",{}),(0,h.jsx)("b",{style:{fontSize:"16px",color:"grey"},children:"MRP:"}),"  ",(0,h.jsxs)("b",{style:{textDecorationLine:"line-through",textDecorationStyle:"solid",marginRight:40,fontSize:"15px",color:"grey"},children:["\u20b9",e.productPrice]})]}),(a=e.offerPrice,n=e.productPrice,a!==n?(0,h.jsx)(f.Pp,{className:"text",children:"Offer Available"}):(0,h.jsx)(f.Pp,{className:"text",children:"No Offer Available"}))]}),(0,h.jsxs)(f.H7,{className:"categoryproductscardbodyonhover",children:[(0,h.jsxs)(f.QM,{className:"cardtitle",onClick:function(){return A(e)},children:[e.productName," "]}),(0,h.jsxs)(f.CN,{onClick:function(){return A(e)},style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:[(0,h.jsx)("b",{style:{fontSize:"18px"},children:"MSP:"})," ",(0,h.jsxs)("b",{style:{marginRight:"20px",color:"#ed1c24",fontSize:"18px"},children:["\u20b9",e.offerPrice]})," ",(0,h.jsx)("br",{}),(0,h.jsx)("b",{style:{fontSize:"16px",color:"grey"},children:"MRP:"}),"  ",(0,h.jsxs)("b",{style:{textDecorationLine:"line-through",textDecorationStyle:"solid",marginRight:40,fontSize:"15px",color:"grey"},children:["\u20b9",e.productPrice]})," "]}),(0,h.jsx)(f.Pp,{className:"text",onClick:function(){return A(e)},children:"View Details"})]})]})}))})]})})}):null}},936:function(e,t,o){o(2791);var r=o(2717),a=o(6871),n=o(9126),s=(o(3508),o(184));t.Z=function(e){var t=e.offerPosters,o=(0,a.s0)(),l=document.getElementById("myBtn");function c(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?l.style.display="block":l.style.display="none"},(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onclick:function(){return c()},id:"myBtn",title:"Go to top",children:(0,s.jsx)(n.HTv,{onClick:c})}),(0,s.jsx)(r.Z,{style:{cursor:"pointer"},className:"offerslide",children:t.map((function(e){return(0,s.jsx)(r.Z.Item,{interval:1e3,onClick:function(){return function(e){localStorage.setItem("offerPostersModelNumber",e.modelNumbers),o("/offers")}(e)},children:(0,s.jsx)("img",{id:"classname",className:"d-block w-100",src:e.imageUrl,alt:e.alt,height:500})})}))})]})}},6429:function(){}}]);
//# sourceMappingURL=608.b78062cd.chunk.js.map