"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[429],{6244:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(2791),o=a(9506),r=a(7022),s=a(6355),c=a(3666),l=a(2592),i=a(6458),u=a(1413),d=a(5987),m=a(1694),g=a.n(m),f=(a(3309),a(239)),p=a(1337),v=a(162),y=a(885),b=a(9007),h=a(4787),x=a(4944),Z=a(184),j=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],S=n.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,o=e.disabled,r=e.eventKey,s=e.className,c=e.variant,l=e.action,i=e.as,m=(0,d.Z)(e,j);a=(0,v.vE)(a,"list-group-item");var f=(0,h.v)((0,u.Z)({key:(0,x.h)(r,m.href),active:n},m)),p=(0,y.Z)(f,2),S=p[0],N=p[1],C=(0,b.Z)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();S.onClick(e)}));o&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var I=i||(l?m.href?"a":"button":"div");return(0,Z.jsx)(I,(0,u.Z)((0,u.Z)((0,u.Z)({ref:t},m),S),{},{onClick:C,className:g()(s,a,N.isActive&&"active",o&&"disabled",c&&"".concat(a,"-").concat(c),l&&"".concat(a,"-action"))}))}));S.displayName="ListGroupItem";var N=S,C=["className","bsPrefix","variant","horizontal","numbered","as"],I=n.forwardRef((function(e,t){var a,n=(0,f.Ch)(e,{activeKey:"onSelect"}),o=n.className,r=n.bsPrefix,s=n.variant,c=n.horizontal,l=n.numbered,i=n.as,m=void 0===i?"div":i,y=(0,d.Z)(n,C),b=(0,v.vE)(r,"list-group");return c&&(a=!0===c?"horizontal":"horizontal-".concat(c)),(0,Z.jsx)(p.Z,(0,u.Z)((0,u.Z)({ref:t},y),{},{as:m,className:g()(o,b,s&&"".concat(b,"-").concat(s),a&&"".concat(b,"-").concat(a),l&&"".concat(b,"-numbered"))}))}));I.displayName="ListGroup";var k=Object.assign(I,{Item:N}),w=a(7689);var E=function(e){var t=e.categoryDetail,a=e.extraCategories,n=(0,w.s0)();function u(e){localStorage.setItem("Category",e),localStorage.removeItem("SubCategory"),localStorage.removeItem("SubSubCategory"),n("/categoryProductsall")}return console.log("categoryDetail",t),console.log("extraCategories",a),(0,Z.jsx)("div",{className:"Category",children:["sm"].map((function(e){return(0,Z.jsx)(o.Z,{className:"cat_nav",style:{background:"#FFFFFF",zIndex:"1",height:60},bg:"dark",expand:e,variant:"dark",children:(0,Z.jsxs)(r.Z,{fluid:!0,children:[(0,Z.jsx)(o.Z.Toggle,{"aria-controls":"offcanvasNavbar-expand-".concat(e)}),(0,Z.jsxs)(o.Z.Offcanvas,{id:"offcanvasNavbar-expand-".concat(e),"aria-labelledby":"offcanvasNavbarLabel-expand-".concat(e),placement:"start",children:[(0,Z.jsx)(s.Z.Header,{closeButton:!0,children:(0,Z.jsx)(s.Z.Title,{id:"offcanvasNavbarLabel-expand-".concat(e),children:"CATEGORIES"})}),(0,Z.jsx)(s.Z.Body,{children:(0,Z.jsxs)(c.Z,{className:"justify-content-center flex-grow-1 pe-3",children:[t.map((function(e){return(0,Z.jsxs)(c.Z.Link,{children:[(0,Z.jsx)(l.Z,{style:{background:"none"},thumbnail:"true",src:e.category_image,className:"categoryImage"}),(0,Z.jsx)(i.Z,{right:!0,className:"catdropdown",title:e.category,renderMenuOnMount:!0,children:e.subCategories.map((function(t){return(0,Z.jsxs)("div",{style:{display:"block",padding:10,width:"max-content"},children:[(0,Z.jsx)("h5",{style:{marginRight:40},children:t.subCategoryName}),(0,Z.jsx)(k,{children:t.subSubCategories.map((function(a){return(0,Z.jsx)(k.Item,{style:{marginTop:"4px",marginRight:50},onClick:function(){return o=e.category,r=t.subCategoryName,s=a.subSubCategoryName,c=a.modelNumber,localStorage.setItem("Category",o),localStorage.setItem("SubCategory",r),localStorage.setItem("SubSubCategory",s),localStorage.setItem("Model Number",c),void n("/"+o+"/"+r+"/"+s);var o,r,s,c},children:a.subSubCategoryName})}))})]})}))})]})})),a.map((function(e){return(0,Z.jsxs)(c.Z.Link,{children:[(0,Z.jsx)(l.Z,{style:{background:"none"},thumbnail:"true",src:e.imgUrl,className:"categoryImage"}),(0,Z.jsx)(i.Z,{right:!0,className:"catdropdown",title:e.parentName,renderMenuOnMount:!0,children:(0,Z.jsx)(k,{children:e.categories.map((function(e,t){return(0,Z.jsx)(k.Item,{style:{padding:"10px"},onClick:function(){return u(e.category)},children:e.category})}))})})]})}))]})})]})]})},e)}))})}},3281:function(e,t,a){a.r(t);var n=a(885),o=a(4569),r=a.n(o),s=a(2791),c=(a(6244),a(3360),a(160),a(7689)),l=(a(1724),a(542)),i=(a(5944),a(5395)),u=a(115),d=a(936),m=(a(3508),a(5985)),g=a(184),f=new Set;t.default=function(){(0,c.s0)();var e=(0,s.useState)([]),t=(0,n.Z)(e,2),a=t[0],o=(t[1],(0,s.useState)(!1)),p=(0,n.Z)(o,2),v=(p[0],p[1],(0,s.useState)(!1)),y=(0,n.Z)(v,2),b=(y[0],y[1],(0,s.useState)([])),h=(0,n.Z)(b,2),x=(h[0],h[1],(0,s.useState)(!1)),Z=(0,n.Z)(x,2),j=(Z[0],Z[1],(0,s.useState)(!1)),S=(0,n.Z)(j,2),N=(S[0],S[1],(0,s.useState)(0)),C=(0,n.Z)(N,2),I=(C[0],C[1],(0,s.useState)(!1)),k=(0,n.Z)(I,2),w=(k[0],k[1],(0,s.useState)(!1)),E=(0,n.Z)(w,2),T=(E[0],E[1],(0,s.useState)([])),P=(0,n.Z)(T,2),M=(P[0],P[1],(0,s.useState)([])),B=(0,n.Z)(M,2),F=B[0],L=(B[1],(0,s.useState)(!1)),z=(0,n.Z)(L,2),O=z[0],R=z[1];null===localStorage.getItem("CompareModels")||(localStorage.getItem("CompareModels")+",").split(",").map((function(e){f.add(e)}));(0,s.useEffect)((function(){O||r()({method:"get",url:u.Z+"/get-offers"}).then((function(e){200==e.status&&(e.data.map((function(e){"YES"===e.isMegaPoster&&e.category==localStorage.getItem("Category")&&F.push(e)})),R(!0))})).catch((function(e){console.log("error in get-offers")}))}));var G=document.getElementById("myBtn");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?G.style.display="block":G.style.display="none"};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Ix,{position:"top-center"}),(0,g.jsx)(l.Z,{className:"header",style:{position:"sticky"},productList:a}),(0,g.jsx)("div",{className:"filterproducts_poster",children:O?(0,g.jsx)(d.Z,{offerPosters:F}):null}),(0,g.jsx)("div",{children:(0,g.jsx)(i.Z,{})})]})}},936:function(e,t,a){a(2791);var n=a(2717),o=a(7689),r=a(9126),s=(a(3508),a(184));t.Z=function(e){var t=e.offerPosters,a=(0,o.s0)(),c=document.getElementById("myBtn");function l(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?c.style.display="block":c.style.display="none"},(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onclick:function(){return l()},id:"myBtn",title:"Go to top",children:(0,s.jsx)(r.HTv,{onClick:l})}),(0,s.jsx)(n.Z,{style:{cursor:"pointer"},className:"offerslide",children:t.map((function(e){return(0,s.jsx)(n.Z.Item,{interval:1e3,onClick:function(){return function(e){localStorage.setItem("offerPostersModelNumber",e.modelNumbers),a("/offers")}(e)},children:(0,s.jsx)("img",{id:"classname",className:"d-block w-100",src:e.imageUrl,alt:e.alt,height:500})})}))})]})}}}]);
//# sourceMappingURL=429.dfc5f3f7.chunk.js.map