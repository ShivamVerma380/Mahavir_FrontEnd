"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[333],{4333:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(885),o=n(4569),a=n.n(o),l=n(2791),s=n(542),i=n(9743),c=n(7022),u=n(2677),d=n(160),h=n(2592),f=n(3360),p=n(6458),m=n(115),g=n(7689),v=n(6495),x=n(184);var j=function(e){var t=e.product,n=(0,g.s0)(),o=(0,l.useState)(t.length),s=(0,r.Z)(o,2),c=s[0],j=(s[1],[]);(1===c||2===c||3===c||0===c)&&j.push("God");var y=(0,l.useState)([]),S=(0,r.Z)(y,2),b=S[0],Z=S[1],C=(0,l.useState)(!1),I=(0,r.Z)(C,2),N=I[0],k=I[1],w=(0,l.useState)("Choose Brand \u25bc"),M=(0,r.Z)(w,2),O=M[0],P=M[1],z=(0,l.useState)(),H=(0,r.Z)(z,2),T=H[0],R=H[1],_=(0,l.useState)(!1),E=(0,r.Z)(_,2),D=E[0],F=E[1],L=(0,l.useState)("Choose Model \u25bc"),A=(0,r.Z)(L,2),B=A[0],q=A[1],W=(0,l.useState)(t),X=(0,r.Z)(W,2),G=X[0],J=(X[1],(0,l.useState)(!0)),V=(0,r.Z)(J,2),Y=V[0];function K(e){console.log("Index",e),localStorage.setItem("productId",e.productId),localStorage.setItem("productSelected",e.modelNumber),localStorage.setItem("Category",e.category),localStorage.setItem("SubCategory","Brand"),localStorage.setItem("SubSubCategory",e.subCategoryMap.Brand),n("/productDetails")}return V[1],(0,l.useEffect)((function(){c<4&&!N&&a().get(m.Z+"/get-add-to-compare-subcat/"+localStorage.getItem("Category")+"/Brand").then((function(e){200==e.status&&Z(e.data),k(!0)})).catch((function(e){console.log("error")}))})),localStorage.setItem("Arr",j),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(i.Z,{className:"CompareHeader",children:[(0,x.jsxs)(u.Z,{md:2,style:{justifyContent:"center",marginTop:"50px"},className:"colll",children:[t.length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsxs)("p",{style:{fontSize:"18px"},children:["Compare ",t.length]})}),(0,x.jsx)(i.Z,{children:(0,x.jsx)("h5",{style:{fontSize:"18px"},children:t[0].productName})}),(0,x.jsx)(i.Z,{children:(0,x.jsx)("p",{children:(0,x.jsx)("i",{children:"VS"})})}),(0,x.jsx)(i.Z,{children:(0,x.jsx)("h5",{children:"Others"})})]}):(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),t.length>0?(0,x.jsx)("h6",{children:(0,x.jsx)(d.Z,{children:(0,x.jsx)(d.Z.Check,{type:"checkbox",label:"Show Only Differences",onChange:function(e){e.target.checked?localStorage.setItem("isChecked",!0):localStorage.removeItem("isChecked"),window.location.reload()},defaultChecked:!!localStorage.getItem("isChecked")})})}):(0,x.jsx)("br",{})]}),Y?G.map((function(e,t){return(0,x.jsxs)(u.Z,{md:2,className:"colll",children:[(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(h.Z,{style:{height:"130px",width:"190px",alignContent:"center",marginTop:"50px",cursor:"pointer"},src:e.productImage1,onClick:function(){return K(e)}}),(0,x.jsx)(f.Z,{className:"cross",style:{height:"40px",width:"40px"},onClick:function(){return function(e){var t=(0,v.e)("addToCompare").split(","),n=!0,r=[];t.map((function(t){n?(t===e&&(n=!1),n&&r.push(t)):r.push(t)})),(0,v.d)("addToCompare",r,20),window.location.reload()}(e.modelNumber)},children:"X"})]}),(0,x.jsx)("p",{style:{marginTop:"20px",fontSize:"18px",cursor:"pointer"},onClick:function(){return K(e)},children:e.productName}),(0,x.jsxs)("h6",{style:{color:"red"},children:["MSP \u20b9",e.offerPrice]}),(0,x.jsxs)("h6",{style:{fontSize:"15px",textDecorationLine:"line-through"},children:["MRP \u20b9",e.productPrice]}),(0,x.jsxs)("h6",{style:{color:"red",fontSize:"15px"},children:[parseInt(100*(e.productPrice.replace(",","")-e.offerPrice.replace(",",""))/e.productPrice.replace(",","")),"% OFF  You save \u20b9",e.productPrice.replace(",","")-e.offerPrice.replace(",","")]})]})})):null,j.map((function(e){return(0,x.jsxs)(u.Z,{md:2,className:"colll",children:[(0,x.jsx)(h.Z,{thumbnail:"true",height:130,width:190,style:{marginTop:"50px"}}),(0,x.jsx)("h6",{style:{fontSize:"18px",marginTop:"20px",color:"red"},children:"Add a Product"}),N?(0,x.jsx)("div",{className:"choosebrand",children:(0,x.jsx)(p.Z,{title:O,id:"collasible-nav-dropdown",children:b.map((function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z.Item,{onClick:function(){return t=e.subSubCategoryName,void b.map((function(e){e.subSubCategoryName===t&&(P(t),q("Choose Model \u25bc"),R(e.modelResponses),F(!0))}));var t},children:e.subSubCategoryName}),(0,x.jsx)(p.Z.Divider,{})]})}))})}):null,D?(0,x.jsx)("div",{className:"choosesubcat",children:(0,x.jsx)(p.Z,{title:B,id:"collasible-nav-dropdown",children:T.map((function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z.Item,{onClick:function(){return function(e,t){var n=(0,v.e)("addToCompare").split(",");n.push(t),(0,v.d)("addToCompare",n,20),window.location.reload()}(e.modelName,e.modelNumber)},children:e.modelName}),(0,x.jsx)(p.Z.Divider,{})]})}))})}):null]})}))]})})},y=n(46);var S=function(e){var t=e.product,n=e.showOnlyDiff,o=t[0].productHighlights.split(";"),a=(0,l.useState)(new Set),s=(0,r.Z)(a,2),c=s[0],d=(s[1],(0,l.useState)(!1)),h=(0,r.Z)(d,2);return h[0],h[1],localStorage.getItem("isChecked")?null:(0,x.jsxs)(i.Z,{className:"ComparisonHeader",children:[n?null:(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("h5",{children:"Product Highlights"})}),n?null:t.map((function(e){return(0,x.jsx)(u.Z,{md:2,className:"colll",children:e.productHighlights.split(";").map((function(e){return(0,x.jsxs)("h6",{children:["\u2022 ",e," "]})}))})})),n?void t.map((function(e,t){e.productHighlights.split(";").map((function(e,t){e!==o[t]&&c.add(t)}))})):null,n?(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("h5",{children:"Product hightlights"})}):null,n?t.map((function(e){return(0,x.jsx)(u.Z,{md:2,className:"colll",children:e.productHighlights.split(";").map((function(e,t){return(0,x.jsx)(y.W2,{children:c.has(t)?(0,x.jsx)("p",{children:e}):null})}))})})):null,function(){var e=4-t.length;1==t.length?e-=2:2==t.length&&(e-=1);for(var n=[],r=0;r<e;r++)n.push(0);return n}().map((function(e){return(0,x.jsx)(u.Z,{md:2})}))]})};var b=function(e){var t=e.title,n=e.product,o=[],a=[],s=(0,l.useState)(!1),c=(0,r.Z)(s,2),d=c[0],h=c[1];function f(){var e=4-n.length;1==n.length?e-=2:2==n.length&&(e-=1);for(var t=[],r=0;r<e;r++)t.push(0);return t}return localStorage.getItem("isChecked")?(0,x.jsxs)(i.Z,{className:"ComparisonHeader",children:[function(){if(!d){for(var e in o=[],n[0].productInformation)o.push(e);h(!0)}}(),function(e){var r=[];for(var o in n[0].productInformation[e])1==n.length?r.push(o):2==n.length?n[0].productInformation[e][o]!==n[1].productInformation[e][o]&&r.push(o):3==n.length?n[0].productInformation[e][o]===n[1].productInformation[e][o]&&n[0].productInformation[e][o]===n[2].productInformation[e][o]||r.push(o):4==n.length&&(n[0].productInformation[e][o]===n[1].productInformation[e][o]&&n[0].productInformation[e][o]===n[2].productInformation[e][o]&&n[0].productInformation[e][o]===n[3].productInformation[e][o]&&n[1].productInformation[e][o]===n[2].productInformation[e][o]&&n[1].productInformation[e][o]===n[3].productInformation[e][o]&&n[2].productInformation[e][o]===n[3].productInformation[e][o]||r.push(o));return r.length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("h5",{children:t.substring(0,t.length-1)})}),n.map((function(t){return(0,x.jsx)(u.Z,{md:2,className:"colll",children:r.map((function(n){return console.log("k1",n),(0,x.jsxs)("h6",{children:[n,(0,x.jsx)("span",{children:" "}),t.productInformation[e][n]]})}))})})),f().map((function(e){return(0,x.jsx)(u.Z,{md:2})}))]}):null}(t)]}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(i.Z,{className:"ComparisonHeader",children:[(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("h5",{children:t.substring(0,t.length-1)})}),n.map((function(e){return function(e){for(var t in o=[],a=[],e)o.push(t),a.push(e[t])}(e.productInformation[t]),(0,x.jsx)(u.Z,{md:2,className:"colll",children:o.map((function(e,t){return(0,x.jsxs)("h6",{children:[e,(0,x.jsx)("span",{children:" "}),a[t]]})}))})})),f().map((function(e){return(0,x.jsx)(u.Z,{md:2})}))]})})},Z=n(6044),C=(n(4164),function(e){var t=e.review,n=(0,l.useState)([]),o=(0,r.Z)(n,2),s=o[0],c=(o[1],(0,l.useState)(!1)),d=(0,r.Z)(c,2),h=d[0],f=d[1];return(0,l.useEffect)((function(){if(!h){var e=[];t.map((function(t){""!==t&&e.push(a().get(m.Z+"/get-reviews/"+t.modelNumber))})),a().all(e).then(a().spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((function(e){s.push(e.data)})),f(!0)}))).catch((function(e){console.log("error in get-reviews/")}))}})),h?(0,x.jsx)("div",{children:(0,x.jsxs)(i.Z,{className:"ComparisonHeader",children:[(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("h5",{children:"Rating & Reviews"})}),s.map((function(e){return(0,x.jsxs)(u.Z,{md:2,className:"colll",children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(Z.Z,{count:5,value:e.averageRatings,size:28,edit:!1,color2:"#198754"})}),(0,x.jsx)(i.Z,{children:(0,x.jsxs)("h5",{style:{fontSize:"16px"},children:[e.totalReviews," Reviews & ",e.totalRatings," Ratings"]})})]})})),function(){var e=4-t.length;2!=t.length&&4!=t.length||(e=4-t.length-1),1==t.length&&(e=4-t.length-2);for(var n=[],r=0;r<e;r++)n.push(0);return n}().map((function(e){return(0,x.jsx)(u.Z,{md:2})}))]})}):null});var I=function(){var e=(0,g.s0)(),t=(0,l.useState)([]),n=(0,r.Z)(t,2),o=n[0],d=(n[1],(0,l.useState)(!1)),h=(0,r.Z)(d,2),f=h[0],p=h[1],y=[];return(0,l.useEffect)((function(){if(!f){var e=(0,v.e)("addToCompare").split(","),t=[];e.map((function(e){""!==e&&t.push(a().get(m.Z+"/get-products/"+e))})),a().all(t).then(a().spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((function(e){o.push(e.data)})),p(!0)}))).catch((function(e){console.log("error in /get-products/")}))}})),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("body",{style:{background:"whitesmoke"},children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(s.Z,{})}),(0,x.jsx)(c.Z,{style:{background:"white",paddingLeft:"0px",paddingRight:"0px"},children:(0,x.jsx)(i.Z,{children:f?(0,x.jsxs)("div",{children:[(0,x.jsx)(j,{product:o}),o.length>0?(0,x.jsx)(C,{review:o}):null,o.length>0?(0,x.jsx)(S,{product:o}):null,(0,x.jsxs)(i.Z,{className:"ComparisonHeader",children:[(0,x.jsx)(u.Z,{style:{marginLeft:"1px"},md:2,className:"colll"}),o.map((function(t){return(0,x.jsx)(u.Z,{md:2,className:"colll",children:(0,x.jsx)("button",{className:"buynow",onClick:function(){return function(t){"true"!==(0,v.e)("isLoggedIn")?e("/login"):(localStorage.setItem("buyProduct",JSON.stringify(t)),e("/checkout"))}(t)},children:"Buy Now"})})})),function(){var e=4-o.length;1==o.length?e-=2:2==o.length&&(e-=1);for(var t=[],n=0;n<e;n++)t.push(0);return t}().map((function(e){return(0,x.jsx)(u.Z,{md:2})}))]}),o.length>0?function(e){for(var t in e)y.push(t)}(o[0].productInformation):null,y.map((function(e){return(0,x.jsx)(b,{title:e,product:o})}))]}):null})})]})})}},6044:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2791),l=i(a),s=i(n(2007));function i(e){return e&&e.__esModule?e:{default:e}}var c={overflow:"hidden",position:"relative"},u={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"},d=function(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e=r({},e),n.state={uniqueness:(Math.random()+"").replace(".",""),value:e.value||0,stars:[],halfStar:{at:Math.floor(e.value),hidden:e.half&&e.value%1<.5}},n.state.config={count:e.count,size:e.size,char:e.char,color1:e.color1,color2:e.color2,half:e.half,edit:e.edit},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.setState({stars:this.getStars(this.state.value)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({stars:this.getStars(e.value),value:e.value,halfStar:{at:Math.floor(e.value),hidden:this.state.config.half&&e.value%1<.5}})}},{key:"isDecimal",value:function(e){return e%1!==0}},{key:"getRate",value:function(){return this.state.config.half?Math.floor(this.state.value):Math.round(this.state.value)}},{key:"getStars",value:function(e){"undefined"===typeof e&&(e=this.getRate());for(var t=[],n=0;n<this.state.config.count;n++)t.push({active:n<=e-1});return t}},{key:"mouseOver",value:function(e){var t=this.state,n=t.config,r=t.halfStar;if(n.edit){var o=Number(e.target.getAttribute("data-index"));if(n.half){var a=this.moreThanHalf(e,n.size);r.hidden=a,a&&(o+=1),r.at=o}else o+=1;this.setState({stars:this.getStars(o)})}}},{key:"moreThanHalf",value:function(e,t){var n=e.target,r=e.clientX-n.getBoundingClientRect().left;return(r=Math.round(Math.abs(r)))>t/2}},{key:"mouseLeave",value:function(){var e=this.state,t=e.value,n=e.halfStar,r=e.config;r.edit&&(r.half&&(n.hidden=!this.isDecimal(t),n.at=Math.floor(this.state.value)),this.setState({stars:this.getStars()}))}},{key:"clicked",value:function(e){var t=this.state,n=t.config,r=t.halfStar;if(n.edit){var o=Number(e.target.getAttribute("data-index")),a=void 0;if(n.half){var l=this.moreThanHalf(e,n.size);r.hidden=l,l&&(o+=1),a=l?o:o+.5,r.at=o}else a=o+=1;this.setState({value:a,stars:this.getStars(o)}),this.props.onChange(a)}}},{key:"renderHalfStarStyleElement",value:function(){var e=this.state,t=e.config,n=e.uniqueness;return l.default.createElement("style",{dangerouslySetInnerHTML:{__html:d(t.color2,n)}})}},{key:"renderStars",value:function(){var e=this,t=this.state,n=t.halfStar,o=t.stars,a=t.uniqueness,s=t.config,i=s.color1,c=s.color2,d=s.size,h=s.char,f=s.half,p=s.edit;return o.map((function(t,o){var s="";f&&!n.hidden&&n.at===o&&(s="react-stars-"+a);var m=r({},u,{color:t.active?c:i,cursor:p?"pointer":"default",fontSize:d+"px"});return l.default.createElement("span",{className:s,style:m,key:o,"data-index":o,"data-forhalf":h,onMouseOver:e.mouseOver.bind(e),onMouseMove:e.mouseOver.bind(e),onMouseLeave:e.mouseLeave.bind(e),onClick:e.clicked.bind(e)},h)}))}},{key:"render",value:function(){var e=this.props.className;return l.default.createElement("div",{className:e,style:c},this.state.config.half?this.renderHalfStarStyleElement():"",this.renderStars())}}]),t}(a.Component);h.propTypes={className:s.default.string,edit:s.default.bool,half:s.default.bool,value:s.default.number,count:s.default.number,char:s.default.string,size:s.default.number,color1:s.default.string,color2:s.default.string},h.defaultProps={edit:!0,half:!0,value:0,count:5,char:"\u2605",size:15,color1:"gray",color2:"#ffd700",onChange:function(){}},t.Z=h}}]);
//# sourceMappingURL=333.96c2a23a.chunk.js.map